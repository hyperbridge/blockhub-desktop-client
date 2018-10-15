import fs from 'fs'
import path from 'path'
import Web3 from 'web3'
import CryptoJS from 'crypto-js'
import bip39 from 'bip39'
import crypto from 'crypto'
import electron from 'electron'
import Token from 'hyperbridge-token'
import FundingProtocol from 'hyperbridge-funding-protocol'
import MarketplaceProtocol from 'hyperbridge-marketplace-protocol'
import * as Wallet from './wallet'
import * as DB from '../db'
import * as Windows from '../main/windows'

const config = require('../config')

const local = {
    provider: null,
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
            if (DB.application.config.data[0].account.encrypt_passphrase) {
                passphrase = decrypt(DB.application.config.data[0].account.passphrase, res.password)
            } else {
                passphrase = DB.application.config.data[0].account.passphrase
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

        await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'application' }))
        await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'funding' }))
        await sendCommand('setProtocolConfig', await initProtocol({ protocolName: 'marketplace' }))


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
    return new Promise(async (resolve, reject) => {
        let protocol = getProtocolByName(protocolName)

        protocol.api.ethereum
            .setContractAddress(contractName, address)
            .catch(() => {
                reject('Unable to deploy contract')
            })
            .then(() => {
                resolve()
            })
    })
}

export const updateFundingProject = async ({ id, data }) => {
    const project = DB.funding.projects.findOne({ 'id': id })

    return new Promise(async (resolve, reject) => {
        const projectRegistrationContract = FundingProtocol.api.ethereum.state.contracts.ProjectRegistration.deployed

        // TODO
        resolve(project)
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

            resolve(project)
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
        const state = DB[protocolName].config.data[0]
        
        //console.log(local.account.wallet.provider.engine._providers[2])

        console.log(local.account.wallet, local.passphrase)
        const provider = new Web3.providers.HttpProvider('http://localhost:8545')
        const web3 = new Web3(provider)
        // const account = web3.eth.accounts.privateKeyToAccount('0x' + local.account.wallet.private_key);
        // web3.eth.accounts.wallet.add(account)
// Exception Error: invalid address
        protocol.api.ethereum.init(
            provider,//local.account.wallet.provider,
            local.account.wallet.public_address,
            state.ethereum[state.current_ethereum_network].user_to_address
        )

        for (let contractName in state.ethereum[state.current_ethereum_network].contracts) {
            const contract = state.ethereum[state.current_ethereum_network].contracts[contractName]

            if (contract.address) {
                await setContractAddress({ protocolName, contractName, address: contract.address })
                    .catch(() => {
                        state.ethereum[state.current_ethereum_network].contracts[contractName].address = null
                        state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null
                    })
                    .then(() => {
                        
                    })
            } else {
                state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null
            }
        }

        resolve({
            currentNetwork: state.current_ethereum_network,
            protocolName: protocolName,
            config: state.ethereum[state.current_ethereum_network]
        })
    })
}

export const deployContract = async ({ protocolName, contractName }) => {
    return new Promise(async (resolve, reject) => {
        const protocol = getProtocolByName(protocolName)
        const state = DB[protocolName].config.data[0]
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
        if (protocolName === 'funding') {
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

        if (protocolName === 'application') {
            if (payload.contractName !== 'EternalStorage') {
                params = [
                    state.ethereum[state.current_ethereum_network].contracts.EternalStorage.address
                ]
            }
        }

        protocol.api.ethereum
            .deployContract(contractName, links, params)
            .then(async (contract) => {
                // if (err)  {
                //     console.error('[BlockHub] Error deploying contract',  err)
                //     return reject()
                // }

                state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = Date.now()
                state.ethereum[state.current_ethereum_network].contracts[contractName].address = contract.address
console.log(state)
                DB[protocolName].config.update(state)
                DB.save()
                //local.store.dispatch(protocolName + '/updateState')

                if (protocolName === 'funding' && contractName === 'ProjectRegistration') {
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

                resolve(state.ethereum[state.current_ethereum_network].contracts[contractName])
            })
    })
}


export const setAccountRequest = async () => {
    return new Promise(async (resolve) => {
        const account = DB.application.config.data[0].account
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
                DB.application.config.data[0].account.passphrase = encrypt(DB.application.config.data[0].account.passphrase, local.password)
            } else {
                // We're disabling when previously enabled
                if (DB.application.config.data[0].account.encrypt_passphrase) {
                    DB.application.config.data[0].account.passphrase = decrypt(DB.application.config.data[0].account.passphrase, local.password)
                }
            }

            DB.application.config.data[0].account.encrypt_passphrase = data.encrypt_passphrase

            DB.save()

            await saveAccountFile()

            resolve()
        }
    })
}

export const getPassphraseRequest = async (data) => {
    return new Promise(async (resolve) => {
        // TODO: use data.seed
        let randomBytes = crypto.randomBytes(16) // 128 bits of seed is enough

        // the 12 word phrase
        let passphrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))

        resolve(passphrase)
    })
}

export const readFile = (filepath) => {
    return new Promise(async (resolve, reject) => {
        fs.readFile(filepath, 'utf-8', function (err, data) {
            if (err) {
                console.log('An error occurred reading the file: ' + err.message)
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
                console.log('An error occurred updating the file: ' + err.message)
                return reject(err)
            }

            console.log('The file has been succesfully saved')

            resolve()
        })
    })
}

export const removeFile = (filepath) => {
    return new Promise(async (resolve, reject) => {
        fs.unlink(filepath, function (err, data) {
            if (err) {
                console.log('An error occurred removing the file: ' + err.message)
                return reject(err)
            }

            resolve(data)
        })
    })
}

export const saveAccountFileRequest = async (data) => {
    return new Promise(async (resolve) => {
        const userDataPath = electron.app.getPath('userData')

        await saveFile(path.join(userDataPath, 'account.json'), JSON.stringify(DB.application.config.data[0].account))
    })
}

export const importAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const userDataPath = electron.app.getPath('userData')

        electron.dialog.showOpenDialog(async (fileNames) => {
            if (fileNames === undefined) {
                return reject("No file selected")
            }

            saveFile(path.join(userDataPath, 'account.json'), await readFile(fileNames[0]))

            console.log("The account has been succesfully imported: " + userDataPath + '/account.json')

            resolve()
        })
    })
}

export const exportAccountFileRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const content = JSON.stringify(DB.application.config.data[0].account)

        electron.dialog.showSaveDialog((fileName) => {
            if (fileName === undefined) {
                return reject("The file wasn't saved")
            }

            fs.writeFile(fileName, content, (err) => {
                if (err) {
                    return reject("An error ocurred creating the file: " + err.message)
                }

                console.log("The account has been succesfully exported: " + fileName)
                resolve()
            })
        })
    })
}

export const deleteAccountRequest = async (data) => {
    return new Promise(async (resolve, reject) => {
        const content = JSON.stringify(DB.application.config.data[0].account)

        const options = {
            title: 'Delete Account?',
            type: 'question',
            buttons: ['OK', 'Cancel'],
            message: 'Are you sure you would like to delete your account? Make sure you have a backup, as this will delete the file on this computer and it cannot be undone.'
        };

        electron.dialog.showMessageBox(Windows.main.window, options, async (res) => {
            if (res === 0) {
                const path = electron.app.getPath('userData')
                removeFile(path + '/account.json')

                DB.application.config.data[0].account = {
                    public_address: null,
                    secret_question_1: null,
                    secret_answer_1: null,
                    secret_question_2: null,
                    secret_answer_2: null,
                    passphrase: null,
                    private_key: null,
                    password: null,
                    email: null,
                    first_name: null,
                    last_name: null,
                    birthday: null,
                }

                DB.save()

                const req = {
                    account: DB.application.config.data[0].account
                }

                await sendCommand('setAccountRequest', req)
            }
        })
    })
}

export const saveAccountFile = async () => {
    return new Promise(async (resolve) => {
        const path = electron.app.getPath('userData')

        saveFile(path + '/account.json', JSON.stringify(DB.application.config.data[0].account))

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

export const createTransactionRequest = async ({ fromAddress, toAddress, amount }) => {
    return new Promise(async (resolve) => {
        let transactionData = createTransaction
        
        resolve(transactionData)
    })
}

export const sendTransactionRequest = async ({ fromAddress, toAddress, amount, transactionData }) => {
    return new Promise(async (resolve) => {

        const options = {
            title: 'Confirm Transaction',
            type: 'question',
            buttons: ['OK', 'Cancel'],
            message: `Sending ${amount} ETH to address ${toAddress} from ${fromAddress}. 
            Once this transaction is sent it cannot be reversed. 
            Are you sure you want to send?`
        }

        electron.dialog.showMessageBox(Windows.main.window, options, async (res) => {
            if (res === 0) {
                const transactionId = wallet.sendTransaction({
                    to: toAddress,
                    from: fromAddress,
                    amount: amount
                })

                resolve({ 
                    success: true, 
                    transactionId: transactionId
                })
            } else {
                resolve({
                    success: false,
                    message: 'Cancelled'
                })
            }
        })
    })
}

export const handleCreateAccountRequest = async ({ email, password, birthday, first_name, last_name, passphrase, encrypt_passphrase, secret_question_1, secret_answer_1, secret_question_2, secret_answer_2 }) => {
    return new Promise(async (resolve) => {
        const account = await Wallet.create(passphrase, 0)
        const identity = await Wallet.create(passphrase, 10)

        DB.application.config.data[0].account = {
            ...DB.application.config.data[0].account,
            public_address: account.public_address,
            secret_question_1: secret_question_1,
            secret_question_2: secret_question_2,
            encrypt_passphrase: encrypt_passphrase,
            passphrase: encrypt_passphrase ? encrypt(passphrase, password) : passphrase,
            private_key: encrypt(account.private_key, password),
            password: encrypt(password, secret_answer_1 + birthday),
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
                    private_key: encrypt(identity.private_key, password),
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
                secret_question_2: secret_question_2,
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
    console.log('[DesktopBridge] Running command', cmd.key, cmd.data)

    return new Promise(async (resolve, reject) => {
        if (cmd.responseId) {
            if (local.requests[cmd.responseId]) {
                console.log('[DesktopBridge] Running response callback', cmd.responseId)

                local.requests[cmd.responseId].resolve(cmd.data)

                delete local.requests[cmd.responseId]
            }

            return resolve()
        }

        let resultKey = 'genericResponse'
        let resultData = null

        if (cmd.key === 'init') {
            console.log('[BlockHub] Web initialized', cmd.data) // msg from web page

            if (cmd.data == '1') {
                const mode = config.IS_PRODUCTION ? 'production' : 'local'

                sendCommand('setMode', mode)

                // Prompt password request if account exists but hasn't been unlocked
                if (DB.application.config.data[0].account.passphrase) {
                    if (local.password) {
                        // Desktop sends back all non-sensitive account info
                        await setAccountRequest()
                    } else {
                        // Desktop asks to prompt password
                        await promptPasswordRequest()
                    }
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
            resultData = await handleCreateAccountRequest(cmd.data)
            resultKey = 'createAccountResponse'
        } else if (cmd.key === 'getAccountRequest') {
            resultData = await handleGetAccountRequest(cmd.data)
            resultKey = 'getAccountResponse'
        } else if (cmd.key === 'setContractAddress') {
            resultData = await handleSetContractAddress(cmd.data)
            resultKey = 'setContractAddressResponse'
        } else if (cmd.key === 'deployContract') {
            resultData = await deployContract(cmd.data)
            resultKey = 'deployContractResponse'
        } else if (cmd.key === 'createFundingProject') {
            resultData = await createFundingProject(cmd.data)
            resultKey = 'createFundingProjectResponse'
        } else if (cmd.key === 'updateAccountRequest') {
            resultData = await updateAccountRequest(cmd.data)
            resultKey = 'updateAccountRequestResponse'
        } else if (cmd.key === 'initProtocol') {
            resultData = await initProtocol(cmd.data)
            resultKey = 'initProtocolResponse'
        } else if (cmd.key === 'importAccountFileRequest') {
            resultData = await importAccountFileRequest(cmd.data)
            resultKey = 'importAccountFileResponse'
        } else if (cmd.key === 'exportAccountFileRequest') {
            resultData = await exportAccountFileRequest(cmd.data)
            resultKey = 'exportAccountFileResponse'
        } else if (cmd.key === 'deleteAccountRequest') {
            resultData = await deleteAccountRequest(cmd.data)
            resultKey = 'deleteAccountFesponse'
        } else if (cmd.key === 'getPassphraseRequest') {
            resultData = await getPassphraseRequest(cmd.data)
            resultKey = 'getPassphraseResponse'
        } else if (cmd.key === 'createTransactionRequest') {
            resultData = await createTransactionRequest(cmd.data)
            resultKey = 'createTransactionResponse'
        } else if (cmd.key === 'sendTransactionRequest') {
            resultData = await sendTransactionRequest(cmd.data)
            resultKey = 'sendTransactionResponse'
        } else if (cmd.key === 'showContextMenuRequest') {
            const electron = require('electron')
            const Menu = electron.Menu

            const template = [
                {
                    label: 'Back',
                    click() {
                        Windows.main.window.webContents.goBack()
                    }
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Undo',
                    role: 'undo'
                },
                {
                    label: 'Redo',
                    role: 'redo'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Cut',
                    role: 'cut'
                },
                {
                    label: 'Copy',
                    role: 'copy'
                },
                {
                    label: 'Paste',
                    role: 'paste'
                },
                {
                    type: 'separator'
                },
                {
                    label: 'Select all',
                    role: 'selectall'
                }
            ]

            if (!config.IS_PRODUCTION) {
                template.push({
                    label: 'Inspect',
                    click() {
                        Windows.main.window.inspectElement(cmd.data.x, cmd.data.y)
                    }
                })
            }

            const menu = Menu.buildFromTemplate(template)

            menu.popup(Windows.main.window)
        } else if (cmd.key === 'setPasswordRequest') {
            local.password = cmd.data.password

            // TODO: validate
            resultData = {
                success: 1
            }
            resultKey = 'setPasswordResponse'
        } else {
            console.log('[DesktopBridge] Unhandled command:', cmd)

            return reject()
        }

        emit(cmd.key, cmd.data ? cmd.data : undefined)

        return resolve(await sendCommand(resultKey, resultData, meta.client, cmd.requestId))
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
