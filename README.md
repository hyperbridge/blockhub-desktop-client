<div align="center">
  <br>

  <a href="https://hyperbridge.org/"><img src="https://hyperbridge.org/img/blockhub-logotype-color.svg" width="400" alt="logo"></a>

  <br>
  <br>

  [![Gitter chat](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg)](https://gitter.im/Hyperbridge/Lobby) [![license](https://img.shields.io/hexpm/l/plug.svg)](https://github.com/hyperbridge/blockhub-web-client/blob/master/LICENSE.md)

  <h1><code>Desktop Client</code> for BlockHub</h1>
</div>

<br>

This is the desktop client for BlockHub, built with Electron.

## Quick Links

- [Site](http://blockhub.gg/)
- 📺 [Demo](http://beta.blockhub.gg/)
- 📖 [Docs](http://docs.hyperbridge.org/blockhub)
- [EIPs](https://github.com/hyperbridge/EIPs)
- [Web Client](https://github.com/hyperbridge/blockhub-web-client)
- [Node Operator](https://github.com/hyperbridge/blockhub-node-operator)
- [Token](https://github.com/hyperbridge/token)
- [Funding Protocol](https://github.com/hyperbridge/funding-protocol)
- [Marketplace Protocol](https://github.com/hyperbridge/marketplace-protocol)


## Getting Started

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](https://electronjs.org/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `src/main/index.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](https://electronjs.org/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

Install Node Package Manager (NVM): 

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

Install Node 8.11.1: 

```bash
nvm install 8.11.1
```

If you get `nvm: command not found`, simply close your current terminal, open a new terminal, and try again. Please see the [NVM readme](https://github.com/creationix/nvm) if you have any issues.

```bash
# Clone this repository
git clone https://github.com/hyperbridge/blockhub-desktop-client
# This are dev dependencies (linked for ease of development)
git clone git@github.com:hyperbridge/token.git
git clone git@github.com:hyperbridge/marketplace-protocol.git
git clone git@github.com:hyperbridge/funding-protocol.git
# Go into them and npm install
cd token && npm install && cd ..
cd marketplace-protocol && npm install && cd ..
cd funding-protocol && npm install && cd ..
# Go into the main repo
cd blockhub-desktop-client
# Link the deps
npm link ../token ../marketplace-protocol ../funding-protocol
# Install deps
npm install
# Run the app in electron
npm run dev
# Create the desktop app
npm run package
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[Apache License 2.0](LICENSE.md)

## Problems?

Discuss Node Operator on our Gitter:
https://gitter.im/Hyperbridge/Lobby

Please post any bugs as Github issues.