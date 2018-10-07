"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.installAndRelaunch = exports.checkForUpdates = exports._cancelToken = exports.updateReleaseNotes = exports.updateReleaseName = exports.updateVersion = exports.updateDownloaded = exports.isDownloadingUpdate = exports.isUpdateAvailable = exports.isCheckingForUpdate = exports.isRestartingForUpdate = exports.isProduction = void 0;

var _path = _interopRequireDefault(require("path"));

var _electronUpdater = require("electron-updater");

var DesktopBridge = _interopRequireWildcard(require("../framework/bridge"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// These are required for the updater to work
const electron = require('electron');

const autoUpdate = electron.autoUpdater;
let isProduction = false;
exports.isProduction = isProduction;
let isRestartingForUpdate = false;
exports.isRestartingForUpdate = isRestartingForUpdate;
let isCheckingForUpdate = false;
exports.isCheckingForUpdate = isCheckingForUpdate;
let isUpdateAvailable = false;
exports.isUpdateAvailable = isUpdateAvailable;
let isDownloadingUpdate = false;
exports.isDownloadingUpdate = isDownloadingUpdate;
let updateDownloaded = false;
exports.updateDownloaded = updateDownloaded;
let updateVersion = null;
exports.updateVersion = updateVersion;
let updateReleaseName = null;
exports.updateReleaseName = updateReleaseName;
let updateReleaseNotes = null;
exports.updateReleaseNotes = updateReleaseNotes;
let _cancelToken = null;
exports._cancelToken = _cancelToken;

const checkForUpdates = () => {
  _electronUpdater.autoUpdater.checkForUpdates();
};

exports.checkForUpdates = checkForUpdates;

const installAndRelaunch = () => {
  if (!isProduction || !updateDownloaded) {
    return;
  }

  exports.isRestartingForUpdate = isRestartingForUpdate = true;
  _electronUpdater.autoUpdater.autoInstallOnAppQuit = true; // Leave this here just incase. Workaround for https://github.com/electron-userland/electron-builder/issues/3269

  let promise = _electronUpdater.autoUpdater.quitAndInstall(false, true);

  if (promise) {
    promise.catch(err => {
      console.log('[BlockHub] Error during quitAndInstall', err);
    });
  }
};

exports.installAndRelaunch = installAndRelaunch;

const init = prod => {
  exports.isProduction = isProduction = prod;

  if (!isProduction) {
    _electronUpdater.autoUpdater.updateConfigPath = _path.default.join(__dirname, '../../dev-app-update.yml');
  }

  _electronUpdater.autoUpdater.on('checking-for-update', () => {
    exports.isCheckingForUpdate = isCheckingForUpdate = true;
    DesktopBridge.sendCommand('checkingForUpdate');
  });

  _electronUpdater.autoUpdater.on('update-not-available', () => {
    exports.isCheckingForUpdate = isCheckingForUpdate = false;
    exports.isUpdateAvailable = isUpdateAvailable = false;
    DesktopBridge.sendCommand('updateNotAvailable');
  });

  _electronUpdater.autoUpdater.on('update-available', updateInfo => {
    exports.isCheckingForUpdate = isCheckingForUpdate = false;
    exports.isUpdateAvailable = isUpdateAvailable = true;
    exports.updateVersion = updateVersion = updateInfo.version;
    exports.updateReleaseName = updateReleaseName = updateInfo.releaseName;
    exports.updateReleaseNotes = updateReleaseNotes = updateInfo.releaseNotes;
    DesktopBridge.sendCommand('updateAvailable', updateInfo);
  });

  _electronUpdater.autoUpdater.on('update-downloaded', path => {
    exports.updateDownloaded = updateDownloaded = true;
    exports._cancelToken = _cancelToken = null;
    DesktopBridge.sendCommand('updateDownloaded', path);
    installAndRelaunch();
  });

  _electronUpdater.autoUpdater.on('error', errorInfo => {
    if (isDownloadingUpdate) {
      DesktopBridge.sendCommand('downloadError', errorInfo);
    } else {
      DesktopBridge.sendCommand('error', errorInfo);
    }

    exports.isCheckingForUpdate = isCheckingForUpdate = false;
    exports.isDownloadingUpdate = isDownloadingUpdate = false;
  });

  _electronUpdater.autoUpdater.on('download-progress', progress => {
    DesktopBridge.sendCommand('downloadProgress', progress);
  }); // DesktopBridge.on('quitAndInstall', () => {
  //     // when receiving a quitAndInstall signal, quit and install the new version ;)
  //     autoUpdater.quitAndInstall()
  // })

};

exports.init = init;