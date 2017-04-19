const child = require('child_process');
const os = require('os');

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const serverConfig = require('./server.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(serverConfig.port, serverConfig.domain, function (err, result) {
    if (err) {
        return console.log(err);
    }

    let key = os.platform() == 'darwin' ? 'open' : 'explorer';

    child.exec(`${key} http://${serverConfig.domain}:${serverConfig.port}/`);

});