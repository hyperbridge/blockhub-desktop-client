import * as Wallet from './wallet'

export let config = {
}

const local = {
    requests: {},
}


export const createAccountRequest = async (data) => {
    return new Promise(async (resolve) => {
        const wallet = await Wallet.createEthereumWallet()

        const res = {
            account: {

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
            const res = await createAccountRequest(cmd.data)

            return resolve(await sendCommand('createAccountResponse', res, meta.client, cmd.requestId))
        }
    })
}

export const initHeartbeat = () => {
    local.bridge.on('heartbeat', (event, msg) => {
        console.log('[DesktopBridge] Heartbeat')

        local.bridge.send('heartbeat', 1)
    })
}

export const initCommandMonitor = () => {
    local.bridge.on('command', (event, msg) => {
        const request = JSON.parse(msg)

        const response = {
            key: ''
        }

        local.bridge.send('command', JSON.stringify(response)) // send to web page
    })
}

export const init = (bridge) => {
    console.log('[DesktopBridge] Initializing')

    local.bridge = bridge
    
    Wallet.init()
}
