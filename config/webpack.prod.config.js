const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const mode={mode:'production'};


// const devtool={devtool:'inline-source-map'}

const prodConfig=merge(baseConfig,mode)

module.exports = prodConfig;