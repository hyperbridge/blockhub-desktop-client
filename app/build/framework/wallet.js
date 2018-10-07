"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.getCurrentAccount = void 0;

var _web = _interopRequireDefault(require("web3"));

var _truffleHdwalletProvider = _interopRequireDefault(require("truffle-hdwallet-provider"));

var _truffleContract = _interopRequireDefault(require("truffle-contract"));

var _bluebird = _interopRequireDefault(require("bluebird"));

var DB = _interopRequireWildcard(require("../db"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          return new _truffleHdwalletProvider.default(passphrase, "http://localhost:8545");
        },
        host: 'localhost',
        port: 8545,
        gas: 4500000,
        gasPrice: 25000000000,
        network_id: '*'
      },
      kovan: {
        provider: function (passphrase) {
          return new _truffleHdwalletProvider.default(passphrase, "https://kovan.infura.io/" + local.ethereum.infura.accessToken);
        },
        network_id: '*',
        gas: 4500000,
        gasPrice: 25000000000
      },
      rinkeby: {
        provider: function (passphrase) {
          return new _truffleHdwalletProvider.default(passphrase, "https://rinkeby.infura.io/" + local.ethereum.infura.accessToken);
        },
        network_id: '*',
        gas: 4500000,
        gasPrice: 25000000000
      },
      mainnet: {
        provider: function (passphrase) {
          return new _truffleHdwalletProvider.default(passphrase, "https://mainnet.infura.io/" + local.ethereum.infura.accessToken);
        },
        network_id: '*',
        gas: 4500000,
        gasPrice: 25000000000
      },
      ropsten: {
        provider: function (passphrase) {
          return new _truffleHdwalletProvider.default(passphrase, "https://ropsten.infura.io/" + local.ethereum.infura.accessToken);
        },
        network_id: 3,
        gas: 4500000,
        gasPrice: 25000000000
      }
    }
  }
};

const getCurrentAccount =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (web3) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(function* (resolve, reject) {
        // TODO: timeout if the remote isnt online
        const currentAccounts = yield web3.eth.getAccountsPromise();
        resolve({
          public_address: currentAccounts[0],
          private_key: web3.currentProvider.wallets[currentAccounts[0].toLowerCase()]._privKey.toString('hex')
        });
      });

      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }());
  });

  return function getCurrentAccount(_x) {
    return _ref.apply(this, arguments);
  };
}(); // 'retreat attack lift winter amazing noodle interest dutch craft old solve save',


exports.getCurrentAccount = getCurrentAccount;

const create =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(function* (passphrase) {
    console.log('[BlockHub] Creating wallet...');
    const provider = local.ethereum.networks[local.ethereum.activeNetwork].provider();
    const web3 = new _web.default(provider);

    _bluebird.default.promisifyAll(web3.eth, {
      suffix: 'Promise'
    });

    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(function* (resolve, reject) {
        const account = yield getCurrentAccount(web3);
        resolve({
          web3,
          provider,
          ...account
        });
      });

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()); // const myContract = contract(myABI)
    // myContract.setProvider(local.ethereum.web3.currentProvider)
  });

  return function create(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.create = create;