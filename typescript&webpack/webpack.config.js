const path = require('path');

// const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/app.ts']
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'ts-loader']
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    }
};