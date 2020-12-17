const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const WriteFilePlugin = require('write-file-webpack-plugin');
const pkg = require('../package.json');

// const webpack = require('webpack');

module.exports = smp.wrap(
  merge(common, {
    entry: path.resolve(__dirname, '../src/index.tsx'),
    output: {
      filename: `${pkg.name}.js`,
      path: path.resolve(__dirname, '../dist'),
      libraryTarget: 'umd',
    },
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      hot: true,
    },
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new WriteFilePlugin()],
  })
);
