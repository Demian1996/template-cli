const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: false,
  mode: 'production',
  plugins: [
    // 指定构建变量
    // new webpack.DefinePlugin({}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['app', 'common'],
    }),
  ],
});
