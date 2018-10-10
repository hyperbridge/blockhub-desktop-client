"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.initIPC = exports.initUpdater = exports.initApp = exports.log = exports.uninstallWindows = exports.installWindows = exports.uninstallDarwin = exports.installDarwin = exports.initProcess = exports.onException = void 0;

var _path = _interopRequireDefault(require("path"));

var _electron = require("electron");

var DB = _interopRequireWildcard(require("../db"));

var Security = _interopRequireWildcard(require("../framework/security"));

var DesktopBridge = _interopRequireWildcard(require("../framework/bridge"));

var PeerService = _interopRequireWildcard(require("../framework/peer-service"));

var Windows = _interopRequireWildcard(require("./windows"));

var Updater = _interopRequireWildcard(require("./updater"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = require('../config'); // Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)


PeerService.config.RELAY = false;

let argv = require('minimist')(process.argv.slice(2));

let deeplinkUri = null;

const onException = err => {
  console.log('[BlockHub] Exception', err);

  if (!Windows.main.window || !err) {
    return;
  } //DesktopBridge.sendCommand('systemError', err.stack || err)

};

exports.onException = onException;

const initProcess = () => {
  process.on('uncaughtException', onException);
  process.on('unhandledRejection', onException);
};

exports.initProcess = initProcess;

const installDarwin = () => {
  // On Mac, only protocols that are listed in `Info.plist` can be set as the
  // default handler at runtime.
  _electron.app.setAsDefaultProtocolClient('blockhub'); // File handlers are defined in `Info.plist`.

};

exports.installDarwin = installDarwin;

const uninstallDarwin = () => {};

exports.uninstallDarwin = uninstallDarwin;

const installWindows = () => {
  // Define custom protocol handler. Deep linking works on packaged versions of the application!
  _electron.app.setAsDefaultProtocolClient('blockhub');
};

exports.installWindows = installWindows;

const uninstallWindows = () => {};

exports.uninstallWindows = uninstallWindows;

const log = msg => {
  console.log(msg);

  if (Windows.main && Windows.main.webContents) {
    // Anything executed my be sanitized
    const windowMsg = Security.sanitize(msg);
    Windows.main.webContents.executeJavaScript(`console.log("${windowMsg}")`);
  }
};

exports.log = log;

const initApp = () => {
  const powerSaveBlocker = require('electron').powerSaveBlocker;

  powerSaveBlocker.start('prevent-app-suspension');

  _electron.app.commandLine.appendSwitch('page-visibility');

  _electron.app.commandLine.appendSwitch('disable-renderer-backgrounding');

  _electron.app.commandLine.appendSwitch('disable-background-timer-throttling');

  _electron.app.commandLine.appendSwitch('force-color-profile', 'srgb');

  if (process.platform === 'darwin') {
    installDarwin();
  }

  if (process.platform === 'win32') {
    installWindows();
  }

  const isSecondInstance = _electron.app.makeSingleInstance(function (commandLine, workingDirectory) {
    log('[BlockHub] Two app instances found. Closing duplicate.'); // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments

    if (process.platform == 'win32') {
      // Keep only command line / deep linked arguments
      deeplinkUri = commandLine.slice(1);
    }

    log("[BlockHub] app.makeSingleInstance # " + deepLinkUri); // Someone tried to run a second instance, we should focus our window.

    if (Windows.main) {
      if (Windows.main.isMinimized()) {
        Windows.main.restore();
      }

      Windows.main.focus();
    }
  });

  if (isSecondInstance) {
    _electron.app.quit();
  }

  _electron.app.on('window-all-closed', () => {
    // don't quit the app before the updater can do its thing
    if (!Updater.isRestartingForUpdate) {
      _electron.app.quit();
    }
  });

  _electron.app.on('activate', function () {
    if (Windows.main && config.IS_PRODUCTION) {
      Windows.main.show();
    }

    if (process.platform === 'darwin') {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (!Windows.main) {
        Windows.main.init();
      }
    }
  });

  _electron.app.on('window-all-closed', () => {
    log('[BlockHub] All windows closed. Quitting.');

    _electron.app.quit();
  }); // Mac only


  if (process.platform === 'darwin') {
    _electron.app.on('open-url', (event, uri) => {
      event.preventDefault();
      deeplinkUri = Security.sanitize(uri);
      log('[BlockHub] open-url # ' + deeplinkUri); // TODO: we need to validate all routing for potentially malicious behaviour

      if (deeplinkUri.startsWith('go')) {} else {
        Windows.main.loadURL('http://localhost:8000/' + deeplinkUri);
      }
    });
  }

  if (process.platform === 'win32') {
    deeplinkUri = process.argv.slice(1);
  }

  _electron.app.setName('BlockHub');

  _electron.app.on('ready', () => {
    DB.init();
    Windows.main.init(deeplinkUri, argv.dev, argv.tools);
    DesktopBridge.init(Windows.main.window.webContents);
    Updater.checkForUpdates();
  });
};

exports.initApp = initApp;

const initUpdater = () => {
  // Just place this code at the entry point of your application:
  // const updater = require('electron-simple-updater');
  // updater.init('https://raw.githubusercontent.com/hyperbridge/blockhub-desktop-client/master/updates.json');
  Updater.init(config.IS_PRODUCTION);
};

exports.initUpdater = initUpdater;

const initIPC = () => {
  _electron.ipcMain.on('command', (event, msg) => {
    log('[BlockHub] Received command from web', msg); // msg from web page

    const cmd = JSON.parse(msg);
    DesktopBridge.runCommand(cmd).then(() => {});
  });
};

exports.initIPC = initIPC;

const init = () => {
  initProcess();
  initIPC();
  initApp();
  initUpdater();
};

exports.init = init;

if (!global.electronInitialized) {
  init();
  global.electronInitialized = true;
}