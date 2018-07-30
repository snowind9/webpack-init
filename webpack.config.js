const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const chalk = require('chalk');

module.exports = {
  mode: 'development',
  entry: [
    require.resolve('./pre-loader'),

    // This is an alternative client for WebpackDevServer that shows a syntax error overlay.
    require.resolve('react-dev-utils/webpackHotDevClient'),
    './src/index.js',
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
    }),
  ],
  module: {
    rules:[
      {
        test: /\.(scss|css)$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          compact: true,
        }
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
      },
    ]
  },

  devServer: {
    host: '0.0.0.0',
    port: 9999,
  }
};
