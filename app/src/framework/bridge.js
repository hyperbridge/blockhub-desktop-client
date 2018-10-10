import fs from 'fs'
import CryptoJS from 'crypto-js'
import bip39 from 'bip39'
import crypto from 'crypto'
import electron from 'electron'
import Token from 'hyperbridge-token'
import FundingProtocol from 'funding-protocol'
import MarketplaceProtocol from 'marketplace-protocol'
import * as Wallet from './wallet'
import * as DB from '../db'
import * as Windows from '../main/windows'

export let config = {
}

const local = {
    requests: {},
    account: {
        wallet: null
    },
    passphrase: null,
    password: null,
    events: {},
}

export const on = (event, listener) => {
    if (typeof local.events[event] !== 'object') {
        local.events[event] = [];
    }
    local.events[event].push(listener);
    return () => removeListener(event, listener);
}

export const removeListener = (event, listener) => {
    if (typeof local.events[event] === 'object') {
        const idx = local.events[event].indexOf(listener);
        if (idx > -1) {
            local.events[event].splice(idx, 1);
        }
    }
}

export const emit = (event, ...args) => {
    if (typeof local.events[event] === 'object') {
        local.events[event].forEach(listener => listener.apply(this, args));
    }
}

export const once = (event, listener) => {
    const remove = on(event, (...args) => {
        remove();
        listener.apply(this, args);
    });
}

export const decrypt = (data, key) => {
    return CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
}

export const encrypt = (data, key) => {
    return CryptoJS.AES.encrypt(data, key).toString()
}

export const promptPasswordRequest = async (data = {}) => {
    return new Promise(async (resolve) => {
        // Web sends back password prompt response
        const res = await sendCommand('promptPasswordRequest', data)

        // Decrypt the passphrase and use to set web3 provider
        try {
            let passphrase = null
            if (DB.application.config.data.account.encrypt_passphrase) {
                passphrase = decrypt(DB.application.config.data.account.passphrase, res.password)
            } else {
                passphrase = DB.application.config.data.account.passphrase
            }

            if (!passphrase) {
                throw new Error()
            }

            local.passphrase = passphrase
            local.password = res.password
        } catch (e) {
            return await promptPasswordRequest({ error: { message: 'Password was incorrect', code: 1 } })
        }

        local.account.wallet = await Wallet.create(local.passphrase)

        // Desktop sends back all non-sensitive account info
        await setAccountRequest()

        // Check the wallet exists in the accounts contract
        // If not, prompt to add it
        // If no ETH, let them know they need it
        // Sync any changes from smart contract

        resolve()
    })
}

export const getProtocolByName = (name) => {
    if (name === 'funding') {
        return FundingProtocol
    } else if (name === 'marketplace') {
        return MarketplaceProtocol
    } else if (name === 'application') { // TODO: add a protocolToModule translator?
        return Token
    }

    throw new Error('[DesktopBridge] Unknown protocol requested: ' + name)
}

export const setContractAddress = async ({ protocolName, contractName, address }) => {
    return new Promise(async (resolve) => {
        let protocol = getProtocolByName(protocolName)

        protocol.api.ethereum
            .setContractAddress(contractName, address)
            .catch(() => {
                resolve('Unable to deploy contract')
            })
            .then(() => {
                resolve(null)
            })
    })
}

export const updateFundingProject = async ({ id, data }) => {
    const project = DB.funding.projects.findOne({ 'id': id })

    return new Promise(async (resolve, reject) => {
        const projectRegistrationContract = FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.deployed

        // TODO
        resolve(null, project)
    })
}

export const createFundingProject = async ({ title, description, about }) => {
    const project = {
        title,
        description,
        about,
        minContributionGoal: 1000,
        maxContributionGoal: 10000,
        contributionPeriod: 4,
        noRefunds: false,
        noTimeline: true,
    }

    return new Promise(async (resolve, reject) => {
        const projectRegistrationContract = FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.deployed

        projectRegistrationContract.ProjectCreated().watch((err, res) => {
            if (err) {
                console.warn('[BlockHub][Funding] Error', err)

                return reject(err)
            }

            project.$loki = undefined
            project.id = res.args.projectId.toNumber()

            try {
                DB.funding.projects.insert(project)
            } catch (e) {
                try {
                    DB.funding.projects.update(project)
                } catch (e) {
                    reject(e)
                }
            }

            resolve(null, project)
        })

        await projectRegistrationContract.createProject(
            project.title,
            project.description,
            project.about,
            project.minContributionGoal,
            project.maxContributionGoal,
            project.contributionPeriod,
            project.noRefunds,
            project.noTimeline
        )
    })
}

export const initProtocol = async ({ protocolName }) => {
    return new Promise(async (resolve) => {
        const protocol = getProtocolByName(protocolName)
        const state = DB[protocolName].config.data

        protocol.api.ethereum.init(
            state.ethereum[state.current_ethereum_network].user_from_address,
            state.ethereum[state.current_ethereum_network].user_to_address
        )

        for (let contractName in state.ethereum[state.current_ethereum_network].contracts) {
            const contract = state.ethereum[state.current_ethereum_network].contracts[contractName]

            if (contract.address) {
                await setContractAddress(protocolName, contractName, contract.address)
                    .then((err) => {
                        if (err) {
                            state.ethereum[state.current_ethereum_network].contracts[contractName].address = null
                            state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null
                        }
                    })
            } else {
                state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null
            }
        }

        resolve(null, state.ethereum[state.current_ethereum_network])
    })
}

export const deployContract = async ({ protocolName, contractName }) => {
    return new Promise(async (resolve) => {
        const protocol = getProtocolByName(protocolName)
        const state = DB[protocolName].config.data
        const links = []
        const params = []

        if (!state.ethereum[state.current_ethereum_network].contracts[contractName]) {
            state.ethereum[state.current_ethereum_network].contracts[contractName] = {
                created_at: null,
                address: null
            }
        }

        if (protocol.api.ethereum.state.contracts[contractName].links) {
            links = protocol.api.ethereum.state.contracts[contractName].links

            for (let i in links) {
                links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address

                if (!links[i].address) {
                    await deployContract(protocolName, links[i].name)

                    links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address
                }
            }
        }

        // Linking
        if (protocol === 'funding') {
            if (contractName === 'ProjectBase') {
                params = [
                    false
                ]
            }

            if (contractName === 'FundingVault') {
                params = [
                    state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address
                ]
            }

            if (contractName === 'Contribution'
                || contractName === 'Curation'
                || contractName === 'Developer'
                || contractName === 'ProjectContributionTier'
                || contractName === 'ProjectMilestoneCompletion'
                || contractName === 'ProjectMilestoneCompletionVoting'
                || contractName === 'ProjectRegistration'
                || contractName === 'ProjectTimeline'
                || contractName === 'ProjectTimelineProposal'
                || contractName === 'ProjectTimelineProposalVoting') {
                params = [
                    state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address,
                    false
                ]
            }
        }

        if (protocol === 'application') {
            if (payload.contractName !== 'EternalStorage') {
                params = [
                    state.ethereum[state.current_ethereum_network].contracts.EternalStorage.address
                ]
            }
        }

        protocol.api.ethereum
            .deployContract(contractName, links, params)
            .then(async (err, contract) => {
                state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = Date.now()
                state.ethereum[state.current_ethereum_network].contracts[contractName].address = contract.address

                DB[protocolName].config.update(state)
                DB.save()

                if (protocol === 'funding' && contractName === 'ProjectRegistration') {
                    const blankAddress = 0x0000000000000000000000000000000000000000
                    const projectRegistrationContract = protocol.api.ethereum.state.contracts.ProjectRegistration.deployed
                    const fundingStorageContract = protocol.api.ethereum.state.contracts.FundingStorage.deployed

                    await fundingStorageContract.registerContract('ProjectRegistration', blankAddress, projectRegistrationContract.address)
                    await projectRegistrationContract.initialize()

                    const developerContract = protocol.api.ethereum.state.contracts.Developer.deployed
                    await fundingStorageContract.registerContract('Developer', blankAddress, developerContract.address)
                    await developerContract.initialize()

                    let developerId = null
                    const developerAccount = state.ethereum[state.current_ethereum_network].user_from_address

                    developerContract.DeveloperCreated().watch((err, res) => {
                        if (err) {
                            console.warn('[BlockHub][Funding] Error', err)
                        }

                        developerId = res.args.developerId
                    })

                    await developerContract.createDeveloper('Hyperbridge', { from: developerAccount })
                }

                resolve(null, state.ethereum[state.current_ethereum_network].contracts[contractName])
            })
    })
}


export const handleDeployContract = async ({ protocolName, contractName }) => {
    return new Promise(async (resolve) => {
        const { err, contract } = deployContract(protocolName, contractName)

        resolve(err, contract)
    })
}

export const setAccountRequest = async () => {
    return new Promise(async (resolve) => {
        const account = DB.application.config.data.account
        const decryptedPrivateKey = decrypt(account.private_key, local.password)

        const req = {
            account: {
                public_address: account.public_address,
                secret_question_1: account.secret_question_1,
                secret_answer_1: 'HIDDEN',
                secret_question_2: account.secret_question_2,
                secret_answer_2: account.secret_answer_2,
                passphrase: 'HIDDEN',
                private_key: 'HIDDEN',
                password: 'HIDDEN',
                email: decrypt(account.email, decryptedPrivateKey),
                first_name: decrypt(account.first_name, decryptedPrivateKey),
                last_name: decrypt(account.last_name, decryptedPrivateKey),
                birthday: decrypt(account.birthday, decryptedPrivateKey),
            }
        }

        await sendCommand('setAccountRequest', req)

        resolve()
    })
}

export const updateAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        if (data.encrypt_passphrase) {
            if (data.encrypt_passphrase) {
                DB.application.config.data.account.passphrase = encrypt(DB.application.config.data.account.passphrase, local.password)
            } else {
                // We're disabling when previously enabled
                if (DB.application.config.data.account.encrypt_passphrase) {
                    DB.application.config.data.account.passphrase = decrypt(DB.application.config.data.account.passphrase, local.password)
                }
            }

            DB.application.config.data.account.encrypt_passphrase = data.encrypt_passphrase

            DB.save()

            await saveAccountFile()

            resolve()
        }
    })
}

export const readFile = (filepath) => {
    return new Promise(async (resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                console.log("An error ocurred reading the file :" + err.message)
                return reject(err)
            }

            resolve(data)
        })
    })
}

export const saveFile = (filepath, content) => {
    return new Promise(async (resolve) => {
        fs.writeFile(filepath, content, function (err) {
            if (err) {
                console.log("An error ocurred updating the file" + err.message)
                return reject(err)
            }

            console.log("The file has been succesfully saved")

            resolve()
        })
    })
}

export const saveAccountFileRequest = async (data) => {
    return new Promise(async (resolve) => {
        const path = electron.app.getAppPath()

        await saveFile(path + '/account.json', JSON.stringify(DB.application.account))
    })
}

export const importAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const path = electron.app.getAppPath()

        electron.dialog.showOpenDialog(async (fileNames) => {
            if (fileNames === undefined) {
                return reject("No file selected")
            }

            saveFile(path + '/account.json', await readFile(fileNames[0]))
            resolve()
        })
    })
}

export const exportAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const path = electron.app.getAppPath()
        const content = JSON.stringify(DB.application.account)

        electron.dialog.showSaveDialog((fileName) => {
            if (fileName === undefined) {
                return reject("You didn't save the file")
            }

            fs.writeFile(fileName, content, (err) => {
                if (err) {
                    return reject("An error ocurred creating the file " + err.message)
                }

                console.log("The file has been succesfully saved")
                resolve()
            })
        })
    })
}

export const saveAccountFile = async () => {
    return new Promise(async (resolve) => {
        const path = electron.app.getAppPath()

        saveFile(path + '/account.json', JSON.stringify(DB.application.account))

        resolve()
    })
}

export const generateWallet = async () => {
    return new Promise(async (resolve) => {
        let randomBytes = crypto.randomBytes(16) // 128 bits of seed is enough

        // the 12 word phrase
        let passphrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))

        const wallet = await Wallet.create(passphrase)

        resolve({
            passphrase: passphrase,
            public_address: wallet.public_address,
            private_key: wallet.private_key
        })
    })
}

export const handleCreateAccountRequest = async ({ email, password, birthday, first_name, last_name, secret_question_1, secret_answer_1, secret_question_2, secret_answer_2 }) => {
    return new Promise(async (resolve) => {
        const account = await generateWallet()
        const identity = await generateWallet()

        DB.application.config.data.account = {
            ...DB.application.config.data.account,
            public_address: account.public_address,
            secret_question_1: 'HIDDEN',
            secret_answer_1: 'HIDDEN',
            secret_question_2: 'HIDDEN',
            secret_answer_2: 'HIDDEN',
            encrypt_passphrase: false,
            passphrase: account.passphrase,
            private_key: encrypt(account.private_key, password),
            password: encrypt(secret_answer_1 + birthday, password),
            email: encrypt(email, account.private_key),
            first_name: encrypt(first_name, account.private_key),
            last_name: encrypt(last_name, account.private_key),
            birthday: encrypt(birthday, account.private_key),
            current_identity: {
                id: 1
            },
            identities: [
                {
                    id: 1,
                    name: 'Default',
                    public_address: identity.public_address,
                    passphrase: encrypt(identity.passphrase, account.passphrase),
                    private_key: encrypt(identity.private_key, account.passphrase),
                }
            ]
        }

        DB.save()

        await saveAccountFile()

        local.password = password
        local.account.wallet = account

        const res = {
            account: {
                public_address: account.public_address,
                email: email,
                first_name: first_name,
                last_name: last_name,
                birthday: birthday,
                secret_question_1: secret_question_1,
                secret_answer_1: secret_answer_1,
                secret_question_2: secret_question_2,
                secret_answer_2: secret_answer_2,
                passphrase: account.passphrase,
                current_identity: {
                    id: 1
                },
                identities: [
                    {
                        id: 1,
                        name: 'Default',
                        public_address: identity.public_address
                    }
                ]
            }
        }

        resolve(res)
    })
}

export const ID = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
}

export const sendCommand = async (key, data = {}, peer = null, responseId = null) => {
    const cmd = {
        key: key,
        responseId: responseId,
        requestId: ID(),
        data: data
    }

    console.log('[DesktopBridge] Sending command', cmd)

    if (!local.bridge) {
        console.warn('[DesktopBridge] Not connected to bridge. This shouldnt happen.')
    }

    let _resolve, _reject
    let promise = new Promise((resolve, reject) => {
        _resolve = resolve
        _reject = reject
    })
    promise.resolve = _resolve
    promise.reject = _reject

    local.requests[cmd.requestId] = promise

    local.bridge.send('command', JSON.stringify(cmd))

    return promise
}

export const runCommand = async (cmd, meta = {}) => {
    console.log('[DesktopBridge] Running command', cmd.key)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[DesktopBridge] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        if (cmd.key === 'init') {
            console.log('[BlockHub] Web initialized', cmd.data) // msg from web page

            if (cmd.data == '1') {
                const mode = config.IS_PRODUCTION ? 'production' : 'local'

                sendCommand('setMode', mode)

                // Check local db for stored account
                if (DB.application.config.data.account.passphrase) {
                    //Windows.main.window.webContents.setZoomFactor(1980 / 500)
                    // Desktop asks to prompt password
                    await promptPasswordRequest()
                }

                // If exists, prompt web to require password
                // Web sends back response (requirePasswordResponse)
                // Decrypt the passphrase and use to set web3 provider
                // Desktop sends back all non-sensitive account info
                // Check the wallet exists in the accounts contract
                // If not, prompt to add it
                // If no ETH, let them know they need it
                // Sync any changes from smart contract
                // If doesn't exist, prompt web to create account

                const mainScreen = electron.screen.getPrimaryDisplay()
                // const width = 1400
                // const height = (width / 1980) * 1080

                // Windows.main.window.webContents.setZoomFactor(width / 1980)
                Windows.main.window.setSize(mainScreen.size.width, mainScreen.size.height)
                Windows.main.window.center()

                // console.log('[BlockHub] Setting up heartbeat')

                // setInterval(() => {
                //     sendCommand('heartbeat', 1) // send to web page
                // }, 2000)
            } else {
                console.error('[BlockHub] Error initializing web', cmd.data)
            }
        } else if (cmd.key === 'ping') {
            console.log('[BlockHub] Ping from web', cmd.data)

            sendCommand('pong', 'ok')
        } else if (cmd.key === 'resize') {
            //Windows.main.window.webContents.setZoomFactor(cmd.data.width / 1980)
            //Windows.main.window.setSize(cmd.data.width, cmd.data.height)
            //Windows.main.window.center()
        } else if (cmd.key === 'createAccountRequest') {
            const res = await handleCreateAccountRequest(cmd.data)

            return resolve(await sendCommand('createAccountResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'getAccountRequest') {
            const res = await handleGetAccountRequest(cmd.data)

            return resolve(await sendCommand('getAccountResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'setContractAddress') {
            const res = await handleSetContractAddress(cmd.data)

            return resolve(await sendCommand('setContractAddressResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'deployContract') {
            const res = await handleDeployContract(cmd.data)

            return resolve(await sendCommand('deployContractResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'createFundingProject') {
            const res = await createFundingProject(cmd.data)

            return resolve(await sendCommand('createFundingProjectResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'updateAccountRequest') {
            const res = await updateAccountRequest(cmd.data)

            return resolve(await sendCommand('updateAccountRequestResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'initProtocol') {
            const res = await initProtocol(cmd.data)

            return resolve(await sendCommand('initProtocolResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'importAccountFileRequest') {
            const res = await importAccountFileRequest(cmd.data)

            return resolve(await sendCommand('importAccountFileResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'exportAccountFileRequest') {
            const res = await exportAccountFileRequest(cmd.data)

            return resolve(await sendCommand('exportAccountFileResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'setPasswordRequest') {
            local.password = cmd.data.password

            // TODO: validate
            const res = {
                success: 1
            }

            return resolve(await sendCommand('setPasswordResponse', res, meta.client, cmd.requestId))
        } else {
            console.log('[DesktopBridge] Unhandled command:', cmd)
        }

        emit(cmd.key, cmd.data ? cmd.data : undefined)
    })
}

export const initHeartbeat = () => {
    local.bridge.on('heartbeat', (event, msg) => {
        console.log('[DesktopBridge] Heartbeat')

        local.bridge.send('heartbeat', 1)
    })
}

// Check local db for stored account
// If exists, prompt web to require password
// Web sends back response (requirePasswordResponse)
// Decrypt the passphrase and use to set web3 provider
// Desktop sends back all non-sensitive account info
// Check the wallet exists in the accounts contract
// If not, prompt to add it
// If no ETH, let them know they need it
// Sync any changes from smart contract
// If doesn't exist, prompt web to create account
export const init = (bridge) => {
    console.log('[DesktopBridge] Initializing')

    local.bridge = bridge
}
