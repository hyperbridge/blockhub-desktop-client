import CryptoJS from 'crypto-js'
import * as Wallet from './wallet'
import * as DB from '../db'
import Token from 'hyperbridge-token'
import FundingProtocol from 'funding-protocol'
import MarketplaceProtocol from 'marketplace-protocol'


export let config = {
}

const local = {
    requests: {},
    passphrase: null,
    password: null,
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
            local.password = res.password
            local.passphrase = decrypt(DB.application.config.data.account.passphrase, local.password)

            if (!local.passphrase) {
                throw new Error()
            }
        } catch (e) {
            return await promptPasswordRequest({ error: { message: 'Password was incorrect', code: 1 }})
        }

        console.log(DB.application.config.data.account.passphrase, local.password)
        console.log(local.passphrase)

        Wallet.setPassphrase(local.passphrase)

        await Wallet.init()

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
            DB.application.config.data.account.encrypt_passphrase = data.encrypt_passphrase

            if (data.encrypt_passphrase) {
                DB.application.config.data.account.passphrase = encrypt(data.passphrase, local.password)
            }

            DB.save()

            resolve()
        }
    })
}

export const handleCreateAccountRequest = async ({ email, password, birthday, first_name, last_name, secret_question_1, secret_answer_1, secret_question_2, secret_answer_2 }) => {
    return new Promise(async (resolve) => {
        const passphrase = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat' // TODO: randomly generate based on data.seed

        Wallet.setPassphrase(passphrase)
        
        await Wallet.init()

        const account = await Wallet.getCurrentAccount()

        DB.application.config.data.account = {
            ...DB.application.config.data.account,
            public_address: account.public_address,
            secret_question_1: 'HIDDEN',
            secret_answer_1: 'HIDDEN',
            secret_question_2: 'HIDDEN',
            secret_answer_2: 'HIDDEN',
            //passphrase: passphrase, //encrypt(passphrase, password),
            private_key: encrypt(account.private_key, password),
            password: encrypt(secret_answer_1 + birthday, password),
            email: encrypt(email, account.private_key),
            first_name: encrypt(first_name, account.private_key),
            last_name: encrypt(last_name, account.private_key),
            birthday: encrypt(birthday, account.private_key),
        }

        DB.save()

        local.password = password

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
                passphrase: passphrase
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

                console.log('[BlockHub] Setting up heartbeat')

                setInterval(() => {
                    sendCommand('heartbeat', 1) // send to web page
                }, 2000)
            } else {
                console.error('[BlockHub] Error initializing web', cmd.data)
            }
        } else if (cmd.key === 'ping') {
            console.log('[BlockHub] Ping from web', cmd.data)

            sendCommand('pong', 'ok')
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
        } else if (cmd.key === 'setPasswordRequest') {
            local.password = cmd.data.password

            // TODO: validate
            const res = {
                success: 1
            }

            return resolve(await sendCommand('setPasswordResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'init') {

            // Check local db for stored account
            if (DB.application.config.data.account.passphrase) {
                // Desktop asks to prompt password
                const res = await promptPasswordRequest()
            } else {

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
        } else {
            console.log('[DesktopBridge] Unhandled command:', cmd)
        }
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
