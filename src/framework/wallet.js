const contract = require('truffle-contract')
const HDWalletProvider = require('truffle-hdwallet-provider')

const local = {
    ethereum: {
        provider: null,
        web3: null
    }
}

export const createEthereumWallet = () => {

}

// 'retreat attack lift winter amazing noodle interest dutch craft old solve save',
export const init = () => {
    local.ethereum.provider = new Web3.providers.HDWalletProvider('https://rinkeby.infura.io/xxxxx')

    local.ethereum.web3 = new Web3(local.ethereum.provider)

    // const myContract = contract(myABI)
    // myContract.setProvider(local.ethereum.web3.currentProvider)
}