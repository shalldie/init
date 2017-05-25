const path = require('path');

// const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.ts']
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['js', 'ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: ['babel-loader', 'ts-loader']
        }]
    }
};