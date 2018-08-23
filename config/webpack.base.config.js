const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 
    /*入口*/
    entry: [path.join(__dirname, '../src/index.js')],
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader?cacheDirectory=true'],
        },{
            test: /\.css$/,
            use: ['style-loader','css-loader','postcss-loader'],
            
        },
        {
            test: /\.less$/,
            use:[ 'style-loader',
           	 {loader: 'css-loader',options:{importLoaders:1}}, 
             'less-loader'],
           
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[ext]?[hash:7]'
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[ext]?[hash:7]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[ext]?[hash:7]'
            }
        }
    ]
    },
    plugins:[new HtmlWebpackPlugin({
        title:'react测试',
        template:'./src/index.html',
        filename:'./index.html'
    })],
    devtool: 'inline-source-map',
    resolve:{
        alias: {
            "@":path.join(__dirname, '../src/'),
            "@IMG":path.join(__dirname, '../src/assets/img')
        }
    }

};