const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const mode={mode:'development'};

const devServer={
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        historyApiFallback: true,
    },    
}

const devtool={devtool:'inline-source-map'}

const devConfig=merge(baseConfig,devServer,devtool.mode)

module.exports = devConfig;