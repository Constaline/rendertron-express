const shell = require('shelljs');
const axios = require('axios');
const COMMAND = 'rendertron';
let execOptions = { async: false };
shell.exec(COMMAND, execOptions, (code, stdout, stderr) => {
    console.log(`[${COMMAND}] Exit code:`, code);
    console.log(`[${COMMAND}] Program output:`, stdout);
    console.log(`[${COMMAND}] Program stderr:`, stderr);
});

function checkRendertronStatus() {
    axios.get(global.rendertronServiceUrl)
        .then(res => {
            console.log(`[${COMMAND}] Service Start`)
        })
        .catch(err => {
            console.error(`[${COMMAND}] Service ERR:`, err);
        })
};

const CHECK_TIME = 10000;
setTimeout(()=> {
    checkRendertronStatus();
}, CHECK_TIME);