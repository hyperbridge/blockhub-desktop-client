var contract = require("truffle-contract");

var provider = new HDWalletProvider("nemonic", "https://rinkeby.infura.io/xxxxx");
// if I change the above line to: var provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/xxxxx");
// Everything works fine
var web3 = new Web3(provider);

var myContract = contract(myABI);
myContract.setProvider(web3.currentProvider);