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
        account: {
            passphrase: null
        },
        provider: null,
        web3: null,
        infura: {
            accessToken: null,
            endpoint: "https://ropsten.infura.io/"
        },
        activeNetwork: 'development',
        networks: {
            development: {
                provider: function () {
                    return new HDWalletProvider(
                        local.ethereum.account.passphrase,
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
                provider: function () {
                    return new HDWalletProvider(
                        local.ethereum.account.passphrase,
                        "https://kovan.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            rinkeby: {
                provider: function () {
                    return new HDWalletProvider(
                        local.ethereum.account.passphrase,
                        "https://rinkeby.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            mainnet: {
                provider: function () {
                    return new HDWalletProvider(
                        local.ethereum.account.passphrase,
                        "https://mainnet.infura.io/" + local.ethereum.infura.accessToken
                    )
                },
                network_id: '*',
                gas: 4500000,
                gasPrice: 25000000000
            },
            ropsten: {
                provider: function () {
                    return new HDWalletProvider(
                        local.ethereum.account.passphrase,
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

export const setPassphrase = (passphrase) => {
    local.ethereum.account.passphrase = passphrase
}

export const getCurrentAccount = async () => {
    //console.log(local.ethereum.web3.eth)
    // TODO: timeout if the remote isnt online
    const currentAccounts = await local.ethereum.web3.eth.getAccountsPromise();

    return {
        public_address: currentAccounts[0],
        private_key: local.ethereum.web3.currentProvider.wallets[currentAccounts[0]]._privKey.toString('hex')
    }
}

export const createEthereumWallet = async () => {
    console.log('[BlockHub] Creating wallet...')

    return new Promise(async (resolve, reject) => {
        local.ethereum.web3.eth.defaultAccount = await getCurrentAccount()

        DB.application.config.data.account.public_address = local.ethereum.web3.eth.defaultAccount.public_address
        DB.application.config.data.account.balance = (await local.ethereum.web3.eth.getBalancePromise(local.ethereum.web3.eth.defaultAccount.public_address)).toNumber()
        DB.save()

        resolve(local.ethereum.web3.eth.defaultAccount)
    })
}

// 'retreat attack lift winter amazing noodle interest dutch craft old solve save',
export const init = async () => {
    console.log('[BlockHub] Initializing wallet...')

    local.ethereum.web3 = new Web3(local.ethereum.networks[local.ethereum.activeNetwork].provider())

    Bluebird.promisifyAll(local.ethereum.web3.eth, { suffix: 'Promise' })

    createEthereumWallet().then()

    // const myContract = contract(myABI)
    // myContract.setProvider(local.ethereum.web3.currentProvider)
}