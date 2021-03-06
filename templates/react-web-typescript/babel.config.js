module.exports = {
  presets: [
    [
      '@babel/preset-env',
      // 待配置
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    // css-modules
    [
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        autoResolveMultipleImports: true,
        filetypes: {
          '.less': { syntax: 'postcss-less' },
        },
      },
    ],
    // 按需引入antd
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
  ],
};
