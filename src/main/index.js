import { app, BrowserWindow, Menu, ipcMain, shell } from 'electron'
import express from 'express'
import path from 'path'
import * as DB from '../db'
import * as DesktopBridge from '../framework/bridge'
import * as PeerService from '../framework/peer-service'

const config = require('../config')

// Initial settings
// Disable peer relaying by default (until we're somewhat stable)
// Disable chaos monkey by default (until we're somewhat stable)
PeerService.config.RELAY = false

let argv = require('minimist')(process.argv.slice(2))

let mainWindow = null

export const onException = (err) => {
  console.log('[BlockHub] Exception', err)

  if (!mainWindow || !err) {
    return
  }

  DesktopBridge.sendCommand('systemError', err.stack || err)
}

export const initProcess = () => {
  process.on('uncaughtException', onException)
  process.on('unhandledRejection', onException)
}

export const initMenu = () => {
  let template = null

  if (process.platform === 'darwin') {
    const navigate = (path) => mainWindow.webContents.send('navigate', path)
    template = [
      {
        label: 'BlockHub',
        submenu: [
          {
            label: 'About BlockHub ' + app.getVersion(),
            selector: 'orderFrontStandardAboutPanel:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Preferences...',
            accelerator: 'Command+,',
            click() { navigate('/config') }
          },
          {
            type: 'separator'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide BlockHub',
            accelerator: 'Command+H',
            selector: 'hide:'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Shift+H',
            selector: 'hideOtherApplications:'
          },
          {
            label: 'Show All',
            selector: 'unhideAllApplications:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click() {
              app.quit()
            }
          }
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'Command+Z',
            selector: 'undo:'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
          },
          {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
          },
          {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
          },
          {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
          }
        ]
      },
      {
        label: 'View',
        submenu:
        process.env.NODE_ENV === 'development'
          ? [
            {
              label: 'Reload',
              accelerator: 'Command+R',
              click() {
                mainWindow.webContents.reload()
              }
            },
            {
              label: 'Toggle Full Screen',
              accelerator: 'Ctrl+Command+F',
              click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen())
              }
            },
            {
              label: 'Toggle Developer Tools',
              accelerator: 'Alt+Command+I',
              click() {
                mainWindow.toggleDevTools()
              }
            }
          ]
          : [
            {
              label: 'Toggle Full Screen',
              accelerator: 'Ctrl+Command+F',
              click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen())
              }
            }
          ]
      },
      {
        label: 'Window',
        submenu: [
          {
            label: 'Accounts',
            accelerator: 'Command+1',
            click() { navigate('/accounts') }
          },
          {
            label: 'Blocks',
            accelerator: 'Command+2',
            click() { navigate('/blocks') }
          },
          {
            label: 'Transactions',
            accelerator: 'Command+3',
            click() { navigate('/transactions') }
          },
          {
            label: 'Logs',
            accelerator: 'Command+4',
            click() { navigate('/logs') }
          },
          {
            label: 'Settings',
            accelerator: 'Command+5',
            click() { navigate('/config') }
          },
          {
            label: 'Minimize',
            accelerator: 'Command+M',
            selector: 'performMiniaturize:'
          },
          {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          }
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click() {
              shell.openExternal('https://hyperbridge.org/blockhub')
            }
          },
          {
            label: 'Documentation',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/blob/master/README.md'
              )
            }
          },
          {
            label: 'Community Discussions',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/issues'
              )
            }
          },
          {
            label: 'Search Issues',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/issues'
              )
            }
          }
        ]
      }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  } else {
    template = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O'
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click() {
              mainWindow.close()
            }
          }
        ]
      },
      {
        label: '&View',
        submenu:
        process.env.NODE_ENV === 'development'
          ? [
            {
              label: '&Reload',
              accelerator: 'Ctrl+R',
              click() {
                mainWindow.webContents.reload()
              }
            },
            {
              label: 'Toggle &Full Screen',
              accelerator: 'F11',
              click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen())
              }
            },
            {
              label: 'Toggle &Developer Tools',
              accelerator: 'Alt+Ctrl+I',
              click() {
                mainWindow.toggleDevTools()
              }
            }
          ]
          : [
            {
              label: 'Toggle &Full Screen',
              accelerator: 'F11',
              click() {
                mainWindow.setFullScreen(!mainWindow.isFullScreen())
              }
            }
          ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click() {
              shell.openExternal('https://hyperbridge.org/blockhub')
            }
          },
          {
            label: 'Documentation',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/blob/master/README.md'
              )
            }
          },
          {
            label: 'Community Discussions',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/issues'
              )
            }
          },
          {
            label: 'Search Issues',
            click() {
              shell.openExternal(
                'https://github.com/hyperbridge/blockhub/issues'
              )
            }
          }
        ]
      }
    ]

    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
  }
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

  if (process.platform === 'darwin') {
    app.setAsDefaultProtocolClient('blockhub')

    installDarwin()
  }

  const isSecondInstance = app.makeSingleInstance(function (commandLine, workingDirectory) {
    console.log('[BlockHub] Two app instances found. Closing duplicate.')

    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  })

  if (isSecondInstance) {
    app.quit()
  }

  app.on('window-all-closed', () => {
    // don't quit the app before the updater can do its thing
    if (!getAutoUpdateService().isRestartingForUpdate) {
      app.quit()
    }
  })

  app.on('activate', function () {
    if (mainWindow && config.IS_PRODUCTION) {
      mainWindow.show()
    }

    if (process.platform === 'darwin') {
      // On OS X it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (!mainWindow) {
        createWindow()
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
    createWindow()
  })
}

export const initIPC = () => {
  ipcMain.on('command', (event, msg) => {
    console.log('[BlockHub] Received command from web', msg) // msg from web page

    const cmd = JSON.parse(msg)

    DesktopBridge.runCommand(cmd).then(() => {})
  })
}

export const isSafeURL = (url) => {
  return url.startsWith('http:') || url.startsWith('https:')
}

export const isBlockHubURL = (url) => {
  return url.startsWith('http://localhost') || url.startsWith('https://blockhub.gg')
}

export const ensureLinksOpenInBrowser = (event, url) => {
  if (isSafeURL(url) && !isBlockHubURL(url)) {
    event.preventDefault()
    shell.openExternal(url)
  }
}

export const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: argv.tools ? 1920 : 1400,
    height: 1060,
    resizable: true,
    frame: false,
    icon: __dirname + 'static/Icon-512.icns',
    scrollBounce: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  mainWindow.webContents.on('will-navigate', ensureLinksOpenInBrowser)
  mainWindow.webContents.on('new-window', ensureLinksOpenInBrowser)

  DB.init()

  if (argv.dev) {
    mainWindow.webContents.loadURL('http://localhost:8000/')
  } else {
    const server = express()
    server.use('/static', express.static(path.join(__dirname, 'web/static')))
    server.get('/', function (req, res) {
      res.sendFile(path.join(__dirname + '/web/index.html'))
    })

    server.listen(9999, () => console.log('App is running on port 9999'))

    mainWindow.loadURL('http://localhost:9999/')
  }

  if (argv.tools) {
    mainWindow.webContents.openDevTools()
  }

  DesktopBridge.init(mainWindow.webContents)

  mainWindow.webContents.on('did-finish-load', () => {
    initMenu()
    mainWindow.setMenu(null)
    mainWindow.setTitle('BlockHub')

    if (config.IS_PRODUCTION) {
      mainWindow.show()
      mainWindow.focus()
    }
  })
    
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
  
  mainWindow.webContents.on('context-menu', (e, props) => {
    const { x, y } = props

    Menu.buildFromTemplate([
      {
        label: 'Inspect element',
        click() {
          mainWindow.inspectElement(x, y)
        }
      }
    ]).popup(mainWindow)
  })
}

export const init = () => {
  initProcess()
  initIPC()
  initApp()
}

if (!global.electronInitialized) {
  init()

  global.electronInitialized = true
}
