import path from 'path'
import express from 'express'
import { app, BrowserWindow, Menu, ipcMain, shell, webFrame } from 'electron'

const config = require('../../config')


export const initMenu = () => {
    let template = null

    if (process.platform === 'darwin') {
        const navigate = (path) => Windows.main.window.webContents.send('navigate', path)
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
                                Windows.main.window.webContents.reload()
                            }
                        },
                        {
                            label: 'Toggle Full Screen',
                            accelerator: 'Ctrl+Command+F',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        },
                        {
                            label: 'Toggle Developer Tools',
                            accelerator: 'Alt+Command+I',
                            click() {
                                Windows.main.toggleDevTools()
                            }
                        }
                    ]
                    : [
                        {
                            label: 'Toggle Full Screen',
                            accelerator: 'Ctrl+Command+F',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
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
                            Windows.main.close()
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
                                Windows.main.window.webContents.reload()
                            }
                        },
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
                            }
                        },
                        {
                            label: 'Toggle &Developer Tools',
                            accelerator: 'Alt+Ctrl+I',
                            click() {
                                Windows.main.toggleDevTools()
                            }
                        }
                    ]
                    : [
                        {
                            label: 'Toggle &Full Screen',
                            accelerator: 'F11',
                            click() {
                                Windows.main.setFullScreen(!Windows.main.isFullScreen())
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

export let window = null

export const init = (devMode, showTools) => {
    window = new BrowserWindow({
        width: 500,
        height: 700,
        minWidth: 1200,
        minHeight: 500,
        resizable: true,
        frame: false,
        icon: __dirname + 'static/Icon-512.icns',
        scrollBounce: true,
        webPreferences: {
            preload: path.join(__dirname, '../preload.js'),
            zoomFactor: 0
        }
    })

    window.webContents.on('will-navigate', ensureLinksOpenInBrowser)
    window.webContents.on('new-window', ensureLinksOpenInBrowser)

    if (devMode) {
        window.webContents.loadURL('http://localhost:8000/')
    } else {
        const server = express()
        server.use('/static', express.static(path.join(__dirname, 'web/static')))
        server.get('/', function (req, res) {
            res.sendFile(path.join(__dirname + '/web/index.html'))
        })

        server.listen(9999, () => console.log('App is running on port 9999'))

        window.loadURL('http://localhost:9999/')
    }

    if (showTools) {
        window.webContents.openDevTools()
    }

    window.webContents.on('did-finish-load', () => {
        initMenu()
        window.setMenu(null)
        window.setTitle('BlockHub')

        if (config.IS_PRODUCTION) {
            window.show()
            window.focus()
        }
    })

    // Emitted when the window is closed.
    window.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })
    // window.once('ready-to-show', () => {
    //     window.webContents.setZoomFactor(1.01);
    // })

    window.webContents.on('context-menu', (e, props) => {
        const { x, y } = props

        Menu.buildFromTemplate([
            {
                label: 'Inspect element',
                click() {
                    window.inspectElement(x, y)
                }
            }
        ]).popup(window)
    })
}