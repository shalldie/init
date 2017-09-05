const path = require('path');
const webpack = require('webpack');

const serverConfig = require('./server.config');

var entry = {
    app: [path.join(__dirname, '../src/app')]
};
if (process.env.NODE_ENV === 'dev') {
    entry.app.push(`webpack-dev-server/client?http://${serverConfig.domain}:${serverConfig.port}`);
}

module.exports = {
    devtool: false,
    //页面入口文件配置
    entry: entry,
    //入口文件输出配置
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    //插件项
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('common.js'),
        // new webpack.optimize.UglifyJsPlugin({
        //     minimize: true,
        //     sourceMap: true,
        //     beautify: false,
        //     output: {
        //         comments: false
        //     },
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true
        //     }
        // }),
        // new webpack.HotModuleReplacementPlugin(),  // HMR
        // noErrorsPlugin,
        new webpack.NoEmitOnErrorsPlugin(),
        // new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     },
        //     '__DEV__': false
        // }),
        new webpack.optimize.AggressiveMergingPlugin()//合并块
    ],
    module: {
        //加载器配置
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg)$/,
            use: ['url-loader']
        }]
    },
    //其它解决方案配置
    resolve: {
        // root: path.join(__dirname, 'src'),
        extensions: ['.js', '.jsx', '.json', '.less'],
        alias: { // 设置别名

        }
    },
    devServer: {
        contentBase: __dirname,
        compress: true,
        port: 9000
    },
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        // 'jQuery': 'jQuery'
    }
};