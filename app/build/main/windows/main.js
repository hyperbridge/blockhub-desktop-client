"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.window = exports.ensureLinksOpenInBrowser = exports.isBlockHubURL = exports.isSafeURL = exports.initMenu = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _electron = require("electron");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const config = require('../../config');

const initMenu = () => {
  let template = null;

  if (process.platform === 'darwin') {
    const navigate = path => Windows.main.window.webContents.send('navigate', path);

    template = [{
      label: 'BlockHub',
      submenu: [{
        label: 'About BlockHub ' + _electron.app.getVersion(),
        selector: 'orderFrontStandardAboutPanel:'
      }, {
        type: 'separator'
      }, {
        label: 'Preferences...',
        accelerator: 'Command+,',

        click() {
          navigate('/config');
        }

      }, {
        type: 'separator'
      }, {
        type: 'separator'
      }, {
        label: 'Services',
        submenu: []
      }, {
        type: 'separator'
      }, {
        label: 'Hide BlockHub',
        accelerator: 'Command+H',
        selector: 'hide:'
      }, {
        label: 'Hide Others',
        accelerator: 'Command+Shift+H',
        selector: 'hideOtherApplications:'
      }, {
        label: 'Show All',
        selector: 'unhideAllApplications:'
      }, {
        type: 'separator'
      }, {
        label: 'Quit',
        accelerator: 'Command+Q',

        click() {
          _electron.app.quit();
        }

      }]
    }, {
      label: 'Edit',
      submenu: [{
        label: 'Undo',
        accelerator: 'Command+Z',
        selector: 'undo:'
      }, {
        label: 'Redo',
        accelerator: 'Shift+Command+Z',
        selector: 'redo:'
      }, {
        type: 'separator'
      }, {
        label: 'Cut',
        accelerator: 'Command+X',
        selector: 'cut:'
      }, {
        label: 'Copy',
        accelerator: 'Command+C',
        selector: 'copy:'
      }, {
        label: 'Paste',
        accelerator: 'Command+V',
        selector: 'paste:'
      }, {
        label: 'Select All',
        accelerator: 'Command+A',
        selector: 'selectAll:'
      }]
    }, {
      label: 'View',
      submenu: process.env.NODE_ENV === 'development' ? [{
        label: 'Reload',
        accelerator: 'Command+R',

        click() {
          Windows.main.window.webContents.reload();
        }

      }, {
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',

        click() {
          Windows.main.setFullScreen(!Windows.main.isFullScreen());
        }

      }, {
        label: 'Toggle Developer Tools',
        accelerator: 'Alt+Command+I',

        click() {
          Windows.main.toggleDevTools();
        }

      }] : [{
        label: 'Toggle Full Screen',
        accelerator: 'Ctrl+Command+F',

        click() {
          Windows.main.setFullScreen(!Windows.main.isFullScreen());
        }

      }]
    }, {
      label: 'Window',
      submenu: [{
        label: 'Accounts',
        accelerator: 'Command+1',

        click() {
          navigate('/accounts');
        }

      }, {
        label: 'Blocks',
        accelerator: 'Command+2',

        click() {
          navigate('/blocks');
        }

      }, {
        label: 'Transactions',
        accelerator: 'Command+3',

        click() {
          navigate('/transactions');
        }

      }, {
        label: 'Logs',
        accelerator: 'Command+4',

        click() {
          navigate('/logs');
        }

      }, {
        label: 'Settings',
        accelerator: 'Command+5',

        click() {
          navigate('/config');
        }

      }, {
        label: 'Minimize',
        accelerator: 'Command+M',
        selector: 'performMiniaturize:'
      }, {
        label: 'Close',
        accelerator: 'Command+W',
        selector: 'performClose:'
      }, {
        type: 'separator'
      }, {
        label: 'Bring All to Front',
        selector: 'arrangeInFront:'
      }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',

        click() {
          _electron.shell.openExternal('https://hyperbridge.org/blockhub');
        }

      }, {
        label: 'Documentation',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/blob/master/README.md');
        }

      }, {
        label: 'Community Discussions',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/issues');
        }

      }, {
        label: 'Search Issues',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/issues');
        }

      }]
    }];

    _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate(template));
  } else {
    template = [{
      label: '&File',
      submenu: [{
        label: '&Open',
        accelerator: 'Ctrl+O'
      }, {
        label: '&Close',
        accelerator: 'Ctrl+W',

        click() {
          Windows.main.close();
        }

      }]
    }, {
      label: '&View',
      submenu: process.env.NODE_ENV === 'development' ? [{
        label: '&Reload',
        accelerator: 'Ctrl+R',

        click() {
          Windows.main.window.webContents.reload();
        }

      }, {
        label: 'Toggle &Full Screen',
        accelerator: 'F11',

        click() {
          Windows.main.setFullScreen(!Windows.main.isFullScreen());
        }

      }, {
        label: 'Toggle &Developer Tools',
        accelerator: 'Alt+Ctrl+I',

        click() {
          Windows.main.toggleDevTools();
        }

      }] : [{
        label: 'Toggle &Full Screen',
        accelerator: 'F11',

        click() {
          Windows.main.setFullScreen(!Windows.main.isFullScreen());
        }

      }]
    }, {
      label: 'Help',
      submenu: [{
        label: 'Learn More',

        click() {
          _electron.shell.openExternal('https://hyperbridge.org/blockhub');
        }

      }, {
        label: 'Documentation',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/blob/master/README.md');
        }

      }, {
        label: 'Community Discussions',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/issues');
        }

      }, {
        label: 'Search Issues',

        click() {
          _electron.shell.openExternal('https://github.com/hyperbridge/blockhub/issues');
        }

      }]
    }];

    _electron.Menu.setApplicationMenu(_electron.Menu.buildFromTemplate(template));
  }
};

exports.initMenu = initMenu;

const isSafeURL = url => {
  return url.startsWith('http:') || url.startsWith('https:');
};

exports.isSafeURL = isSafeURL;

const isBlockHubURL = url => {
  return url.startsWith('http://localhost') || url.startsWith('https://blockhub.gg');
};

exports.isBlockHubURL = isBlockHubURL;

const ensureLinksOpenInBrowser = (event, url) => {
  if (isSafeURL(url) && !isBlockHubURL(url)) {
    event.preventDefault();

    _electron.shell.openExternal(url);
  }
};

exports.ensureLinksOpenInBrowser = ensureLinksOpenInBrowser;
let window = null;
exports.window = window;

const init = (devMode, showTools) => {
  exports.window = window = new _electron.BrowserWindow({
    width: 500,
    height: 700,
    minWidth: 1200,
    minHeight: 500,
    resizable: true,
    frame: false,
    icon: __dirname + 'static/Icon-512.icns',
    scrollBounce: true,
    webPreferences: {
      preload: _path.default.join(__dirname, '../preload.js'),
      zoomFactor: 0
    }
  });
  window.webContents.on('will-navigate', ensureLinksOpenInBrowser);
  window.webContents.on('new-window', ensureLinksOpenInBrowser);

  if (devMode) {
    window.webContents.loadURL('http://localhost:8000/');
  } else {
    const server = (0, _express.default)();
    server.use('/static', _express.default.static(_path.default.join(__dirname, '/../../../web/static')));
    server.get('/', function (req, res) {
      res.sendFile(_path.default.join(__dirname + '/../../../web/index.html'));
    });
    server.listen(9999, () => console.log('App is running on port 9999'));
    window.loadURL('http://localhost:9999/');
  }

  if (showTools) {
    window.webContents.openDevTools();
  }

  window.webContents.on('did-finish-load', () => {
    initMenu();
    window.setMenu(null);
    window.setTitle('BlockHub');

    if (config.IS_PRODUCTION) {
      window.show();
      window.focus();
    }
  }); // Emitted when the window is closed.

  window.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    exports.window = window = null;
  }); // window.once('ready-to-show', () => {
  //     window.webContents.setZoomFactor(1.01);
  // })

  window.webContents.on('context-menu', (e, props) => {
    const {
      x,
      y
    } = props;

    _electron.Menu.buildFromTemplate([{
      label: 'Inspect element',

      click() {
        window.inspectElement(x, y);
      }

    }]).popup(window);
  });
};

exports.init = init;