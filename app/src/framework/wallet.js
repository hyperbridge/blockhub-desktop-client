import Web3 from 'web3'
import HDWalletProvider from 'truffle-hdwallet-provider'
import contract from 'truffle-contract'
import Bluebird from 'bluebird'
import * as DB from '../db'

const local = {
    steemit: {
        account: {
            privateKey: null
        }
    },
    ethereum: {
        infura: {
            accessToken: null,
            endpoint: "https://ropsten.infura.io/"
        },
        activeNetwork: 'development',
        networks: {
            development: {
                provider: function (passphrase) {
                    return new HDWalletProvider(
                        passphrase,
                        "http://localhost:8545"
                    )
                },
                host: 'localhost',
                port: 8545,
                gas: 4500000,
                gasPrice: 25000000000,
                network_id: '*'
            },
            kovan: {
                provider: function (passphrase) {
                    return new HDWalletProvider(
                        passphrase,
                        "https://kovan.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            rinkeby: {
                provider: function (passphrase) {
                    return new HDWalletProvider(
                        passphrase,
                        "https://rinkeby.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            mainnet: {
                provider: function (passphrase) {
                    return new HDWalletProvider(
                        passphrase,
                        "https://mainnet.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            ropsten: {
                provider: function (passphrase) {
                    return new HDWalletProvider(
                        passphrase,
                        "https://ropsten.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: 3,
                gas: 4500000,
                gasPrice: 25000000000
            }
        }
    }
}

const withTimeout = (millis, promise, originalReject) => {
    const timeout = new Promise((resolve, reject) => setTimeout(() => originalReject(`Timed out after ${millis} ms.`), millis))

    return Promise.race([
        promise,
        timeout
    ])
}

export const getCurrentAccount = async (web3) => {
    return new Promise(async (resolve, reject) => {
        // TODO: timeout if the remote isnt online

        const currentAccounts = await withTimeout(5000, web3.eth.getAccountsPromise(), reject)

        resolve({
            public_address: currentAccounts[0],
            private_key: web3.currentProvider.wallets[currentAccounts[0].toLowerCase()]._privKey.toString('hex')
        })
    })
}

Bluebird.config({
    // Enable warnings
    warnings: true,
    // Enable long stack traces
    longStackTraces: true,
    // Enable cancellation
    cancellation: true,
    // Enable monitoring
    monitoring: true
});

// 'retreat attack lift winter amazing noodle interest dutch craft old solve save',
export const create = async (passphrase) => {
    console.log('[BlockHub] Creating wallet...')

    const provider = local.ethereum.networks[local.ethereum.activeNetwork].provider()
    const web3 = new Web3(provider)

    provider.engine._providers[2].provider.timeout = 10

    Bluebird.promisifyAll(web3.eth, { suffix: 'Promise' })

    return new Promise(async (resolve, reject) => {
        const account = await getCurrentAccount(web3)

        resolve({
            web3,
            provider,
            ...account
        })
    })

    // const myContract = contract(myABI)
    // myContract.setProvider(local.ethereum.web3.currentProvider)
}