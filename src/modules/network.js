import Immutable from 'immutable'

import Account from '../models/Account'

export const CONNECT_REQUEST = 'network/CONNECT_REQUEST'
export const WEB3_REQUEST = 'network/WEB3_REQUEST'
export const TRANSACTION_REQUEST = 'network/TRANSACTION_REQUEST'
export const TRANSACTION_RESPONSE = 'network/TRANSACTION_RESPONSE'
export const ADD_ACCOUNT_REQUEST = 'network/ADD_ACCOUNT_REQUEST'

const initialAccount = {
    balance: 0,
    name: null,
    tokens: []
}

const initialToken = {
    contractAddress: null,
    symbol: null,
    digits: null
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
    switch (action.type) {
        case ADD_ACCOUNT_REQUEST:
            const exists = state.accounts.filter((acc) => acc.publicAddress == action.account.publicAddress).length
            if (exists)
                return state
            return { ...state, accounts: [...state.accounts, action.account] }
        case WEB3_REQUEST:
            return { ...state, balance: action.balance }
        default:
            return state
    }
}


export const connect = () => {
    return {
        type: CONNECT_REQUEST,
        connected: true
    }
}

export const getBalance = (addr) => {
    if (!addr)
        addr = window.web3.eth.coinbase

    const balance = window.web3.fromWei(window.web3.eth.getBalance(addr))

    return {
        type: WEB3_REQUEST,
        balance
    }
}

export const getTransaction = (dispatch) => {
    if (!initialState.connected) return

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
        //     else { dispatch({ type: TRANSACTION_RESPONSE, result: res }); }
        // })
    })

    if (window.web3.eth.accounts.length) {
        window.web3.eth.accounts.forEach((e, i) => {
            console.log(arguments)
            const addr = window.web3.eth.accounts[i]

            const account = new Account({
                publicAddress: addr + '',
                balance: getBalance(addr)
            })

            dispatch({
                type: ADD_ACCOUNT_REQUEST,
                account
            })
        })
    }

    dispatch({
        type: TRANSACTION_REQUEST
    })
}


export const getAccounts = (dispatch) => {
    if (!initialState.connected) return

    window.web3.eth.accounts.forEach((e, i) => {
        const account = {
            publicAddress: window.web3.eth.accounts[i] + ''
        }

        

        dispatch({
            type: ADD_ACCOUNT_REQUEST,
            account
        })
    })

    dispatch({
        type: TRANSACTION_REQUEST
    })
}
