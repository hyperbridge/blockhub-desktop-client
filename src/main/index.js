import * as DesktopBridge from '../framework/bridge'

const { app, BrowserWindow, ipcMain } = require('electron')
const express = require('express')
const path = require('path')

let argv = require('minimist')(process.argv.slice(2))

const powerSaveBlocker = require('electron').powerSaveBlocker
powerSaveBlocker.start('prevent-app-suspension')

app.commandLine.appendSwitch('page-visibility')
app.commandLine.appendSwitch("disable-renderer-backgrounding")
app.commandLine.appendSwitch("disable-background-timer-throttling")

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null

function createWindow () {
  mainWindow = new BrowserWindow({
    width: argv.tools ? 1920 : 1400,
    height: 1000,
    resizable: true,
    frame: false,
    icon: __dirname + "static/Icon-512.icns",
    scrollBounce: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  ipcMain.on('ping', (event, msg) => {
    console.log('Ping from web', msg) // msg from web page
    mainWindow.webContents.send('pong', 'ok') // send to web page
  })

  ipcMain.on('heartbeat', (event, msg) => {
    console.log('Heartbeat from web', msg) // msg from web page
  })

  ipcMain.on('init', (event, msg) => {
    console.log('Init from web', msg) // msg from web page

    if (msg == '1') {

      setInterval(() => {
        mainWindow.webContents.send('heartbeat', 1) // send to web page
      }, 2000)
    } else {
      console.error("Error initializing web", msg)
    }
  })

  ipcMain.on('command', (event, msg) => {
    console.log('Command from web', msg) // msg from web page
    
    const cmd = JSON.parse(msg)

    DesktopBridge.runCommand(cmd).then(() => {

    })

    // const response = {
    //   key: ''
    // }

    //mainWindow.webContents.send('command', JSON.stringify(response)) // send to web page
  })

  DesktopBridge.init(mainWindow.webContents)

  if (argv.dev) {
    mainWindow.webContents.loadURL("http://localhost:8000/")
  } else {
    const server = express()
    server.use("/static", express.static(path.join(__dirname, "web/static")))
    server.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + "/web/index.html"))
    })

    server.listen(9999, () => console.log("App is running on port 9999"))

    mainWindow.loadURL("http://localhost:9999/")
  }

  if (argv.tools) {
    mainWindow.webContents.openDevTools()
  }
  
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  app.quit()
})

// Mac only
app.on('open-url', (event, url) => {

})


function installDarwin() {
  const electron = require('electron')
  const app = electron.app

  // On Mac, only protocols that are listed in `Info.plist` can be set as the
  // default handler at runtime.
  app.setAsDefaultProtocolClient('blockhub')

  // File handlers are defined in `Info.plist`.
}

function uninstallDarwin() { }

installDarwin()

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
