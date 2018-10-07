import { app, BrowserWindow, Menu, ipcMain, shell, webFrame } from 'electron'

import path from 'path'
import * as DB from '../db'
import * as DesktopBridge from '../framework/bridge'
import * as PeerService from '../framework/peer-service'
import * as Windows from './windows'
import * as Updater from './updater'


const config = require('../config')

// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
PeerService.config.RELAY = false

let argv = require('minimist')(process.argv.slice(2))

export const onException = (err) => {
  console.log('[BlockHub] Exception', err)

  if (!Windows.main.window || !err) {
    return
  }

  //DesktopBridge.sendCommand('systemError', err.stack || err)
}

export const initProcess = () => {
  process.on('uncaughtException', onException)
  process.on('unhandledRejection', onException)
}

export const installDarwin = () => {
  // On Mac, only protocols that are listed in `Info.plist` can be set as the
  // default handler at runtime.
  app.setAsDefaultProtocolClient('blockhub')

  // File handlers are defined in `Info.plist`.
}

export const uninstallDarwin = () => { }

export const initApp = () => {
  const powerSaveBlocker = require('electron').powerSaveBlocker
  powerSaveBlocker.start('prevent-app-suspension')

  app.commandLine.appendSwitch('page-visibility')
  app.commandLine.appendSwitch('disable-renderer-backgrounding')
  app.commandLine.appendSwitch('disable-background-timer-throttling')
  app.commandLine.appendSwitch('force-color-profile', 'srgb')

  if (process.platform === 'darwin') {
    app.setAsDefaultProtocolClient('blockhub')

    installDarwin()
  }

  const isSecondInstance = app.makeSingleInstance(function (commandLine, workingDirectory) {
    console.log('[BlockHub] Two app instances found. Closing duplicate.')

    // Someone tried to run a second instance, we should focus our window.
    if (Windows.main.isMinimized()) Windows.main.restore()
    Windows.main.focus()
  })

  if (isSecondInstance) {
    app.quit()
  }

  app.on('window-all-closed', () => {
    // don't quit the app before the updater can do its thing
    if (!Updater.isRestartingForUpdate) {
      app.quit()
    }
  })

  app.on('activate', function () {
    if (Windows.main && config.IS_PRODUCTION) {
      Windows.main.show()
    }

    if (process.platform === 'darwin') {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (!Windows.main) {
        Windows.main.init()
      }
    }
  })

  app.on('window-all-closed', () => {
    console.log('[BlockHub] All windows closed. Quitting.')
    app.quit()
  })

  // Mac only
  if (process.platform !== 'darwin') {
    app.on('open-url', (event, url) => {

    })
  }

  app.setName('BlockHub')

  app.on('ready', () => {
    DB.init()
    Windows.main.init(argv.dev, argv.tools)
    DesktopBridge.init(Windows.main.window.webContents)
    Updater.checkForUpdates()
  })
}

export const initUpdater = () => {
  // Just place this code at the entry point of your application:
  // const updater = require('electron-simple-updater');
  // updater.init('https://raw.githubusercontent.com/hyperbridge/blockhub-desktop-client/master/updates.json');
  Updater.init(config.IS_PRODUCTION)
}

export const initIPC = () => {
  ipcMain.on('command', (event, msg) => {
    console.log('[BlockHub] Received command from web', msg) // msg from web page

    const cmd = JSON.parse(msg)

    DesktopBridge.runCommand(cmd).then(() => {})
  })

}


export const init = () => {
  initProcess()
  initIPC()
  initApp()
  initUpdater()
}

if (!global.electronInitialized) {
  init()

  global.electronInitialized = true
}
