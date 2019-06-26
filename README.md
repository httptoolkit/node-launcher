# HTTP Toolkit (npx runner)

This package is a tiny wrapper around [HTTP Toolkit](https://httptoolkit.tech) to make it easy to run with `npx` and `npm`. HTTP Toolkit is a suite of tools for building, debugging and testing applications that use HTTP.

HTTP Toolkit is normally delivered as an Electron application, but the Electron part is actually optional, you just need to run a node cli application (the server), and to then open the UI in any modern browser. This package does that for you: it starts the server-side of HTTP Toolkit, and opens up the UI in your default browser.

This should typically work just as well as the Electron version, with less overhead, and a quicker & easier install setup if you have node installed already, but this is experimental, so do check the caveats below for some warnings.

## Getting Started

Assuming you have a recent Node.js & npm installed, you just need to run:

```bash
npx httptoolkit
```

Alternatively, you can run `npm install httptoolkit` in your project to install it there locally, and then run `httptoolkit` from any of your npm scripts to wrap the setup process with your own automation.

## Caveats

* The standard desktop build of HTTP Toolkit effectively runs in the latest Chrome (via Electron), and that's the main place it's tested. In theory it should work in any other modern browser too, so do [file an issue](https://github.com/httptoolkit/npx-httptoolkit/issues/new) if you have any problems, but be aware that that's the likely cause.

* The started server & UI will act totally independently. If you close the CLI process, the UI will keep running (but stop intercepting any new requests). If you close the UI, the server will keep running until you close it. Close both.

* Old server versions may not be supported with new releases of the UI. The latest working version of the UI will remain cached on your machine by a service worker, so if you've opened it once it should keep working forever, but you may see unusual or broken behaviour if using a locked version of the httptoolkit-server dependency of this package on a machine that doesn't have an similarly old version of the UI cached. If that happens, simply `npm update httptoolkit`.