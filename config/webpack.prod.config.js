const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const cleanWebpackPlugin = require('clean-webpack-plugin')

const mode={mode:'production'};


// const devtool={devtool:'inline-source-map'}
baseConfig.plugins.push(
    new cleanWebpackPlugin([path.resolve(__dirname,'../dist')],{root:path.resolve(__dirname,'../')})
)

const prodConfig=merge(baseConfig,mode)

module.exports = prodConfig;