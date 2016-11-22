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
                text: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
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
    },
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        'jQuery': 'jQuery'
    }
};