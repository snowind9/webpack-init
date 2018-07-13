var webpack = require('webpack');
var config = require('./webpack.config');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new UglifyJsPlugin()
]);

config.devtool = undefined;

module.exports = config;
