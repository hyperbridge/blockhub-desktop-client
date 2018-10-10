import path from 'path'
import { app, BrowserWindow, Menu, ipcMain, shell, webFrame } from 'electron'

import * as DB from '../db'
import * as Security from '../framework/security'
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

let deeplinkUri = null

export const onException = (err) => {
  console.log('[BlockHub] Exception', err)

  if (!Windows.main.window || !err) {
    return
  }

  DesktopBridge.sendCommand('systemError', err.stack || err)
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


export const installWindows = () => {
// Define custom protocol handler. Deep linking works on packaged versions of the application!
  app.setAsDefaultProtocolClient('blockhub')
}

export const uninstallWindows = () => { }


export const log = (msg) => {
  console.log(msg)

  if (Windows.main && Windows.main.webContents) {
    // Anything executed my be sanitized
    const windowMsg = Security.sanitize(msg)

    Windows.main.webContents.executeJavaScript(`console.log("${windowMsg}")`)
  }
}

export const initApp = () => {
  const powerSaveBlocker = require('electron').powerSaveBlocker
  powerSaveBlocker.start('prevent-app-suspension')

  app.commandLine.appendSwitch('page-visibility')
  app.commandLine.appendSwitch('disable-renderer-backgrounding')
  app.commandLine.appendSwitch('disable-background-timer-throttling')
  app.commandLine.appendSwitch('force-color-profile', 'srgb')

  if (process.platform === 'darwin') {
    installDarwin()
  }

  if (process.platform === 'win32') {
    installWindows()
  }

  const isSecondInstance = app.makeSingleInstance(function (commandLine, workingDirectory) {
    log('[BlockHub] Two app instances found. Closing duplicate.')

    // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments
    if (process.platform == 'win32') {
      // Keep only command line / deep linked arguments
      deeplinkUri = commandLine.slice(1)
    }

    log("[BlockHub] app.makeSingleInstance # " + deepLinkUri)

    // Someone tried to run a second instance, we should focus our window.
    if (Windows.main) {
      if(Windows.main.isMinimized()) {
        Windows.main.restore()
      }

      Windows.main.focus()
    }
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
    log('[BlockHub] All windows closed. Quitting.')
    app.quit()
  })

  // Mac only
  if (process.platform === 'darwin') {
    app.on('open-url', (event, uri) => {
      event.preventDefault()

      deeplinkUri = Security.sanitize(uri)

      log('[BlockHub] open-url # ' + deeplinkUri)

      // TODO: we need to validate all routing for potentially malicious behaviour
      if (deeplinkUri.startsWith('go')) {

      } else {
        Windows.main.loadURL('http://localhost:8000/' + deeplinkUri)
      }
    })
  }

  if (process.platform === 'win32') {
    deeplinkUri = process.argv.slice(1)
  }

  app.setName('BlockHub')

  app.on('ready', () => {
    DB.init()
    Windows.main.init(deeplinkUri, argv.dev, argv.tools)
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
    log('[BlockHub] Received command from web', msg) // msg from web page

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
