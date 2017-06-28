process.env.NODE_ENV = 'production';

const webpackConfig = require('./webpack.config');
const webpack = require('webpack');

webpack(webpackConfig, function (err, stats) {
    if (err) {
        throw err;
    }

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    console.log('build complete');
});
