import Immutable from 'immutable'

import metamask from '../lib/metamask'

export const CONNECT = 'network/CONNECT'
export const SEND_WEB3_REQ = 'network/SEND_WEB3_REQ'
export const SEND_TXHASH = 'network/SEND_TXHASH'
export const QUEUE_TXHASH = 'network/QUEUE_TXHASH'
export const ADD_ACC = 'network/ADD_ACC'

const initialAccount = {
    balance: 0
}

const initialState = {
    connected: false,
    connectionMessage: null,
    accounts: []
}

if (typeof window.web3 == 'undefined') {
    initialState.connected = false
} else {
    if (window.web3.version.network == 'loading') {
        initialState.connected = false
        initialState.connectionMessage = "Wrong network"
    } else {
        initialState.connected = true
    }
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_ACC:
            const exists = state.accounts.filter((acc) => acc.publicAddress == action.account.publicAddress).length
            if (exists)
                return state
            return { ...state, accounts: [...state.accounts, action.account] }
        case SEND_WEB3_REQ:
            return { ...state, balance: action.balance }
        default:
            return state
    }
}

export const connect = () => {
    return {
        type: CONNECT,
        connected: true
    }
}

export const getBalance = () => {
    const balance = window.web3.fromWei(window.web3.eth.getBalance(window.web3.eth.coinbase))

    return {
        type: SEND_WEB3_REQ,
        balance
    }
}

export const getTransaction = (dispatch) => {
    const user = window.web3.eth.accounts[0];
    window.web3.eth.getTransactionCount(user, (err, nonce) => {
        // Form your tx object...
        var transaction = {
            from: "0x9453eD18535138Bd6037C31fd0EBCcba2b331961",
            to: "0x49e2ba4d0eede87d83b2b80947812d4de4232577",
            value: 0.1,
            gas: 50,
            gasPrice: 40,
            data: null,
            nonce: null
        }

        // window.web3.eth.sendTransaction(transaction, (err, res) => {
        //     if (err) { console.error('Error', err); }
        //     else { dispatch({ type: QUEUE_TXHASH, result: res }); }
        // })
    })

    window.web3.eth.accounts.forEach((e, i) => {
        console.log(arguments)
        const account = {
            publicAddress: window.web3.eth.accounts[i] + ''
        }

        dispatch({
            type: ADD_ACC,
            account
        })
    })

    return {
        type: SEND_TXHASH
    }
}


export const getAccounts = (dispatch) => {
    window.web3.eth.accounts.forEach((e, i) => {
        const account = {
            publicAddress: window.web3.eth.accounts[i] + ''
        }

        

        dispatch({
            type: ADD_ACC,
            account
        })
    })

    return {
        type: SEND_TXHASH
    }
}
