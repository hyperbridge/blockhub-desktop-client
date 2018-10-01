import * as Wallet from './wallet'
import * as DB from '../db'
import CryptoJS from 'crypto-js'

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

export const promptPasswordRequest = async (data) => {
    return new Promise(async (resolve) => {
        // Web sends back password prompt response
        const res = await sendCommand('promptPasswordRequest')

        // Decrypt the passphrase and use to set web3 provider
        local.password = res.password
        local.passphrase = decrypt(DB.network.config.data.account.passphrase, local.password)

        console.log(DB.network.config.data.account.passphrase, local.password)
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

export const setAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        const account = DB.network.config.data.account
        const decryptedPrivateKey = decrypt(account.private_key, local.password)

        const req = {
            account: {
                public_address: account.public_address,
                secret_question: account.secret_question,
                secret_answer: 'UNAVAILABLE',
                passphrase: 'UNAVAILABLE',
                private_key: 'UNAVAILABLE',
                password: 'UNAVAILABLE',
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

export const handleCreateAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        const passphrase = 'candy maple cake sugar pudding cream honey rich smooth crumble sweet treat' // TODO: randomly generate based on data.seed

        Wallet.setPassphrase(passphrase)
        
        await Wallet.init()

        const account = await Wallet.getCurrentAccount()

        local.password = data.password

        DB.network.config.data.account = {
            ...DB.network.config.data.account,
            public_address: account.public_address,
            secret_answer: 'UNAVAILABLE',
            passphrase: encrypt(passphrase, local.password),
            private_key: encrypt(account.private_key, local.password),
            password: encrypt(data.secret_answer + data.birthday, local.password),
            email: encrypt(data.email, account.private_key),
            first_name: encrypt(data.first_name, account.private_key),
            last_name: encrypt(data.last_name, account.private_key),
            birthday: encrypt(data.birthday, account.private_key),
        }

        DB.save()

        const res = {
            account: {
                public_address: account.public_address,
                email: data.email,
                first_name: data.first_name,
                last_name: data.last_name,
                birthday: data.birthday,
                secret_question: data.secret_question,
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

        if (cmd.key === 'createAccountRequest') {
            const res = await handleCreateAccountRequest(cmd.data)

            return resolve(await sendCommand('createAccountResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'getAccountRequest') {
            const res = await handleGetAccountRequest(cmd.data)

            return resolve(await sendCommand('getAccountResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'setPasswordRequest') {
            local.password = cmd.data.password

            // TODO: validate
            const res = {
                success: 1
            }

            return resolve(await sendCommand('setPasswordResponse', res, meta.client, cmd.requestId))
        } else if (cmd.key === 'init') {

            // Check local db for stored account
            if (DB.network.config.data.account.passphrase) {
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
