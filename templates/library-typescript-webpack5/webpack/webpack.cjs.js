const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const pkg = require('../package.json');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    output: {
      filename: `${pkg.name}.js`,
      path: path.resolve(__dirname, '../lib'),
      library: { type: 'commonjs2' },
    },
    devtool: false,
  })
);
