const path = require('path')
const fse = require('fs-extra');

const ROOT_PATH = path.join(__dirname, '../../');
const NODE_MODULES_PATH = path.join(ROOT_PATH, 'node_modules/');

const SRC_PATH = path.join(__dirname, 'files/');

const DIST_PATH = path.join(NODE_MODULES_PATH, 'rendertron/');

try {
    fse.copySync(SRC_PATH, DIST_PATH)
} catch (error) {
    console.log('copy index ERR:', error)
}