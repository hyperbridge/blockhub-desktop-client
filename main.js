// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const express = require("express");
const path = require("path");


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  const server = express();
  server.use("/static", express.static(path.join(__dirname, "web/static")));
  server.get("/", function(req,res) {
    res.sendFile(path.join(__dirname + "/web/index.html"));
  })
  
  server.listen(9999, () => console.log("App is running on port 9999"));

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height:800, frame:false, icon: __dirname + "web/static/img/Icon-512.icns"})
  
  // and load the index.html of the app.
  //mainWindow.loadFile('index.html')
  //mainWindow.loadURL("http://localhost:8000/index.html#/store");
  mainWindow.loadURL("http://localhost:9999");
  //mainWindow.loadFile(path.join(__dirname + "/web/index.html"));


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

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

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
