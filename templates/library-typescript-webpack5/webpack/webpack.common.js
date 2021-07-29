const path = require('path');
const process = require('process');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: { clean: true },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  mode: process.env.NODE_ENV || 'development',
};
