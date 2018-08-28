const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Ex = require('extract-text-webpack-plugin')
const extractCSS = new Ex('css/[name]-one.css');
const extractLESS = new Ex('css/[name]-two.css');
module.exports = {
 
    /*入口*/
    entry: {
        app:path.join(__dirname, '../src/index.js'),
        'react-dom':'react-dom',
        react:'react',
        antd:'antd',
        redux:'redux',
        'react-redux':'react-redux'
        },
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'js/[name].min.js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            use: ['babel-loader?cacheDirectory=true'],
        },{
            test: /\.css$/,
            use: extractCSS.extract({
                fallback:'style-loader',
                use:['css-loader','postcss-loader']
            })            
        },
        {
            test: /\.less$/,
            use:extractLESS.extract({
                fallback:'style-loader',
                use:[{loader: 'css-loader',options:{importLoaders:1}},'less-loader']
            })
           
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
    optimization:{
        namedChunks:true,
        splitChunks:{
            maxSize:500000,
            chunks: "initial",           
        }
    },
    plugins:[new HtmlWebpackPlugin({
        title:'react测试',
        template:'./src/index.html',
        filename:'./index.html'
    }),
    extractCSS,extractLESS
    ],
    resolve:{
        alias: {
            "@":path.join(__dirname, '../src/'),
            "@IMG":path.join(__dirname, '../src/assets/img'),
            actions: path.join(__dirname, '../src/redux/actions'),
            reducers: path.join(__dirname, '../src/redux/reducers'),
        }
    }

};