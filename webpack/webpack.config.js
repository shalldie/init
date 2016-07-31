// var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/js/app'
    },
    output: {
        path: './dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                text: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.json', '.less'],
        alias: { // 设置别名

        }
    }
};