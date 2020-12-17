const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const pkg = require('../package.json');
// const webpack = require('webpack');

module.exports = merge(common, {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist'),
    libraryTarget: 'umd',
  },
  externals: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  devtool: false,
  mode: 'production',
  plugins: [
    // 指定构建变量
    // new webpack.DefinePlugin({}),
  ],
});
