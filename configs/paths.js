const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    // files
    mainEntry: resolveApp('src/index.js'),
    appTemplate: resolveApp('configs/index.html'), // TODO: move index, favicon.icon to another directory
    appFavicon: resolveApp('configs/favicon.ico'),
    packageJSON: resolveApp('package.json'),
    dotenv: resolveApp('.env'),

    manifestJSON: 'manifest.json',
    vendorEntryName: 'vendor',
    vendorHashFileName: 'vendor_hash',

    // directories
    appRoot: resolveApp(''),
    appSrc: resolveApp('app'),
    appBuild: resolveApp('build'),
    appCache: resolveApp('.cache'),
    appPublicPath: '/',

    WEBPACK_CONFIG_VENDOR: resolveApp('configs/webpack.vendor'),
    WEBPACK_CONFIG_DEV: resolveApp('configs/webpack.dev'),
    WEBPACK_CONFIG_PROD: resolveApp('configs/webpack.prod'),

    host: 'localhost',
    port: '3000',
};
