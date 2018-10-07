"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserBalance = exports.getAccount = exports.isConnected = exports.init = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const Web3 = require('web3');

let tokenAbi = require('../../contracts/tokenContract.json'); // declare let require: any
// declare let Promise: any
// declare let window: any
// // declare global {
// //   interface Window {
// //     web3: any;
// //   }
// // }
// type Local = {
//     _account: string,
//     _web3: any,
//     _tokenContract: any,
//     _tokenContractAddress: string
// }


const local = {
  _account: null,
  _web3: null,
  _tokenContract: null,
  _tokenContractAddress: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
};

const init = () => {
  console.log('[BlockHub] Initializing Ethereum...');
  return new Promise((resolve, reject) => {
    if (typeof window.web3 !== 'undefined') {
      if (!local._web3) {
        const provider = new window.web3.providers.HttpProvider("http://localhost:8545"); // Use Mist/MetaMask's provider

        local._web3 = new Web3(provider); //window.web3.currentProvider)
      } // if (_web3.version !== "1.0.0-beta.34") {
      //   alert('Please connect to the Rinkeby network')
      // }


      let timeout = setTimeout(() => {
        const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.';
        reject(err);
      }, 5000);
      web3.eth.net.isListening().then(() => {
        console.log('[BlockHub] Ethereum initialized');
        clearTimeout(timeout);
        local._tokenContract = new local._web3.eth.Contract(tokenAbi.abi, local._tokenContractAddress); //_web3.eth.contract(tokenAbi).at(_tokenContractAddress)

        resolve();
      }, () => {
        clearTimeout(timeout);
        const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.';
        reject(err);
      });
    } else {
      const err = 'Ethereum not initialized. Please use install MetaMask for Chrome, or use a dapp browser like Mist.';
      reject(err);
    }
  });
}; // TODO: fix


exports.init = init;

const isConnected = () => {
  if (typeof local._web3 === 'undefined') return false;
  return true;
};

exports.isConnected = isConnected;

const getAccount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* () {
    if (local._account == null) {
      local._account = yield new Promise((resolve, reject) => {
        local._web3.eth.getAccounts((err, accs) => {
          if (err != null) {
            console.warn('There was an error fetching your accounts.', err);
            return;
          }

          if (accs.length === 0) {
            console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
            return;
          }

          resolve(accs[0]);
        });
      });
      local._web3.eth.defaultAccount = local._account;
    }

    return Promise.resolve(local._account);
  });

  return function getAccount() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAccount = getAccount;

const getUserBalance =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(function* () {
    let account = yield getAccount();
    return new Promise((resolve, reject) => {
      local._tokenContract.methods.balanceOf(account).call({
        gas: 3000000
      }, (err, result) => {
        if (err != null) {
          reject(err);
        }

        resolve(local._web3.utils.fromWei(result));
      });
    });
  });

  return function getUserBalance() {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUserBalance = getUserBalance;