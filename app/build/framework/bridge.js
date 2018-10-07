"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.initHeartbeat = exports.runCommand = exports.sendCommand = exports.ID = exports.handleCreateAccountRequest = exports.updateAccountRequest = exports.setAccountRequest = exports.handleDeployContract = exports.deployContract = exports.initProtocol = exports.createFundingProject = exports.updateFundingProject = exports.setContractAddress = exports.getProtocolByName = exports.promptPasswordRequest = exports.encrypt = exports.decrypt = exports.once = exports.emit = exports.removeListener = exports.on = exports.config = void 0;

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _bip = _interopRequireDefault(require("bip39"));

var _crypto = _interopRequireDefault(require("crypto"));

var _electron = _interopRequireDefault(require("electron"));

var _hyperbridgeToken = _interopRequireDefault(require("hyperbridge-token"));

var _fundingProtocol = _interopRequireDefault(require("funding-protocol"));

var _marketplaceProtocol = _interopRequireDefault(require("marketplace-protocol"));

var Wallet = _interopRequireWildcard(require("./wallet"));

var DB = _interopRequireWildcard(require("../db"));

var Windows = _interopRequireWildcard(require("../main/windows"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

let config = {};
exports.config = config;
const local = {
  requests: {},
  account: {
    wallet: null
  },
  passphrase: null,
  password: null,
  events: {}
};

const on = (event, listener) => {
  if (typeof local.events[event] !== 'object') {
    local.events[event] = [];
  }

  local.events[event].push(listener);
  return () => removeListener(event, listener);
};

exports.on = on;

const removeListener = (event, listener) => {
  if (typeof local.events[event] === 'object') {
    const idx = local.events[event].indexOf(listener);

    if (idx > -1) {
      local.events[event].splice(idx, 1);
    }
  }
};

exports.removeListener = removeListener;

const emit = (event, ...args) => {
  if (typeof local.events[event] === 'object') {
    local.events[event].forEach(listener => listener.apply(void 0, args));
  }
};

exports.emit = emit;

const once = (event, listener) => {
  const remove = on(event, (...args) => {
    remove();
    listener.apply(void 0, args);
  });
};

exports.once = once;

const decrypt = (data, key) => {
  return _cryptoJs.default.AES.decrypt(data, key).toString(_cryptoJs.default.enc.Utf8);
};

exports.decrypt = decrypt;

const encrypt = (data, key) => {
  return _cryptoJs.default.AES.encrypt(data, key).toString();
};

exports.encrypt = encrypt;

const promptPasswordRequest =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (data = {}) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(function* (resolve) {
        // Web sends back password prompt response
        const res = yield sendCommand('promptPasswordRequest', data); // Decrypt the passphrase and use to set web3 provider

        try {
          local.password = res.password;
          local.passphrase = decrypt(DB.application.config.data.account.passphrase, local.password);

          if (!local.passphrase) {
            throw new Error();
          }
        } catch (e) {
          return yield promptPasswordRequest({
            error: {
              message: 'Password was incorrect',
              code: 1
            }
          });
        }

        local.account.wallet = yield Wallet.create(local.passphrase); // Desktop sends back all non-sensitive account info

        yield setAccountRequest(); // Check the wallet exists in the accounts contract
        // If not, prompt to add it
        // If no ETH, let them know they need it
        // Sync any changes from smart contract

        resolve();
      });

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });

  return function promptPasswordRequest() {
    return _ref.apply(this, arguments);
  };
}();

exports.promptPasswordRequest = promptPasswordRequest;

const getProtocolByName = name => {
  if (name === 'funding') {
    return _fundingProtocol.default;
  } else if (name === 'marketplace') {
    return _marketplaceProtocol.default;
  } else if (name === 'application') {
    // TODO: add a protocolToModule translator?
    return _hyperbridgeToken.default;
  }

  throw new Error('[DesktopBridge] Unknown protocol requested: ' + name);
};

exports.getProtocolByName = getProtocolByName;

const setContractAddress =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(function* ({
    protocolName,
    contractName,
    address
  }) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(function* (resolve) {
        let protocol = getProtocolByName(protocolName);
        protocol.api.ethereum.setContractAddress(contractName, address).catch(() => {
          resolve('Unable to deploy contract');
        }).then(() => {
          resolve(null);
        });
      });

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());
  });

  return function setContractAddress(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.setContractAddress = setContractAddress;

const updateFundingProject =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(function* ({
    id,
    data
  }) {
    const project = DB.funding.projects.findOne({
      'id': id
    });
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(function* (resolve, reject) {
        const projectRegistrationContract = _fundingProtocol.default.api.ethereum.state.contracts.ProjectRegistration.deployed; // TODO

        resolve(null, project);
      });

      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  });

  return function updateFundingProject(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateFundingProject = updateFundingProject;

const createFundingProject =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(function* ({
    title,
    description,
    about
  }) {
    const project = {
      title,
      description,
      about,
      minContributionGoal: 1000,
      maxContributionGoal: 10000,
      contributionPeriod: 4,
      noRefunds: false,
      noTimeline: true
    };
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(function* (resolve, reject) {
        const projectRegistrationContract = _fundingProtocol.default.api.ethereum.state.contracts.ProjectRegistration.deployed;
        projectRegistrationContract.ProjectCreated().watch((err, res) => {
          if (err) {
            console.warn('[BlockHub][Funding] Error', err);
            return reject(err);
          }

          project.$loki = undefined;
          project.id = res.args.projectId.toNumber();

          try {
            DB.funding.projects.insert(project);
          } catch (e) {
            try {
              DB.funding.projects.update(project);
            } catch (e) {
              reject(e);
            }
          }

          resolve(null, project);
        });
        yield projectRegistrationContract.createProject(project.title, project.description, project.about, project.minContributionGoal, project.maxContributionGoal, project.contributionPeriod, project.noRefunds, project.noTimeline);
      });

      return function (_x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }());
  });

  return function createFundingProject(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.createFundingProject = createFundingProject;

const initProtocol =
/*#__PURE__*/
function () {
  var _ref9 = _asyncToGenerator(function* ({
    protocolName
  }) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(function* (resolve) {
        const protocol = getProtocolByName(protocolName);
        const state = DB[protocolName].config.data;
        protocol.api.ethereum.init(state.ethereum[state.current_ethereum_network].user_from_address, state.ethereum[state.current_ethereum_network].user_to_address);

        for (let contractName in state.ethereum[state.current_ethereum_network].contracts) {
          const contract = state.ethereum[state.current_ethereum_network].contracts[contractName];

          if (contract.address) {
            yield setContractAddress(protocolName, contractName, contract.address).then(err => {
              if (err) {
                state.ethereum[state.current_ethereum_network].contracts[contractName].address = null;
                state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null;
              }
            });
          } else {
            state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = null;
          }
        }

        resolve(null, state.ethereum[state.current_ethereum_network]);
      });

      return function (_x11) {
        return _ref10.apply(this, arguments);
      };
    }());
  });

  return function initProtocol(_x10) {
    return _ref9.apply(this, arguments);
  };
}();

exports.initProtocol = initProtocol;

const deployContract =
/*#__PURE__*/
function () {
  var _ref11 = _asyncToGenerator(function* ({
    protocolName,
    contractName
  }) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref12 = _asyncToGenerator(function* (resolve) {
        const protocol = getProtocolByName(protocolName);
        const state = DB[protocolName].config.data;
        const links = [];
        const params = [];

        if (!state.ethereum[state.current_ethereum_network].contracts[contractName]) {
          state.ethereum[state.current_ethereum_network].contracts[contractName] = {
            created_at: null,
            address: null
          };
        }

        if (protocol.api.ethereum.state.contracts[contractName].links) {
          links = protocol.api.ethereum.state.contracts[contractName].links;

          for (let i in links) {
            links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address;

            if (!links[i].address) {
              yield deployContract(protocolName, links[i].name);
              links[i].address = state.ethereum[state.current_ethereum_network].contracts[links[i].name].address;
            }
          }
        } // Linking


        if (protocol === 'funding') {
          if (contractName === 'ProjectBase') {
            params = [false];
          }

          if (contractName === 'FundingVault') {
            params = [state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address];
          }

          if (contractName === 'Contribution' || contractName === 'Curation' || contractName === 'Developer' || contractName === 'ProjectContributionTier' || contractName === 'ProjectMilestoneCompletion' || contractName === 'ProjectMilestoneCompletionVoting' || contractName === 'ProjectRegistration' || contractName === 'ProjectTimeline' || contractName === 'ProjectTimelineProposal' || contractName === 'ProjectTimelineProposalVoting') {
            params = [state.ethereum[state.current_ethereum_network].contracts.FundingStorage.address, false];
          }
        }

        if (protocol === 'application') {
          if (payload.contractName !== 'EternalStorage') {
            params = [state.ethereum[state.current_ethereum_network].contracts.EternalStorage.address];
          }
        }

        protocol.api.ethereum.deployContract(contractName, links, params).then(
        /*#__PURE__*/
        function () {
          var _ref13 = _asyncToGenerator(function* (err, contract) {
            state.ethereum[state.current_ethereum_network].contracts[contractName].created_at = Date.now();
            state.ethereum[state.current_ethereum_network].contracts[contractName].address = contract.address;
            DB[protocolName].config.update(state);
            DB.save();

            if (protocol === 'funding' && contractName === 'ProjectRegistration') {
              const blankAddress = 0x0000000000000000000000000000000000000000;
              const projectRegistrationContract = protocol.api.ethereum.state.contracts.ProjectRegistration.deployed;
              const fundingStorageContract = protocol.api.ethereum.state.contracts.FundingStorage.deployed;
              yield fundingStorageContract.registerContract('ProjectRegistration', blankAddress, projectRegistrationContract.address);
              yield projectRegistrationContract.initialize();
              const developerContract = protocol.api.ethereum.state.contracts.Developer.deployed;
              yield fundingStorageContract.registerContract('Developer', blankAddress, developerContract.address);
              yield developerContract.initialize();
              let developerId = null;
              const developerAccount = state.ethereum[state.current_ethereum_network].user_from_address;
              developerContract.DeveloperCreated().watch((err, res) => {
                if (err) {
                  console.warn('[BlockHub][Funding] Error', err);
                }

                developerId = res.args.developerId;
              });
              yield developerContract.createDeveloper('Hyperbridge', {
                from: developerAccount
              });
            }

            resolve(null, state.ethereum[state.current_ethereum_network].contracts[contractName]);
          });

          return function (_x14, _x15) {
            return _ref13.apply(this, arguments);
          };
        }());
      });

      return function (_x13) {
        return _ref12.apply(this, arguments);
      };
    }());
  });

  return function deployContract(_x12) {
    return _ref11.apply(this, arguments);
  };
}();

exports.deployContract = deployContract;

const handleDeployContract =
/*#__PURE__*/
function () {
  var _ref14 = _asyncToGenerator(function* ({
    protocolName,
    contractName
  }) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref15 = _asyncToGenerator(function* (resolve) {
        const {
          err,
          contract
        } = deployContract(protocolName, contractName);
        resolve(err, contract);
      });

      return function (_x17) {
        return _ref15.apply(this, arguments);
      };
    }());
  });

  return function handleDeployContract(_x16) {
    return _ref14.apply(this, arguments);
  };
}();

exports.handleDeployContract = handleDeployContract;

const setAccountRequest =
/*#__PURE__*/
function () {
  var _ref16 = _asyncToGenerator(function* () {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref17 = _asyncToGenerator(function* (resolve) {
        const account = DB.application.config.data.account;
        const decryptedPrivateKey = decrypt(account.private_key, local.password);
        const req = {
          account: {
            public_address: account.public_address,
            secret_question_1: account.secret_question_1,
            secret_answer_1: 'HIDDEN',
            secret_question_2: account.secret_question_2,
            secret_answer_2: account.secret_answer_2,
            passphrase: 'HIDDEN',
            private_key: 'HIDDEN',
            password: 'HIDDEN',
            email: decrypt(account.email, decryptedPrivateKey),
            first_name: decrypt(account.first_name, decryptedPrivateKey),
            last_name: decrypt(account.last_name, decryptedPrivateKey),
            birthday: decrypt(account.birthday, decryptedPrivateKey)
          }
        };
        yield sendCommand('setAccountRequest', req);
        resolve();
      });

      return function (_x18) {
        return _ref17.apply(this, arguments);
      };
    }());
  });

  return function setAccountRequest() {
    return _ref16.apply(this, arguments);
  };
}();

exports.setAccountRequest = setAccountRequest;

const updateAccountRequest =
/*#__PURE__*/
function () {
  var _ref18 = _asyncToGenerator(function* (data) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref19 = _asyncToGenerator(function* (resolve) {
        if (data.encrypt_passphrase) {
          if (data.encrypt_passphrase) {
            DB.application.config.data.account.passphrase = encrypt(DB.application.config.data.account.passphrase, local.password);
          } else {
            // We're disabling when previously enabled
            if (DB.application.config.data.account.encrypt_passphrase) {
              DB.application.config.data.account.passphrase = decrypt(DB.application.config.data.account.passphrase, local.password);
            }
          }

          DB.application.config.data.account.encrypt_passphrase = data.encrypt_passphrase;
          DB.save();
          resolve();
        }
      });

      return function (_x20) {
        return _ref19.apply(this, arguments);
      };
    }());
  });

  return function updateAccountRequest(_x19) {
    return _ref18.apply(this, arguments);
  };
}();

exports.updateAccountRequest = updateAccountRequest;

const generateWallet =
/*#__PURE__*/
function () {
  var _ref20 = _asyncToGenerator(function* () {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref21 = _asyncToGenerator(function* (resolve) {
        let randomBytes = _crypto.default.randomBytes(16); // 128 bits of seed is enough
        // the 12 word phrase


        let passphrase = _bip.default.entropyToMnemonic(randomBytes.toString('hex'));

        const wallet = yield Wallet.create(passphrase);
        resolve({
          passphrase: passphrase,
          public_address: wallet.public_address,
          private_key: wallet.private_key
        });
      });

      return function (_x21) {
        return _ref21.apply(this, arguments);
      };
    }());
  });

  return function generateWallet() {
    return _ref20.apply(this, arguments);
  };
}();

const handleCreateAccountRequest =
/*#__PURE__*/
function () {
  var _ref22 = _asyncToGenerator(function* ({
    email,
    password,
    birthday,
    first_name,
    last_name,
    secret_question_1,
    secret_answer_1,
    secret_question_2,
    secret_answer_2
  }) {
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref23 = _asyncToGenerator(function* (resolve) {
        const account = yield generateWallet();
        const identity = yield generateWallet();
        DB.application.config.data.account = { ...DB.application.config.data.account,
          public_address: account.public_address,
          secret_question_1: 'HIDDEN',
          secret_answer_1: 'HIDDEN',
          secret_question_2: 'HIDDEN',
          secret_answer_2: 'HIDDEN',
          passphrase: account.passphrase,
          private_key: encrypt(account.private_key, password),
          password: encrypt(secret_answer_1 + birthday, password),
          email: encrypt(email, account.private_key),
          first_name: encrypt(first_name, account.private_key),
          last_name: encrypt(last_name, account.private_key),
          birthday: encrypt(birthday, account.private_key),
          current_identity: {
            id: 1
          },
          identities: [{
            id: 1,
            name: 'Default',
            public_address: identity.public_address,
            passphrase: encrypt(identity.passphrase, account.passphrase),
            private_key: encrypt(identity.private_key, account.passphrase)
          }]
        };
        DB.save();
        local.password = password;
        local.account.wallet = account;
        const res = {
          account: {
            public_address: account.public_address,
            email: email,
            first_name: first_name,
            last_name: last_name,
            birthday: birthday,
            secret_question_1: secret_question_1,
            secret_answer_1: secret_answer_1,
            secret_question_2: secret_question_2,
            secret_answer_2: secret_answer_2,
            passphrase: account.passphrase,
            current_identity: {
              id: 1
            },
            identities: [{
              id: 1,
              name: 'Default',
              public_address: identity.public_address
            }]
          }
        };
        resolve(res);
      });

      return function (_x23) {
        return _ref23.apply(this, arguments);
      };
    }());
  });

  return function handleCreateAccountRequest(_x22) {
    return _ref22.apply(this, arguments);
  };
}();

exports.handleCreateAccountRequest = handleCreateAccountRequest;

const ID = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

exports.ID = ID;

const sendCommand =
/*#__PURE__*/
function () {
  var _ref24 = _asyncToGenerator(function* (key, data = {}, peer = null, responseId = null) {
    const cmd = {
      key: key,
      responseId: responseId,
      requestId: ID(),
      data: data
    };
    console.log('[DesktopBridge] Sending command', cmd);

    if (!local.bridge) {
      console.warn('[DesktopBridge] Not connected to bridge. This shouldnt happen.');
    }

    let _resolve, _reject;

    let promise = new Promise((resolve, reject) => {
      _resolve = resolve;
      _reject = reject;
    });
    promise.resolve = _resolve;
    promise.reject = _reject;
    local.requests[cmd.requestId] = promise;
    local.bridge.send('command', JSON.stringify(cmd));
    return promise;
  });

  return function sendCommand(_x24) {
    return _ref24.apply(this, arguments);
  };
}();

exports.sendCommand = sendCommand;

const runCommand =
/*#__PURE__*/
function () {
  var _ref25 = _asyncToGenerator(function* (cmd, meta = {}) {
    console.log('[DesktopBridge] Running command', cmd.key);
    return new Promise(
    /*#__PURE__*/
    function () {
      var _ref26 = _asyncToGenerator(function* (resolve, reject) {
        if (cmd.responseId) {
          if (local.requests[cmd.responseId]) {
            console.log('[DesktopBridge] Running response callback', cmd.responseId);
            local.requests[cmd.responseId].resolve(cmd.data);
            delete local.requests[cmd.responseId];
          }

          return resolve();
        }

        if (cmd.key === 'init') {
          console.log('[BlockHub] Web initialized', cmd.data); // msg from web page

          if (cmd.data == '1') {
            const mode = config.IS_PRODUCTION ? 'production' : 'local';
            sendCommand('setMode', mode); // Check local db for stored account

            if (DB.application.config.data.account.passphrase) {
              //Windows.main.window.webContents.setZoomFactor(1980 / 500)
              // Desktop asks to prompt password
              yield promptPasswordRequest();
            } // If exists, prompt web to require password
            // Web sends back response (requirePasswordResponse)
            // Decrypt the passphrase and use to set web3 provider
            // Desktop sends back all non-sensitive account info
            // Check the wallet exists in the accounts contract
            // If not, prompt to add it
            // If no ETH, let them know they need it
            // Sync any changes from smart contract
            // If doesn't exist, prompt web to create account


            const mainScreen = _electron.default.screen.getPrimaryDisplay(); // const width = 1400
            // const height = (width / 1980) * 1080
            // Windows.main.window.webContents.setZoomFactor(width / 1980)


            Windows.main.window.setSize(mainScreen.size.width, mainScreen.size.height);
            Windows.main.window.center(); // console.log('[BlockHub] Setting up heartbeat')
            // setInterval(() => {
            //     sendCommand('heartbeat', 1) // send to web page
            // }, 2000)
          } else {
            console.error('[BlockHub] Error initializing web', cmd.data);
          }
        } else if (cmd.key === 'ping') {
          console.log('[BlockHub] Ping from web', cmd.data);
          sendCommand('pong', 'ok');
        } else if (cmd.key === 'resize') {//Windows.main.window.webContents.setZoomFactor(cmd.data.width / 1980)
          //Windows.main.window.setSize(cmd.data.width, cmd.data.height)
          //Windows.main.window.center()
        } else if (cmd.key === 'createAccountRequest') {
          const res = yield handleCreateAccountRequest(cmd.data);
          return resolve((yield sendCommand('createAccountResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'getAccountRequest') {
          const res = yield handleGetAccountRequest(cmd.data);
          return resolve((yield sendCommand('getAccountResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'setContractAddress') {
          const res = yield handleSetContractAddress(cmd.data);
          return resolve((yield sendCommand('setContractAddressResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'deployContract') {
          const res = yield handleDeployContract(cmd.data);
          return resolve((yield sendCommand('deployContractResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'createFundingProject') {
          const res = yield createFundingProject(cmd.data);
          return resolve((yield sendCommand('createFundingProjectResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'updateAccountRequest') {
          const res = yield updateAccountRequest(cmd.data);
          return resolve((yield sendCommand('updateAccountRequestResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'initProtocol') {
          const res = yield initProtocol(cmd.data);
          return resolve((yield sendCommand('initProtocolResponse', res, meta.client, cmd.requestId)));
        } else if (cmd.key === 'setPasswordRequest') {
          local.password = cmd.data.password; // TODO: validate

          const res = {
            success: 1
          };
          return resolve((yield sendCommand('setPasswordResponse', res, meta.client, cmd.requestId)));
        } else {
          console.log('[DesktopBridge] Unhandled command:', cmd);
        }

        emit(cmd.key, cmd.data ? cmd.data : undefined);
      });

      return function (_x26, _x27) {
        return _ref26.apply(this, arguments);
      };
    }());
  });

  return function runCommand(_x25) {
    return _ref25.apply(this, arguments);
  };
}();

exports.runCommand = runCommand;

const initHeartbeat = () => {
  local.bridge.on('heartbeat', (event, msg) => {
    console.log('[DesktopBridge] Heartbeat');
    local.bridge.send('heartbeat', 1);
  });
}; // Check local db for stored account
// If exists, prompt web to require password
// Web sends back response (requirePasswordResponse)
// Decrypt the passphrase and use to set web3 provider
// Desktop sends back all non-sensitive account info
// Check the wallet exists in the accounts contract
// If not, prompt to add it
// If no ETH, let them know they need it
// Sync any changes from smart contract
// If doesn't exist, prompt web to create account


exports.initHeartbeat = initHeartbeat;

const init = bridge => {
  console.log('[DesktopBridge] Initializing');
  local.bridge = bridge;
};

exports.init = init;