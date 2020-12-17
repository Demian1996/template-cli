# React 组件模板

简介：
该模板主要是用于开发 React 组件。dev 环境下运行 dev-server，展示 example 目录下的网页，装载 src 中开发的 react 组件。prod 环境下，只打包 src 目录，输出最终的 react 组件

## 目录说明

```shell
template-rc-demo
├─.gitignore
├─babel.config.js // babel配置
├─global.d.ts // 全局类型文件
├─package.json
├─postcss.config.js // postcss配置
├─readme.md
├─tsconfig.json // ts配置
├─webpack
| ├─webpack.common.js // webpack公共配置
| ├─webpack.dev.js // 开发环境配置，编译src目录
| ├─webpack.prod.js // 生产环境配置，编译src目录
| ├─webpack.server.js // dev-server运行example目录，用于预览最终的组件
├─src // 待开发的组件源代码
| ├─index.less
| └index.tsx
├─example // 预览组件
| └index.tsx
```

## 命令说明

安装

```shell
yarn install
```

开发

```shell
yarn dev
```

生产打包

```shell
yarn build
```

预览效果

```shell
yarn example
```
