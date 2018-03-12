import { BrowserWindow, ipcMain, app } from 'electron'


app.on('ready', () => {
    ipcMain.on('blockhub:invokeAction', (_, data) => {
        console.log(data)
        //event.sender.send('actionReply', result)
    })

    app.commandLine.appendSwitch('disable-web-security')

    const win = new BrowserWindow({
        titleBarStyle: 'hidden',
        frame: false,
        width: 1024,
        height: 768,
        x: 0,
        y: 0,
        backgroundColor: '#000',
        webPreferences: {
            nodeIntegration: false,
            webSecurity: false
        }
        // "node-integration": "iframe", // and this line
        // "web-preferences": {
        //     "web-security": false
        // }
    })

    const onHeadersReceived = (d, c) => {
        if (d.responseHeaders['x-frame-options']) {
            delete d.responseHeaders['x-frame-options']
        }

        c({ cancel: false, responseHeaders: d.responseHeaders })
    }

    win.webContents.session.webRequest.onHeadersReceived({ urls: [] }, onHeadersReceived)

    win.loadURL('http://localhost:3000/')
})