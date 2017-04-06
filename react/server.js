const child = require('child_process');
const os = require('os');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

let domain = '127.0.0.1';
let port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, domain, function (err, result) {
    if (err) {
        return console.log(err);
    }

    let key = os.platform() == 'darwin' ? 'open' : 'explorer';

    child.exec(`${key} http://${domain}:${port}/`);

});