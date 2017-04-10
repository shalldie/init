const path = require('path');
const webpack = require('webpack');

//公共部分js
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//压缩
const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
    sourceMap: false
});
//编译不报错
// const noErrorsPlugin = new webpack.NoErrorsPlugin();
const noEmitOnErrorsPlugin = new webpack.NoEmitOnErrorsPlugin();
//HMR
const hmr = new webpack.HotModuleReplacementPlugin();

module.exports = {
    //页面入口文件配置
    entry: {
        // '': 'webpack/hot/only-dev-server',
        app: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './src/app'
        ]
    },
    //入口文件输出配置
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    //插件项
    plugins: [
        // commonsPlugin,
        // uglifyPlugin,
        hmr,
        // noErrorsPlugin,
        noEmitOnErrorsPlugin,
        new webpack.DefinePlugin({ // <-- 减少 React 大小的关键
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // new webpack.optimize.DedupePlugin(), //删除类似的重复代码
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
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM',
        'jQuery': 'jQuery'
    }
};