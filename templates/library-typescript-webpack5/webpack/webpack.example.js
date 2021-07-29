const { merge } = require('webpack-merge');const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    entry: {
     app: path.resolve(__dirname, '../example/index.ts'),
    },
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../example/dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, '../example/dist'),
      port: 9002,
      hot: true,
      // 开启多机访问
      // host: '0.0.0.0',
    },
    plugins: [
      // 指定构建变量
      // new webpack.DefinePlugin({}),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../example/index.html'),
        filename: path.resolve(__dirname, '../example/dist/index.html'),
        chunks: ['app', 'common'],
      }),
    ],
  })
);