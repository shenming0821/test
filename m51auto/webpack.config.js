/**
 * 运行webpack
 * $ webpack --display-error-details
 * $ webpack --config XXX.js   //使用另一份配置文件（比如webpack.config2.js）来打包
 * $ webpack --watch   //监听变动并自动打包
 * $ webpack -p    //压缩混淆脚本，这个非常非常重要！
 * $ webpack -d    //生成map映射文件，告知哪些模块被最终打包到哪里了
 */


var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js',
        filename: '[name].js'
    },
    //将jquery设置全局变量
    externals: {
        jquery: 'window.$'
    },
    module: {
        //加载器配置
        //将css独立出来：extract-text-webpack-plugin
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test: /\.scss?$/,
                exclude:/node_modules/,
                //sass编译成功但页面没效果是因为没有用style-loader插入到页面
                loader: "style-loader!css-loader!sass-loader"
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};