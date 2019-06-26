#!/usr/bin/env node
const opn = require('opn');
const httpToolkitServer = require('httptoolkit-server');

httpToolkitServer.runHTK({});

setTimeout(() => {
    opn('https://app.httptoolkit.tech');
    console.log('HTTP Toolkit is now loading in your browser');
}, 500);