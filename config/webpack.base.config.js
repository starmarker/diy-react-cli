const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
 
    /*入口*/
    entry: ['react-hot-loader/patch',path.join(__dirname, '../src/index.js')],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader','postcss-loader'],
            
        },
        {
            test: /\.less$/,
            use:[ 'style-loader',
           	 {loader: 'css-loader',options:{importLoaders:1}}, 
             'less-loader'],
           
        }]
    },
    plugins:[new HtmlWebpackPlugin({
        title:'react测试',
        template:'./src/index.html',
        filename:'./dist/index.html'
    })],
    devtool: 'inline-source-map',
    resolve:{
        alias: {
            "@":path.join(__dirname, '../src/')
        }
    }

};