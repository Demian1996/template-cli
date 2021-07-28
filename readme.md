# 脚手架

简单的模板生成器，目前支持 project 模板和 markdown 模板两类

目前提供模板如下：

- rw-ts（react-web-typescript）
  特性：
  - 集成 antd、react-css-modules、less、typescript、babel
  - 使用 webpack4 打包
- rw-ts-w5（react-web-typescript）
  特性：
  - 同上
  - 使用 webpack5 打包
- rc-ts (react-component-typescript)
  特性：
  - 集成 antd、react-css-modules、less、typescript、babel
  - 使用 webpack 打包，支持通过运行 example 预览组件最终效果
- lib-ts（library-typescript）
  特性：
  - 支持 esm、cjs、umd 等形式
  - 集成 typescript、babel
  - 使用 rollup 打包
- markdowns: markdown 模板

## 一、Project 使用（以开发 react 组件为例）

### 1、安装本地命令

```shell
git clone https://github.com/Demian1996/template-cli.git
cd template-cli/
npm install // 安装commander等依赖
npm link // 将tpl作为全局命令

// 检测
tpl -v // 若此时显示版本号，则安装成功
```

### 2、命令使用和参数介绍

命令：

```shell
tpl cli
tpl create
```

#### cli 命令

该命令通过调用 inquirer 实现可交互命令行，如下所示:

![1](https://store-g1.seewo.com/easiclass-public/e13b470c97494857a67777f1ce77df60)

#### create 命令

使用该命令，可以手动指定当前要创建的项目和模板。

例如生成项目 react-web-demo，使用 rw-ts 模板：

```shell
tpl create -p react-demo -t rw-ts
```

运行成功后会在命令运行目录下生成文件夹 react-demo。

目前仅有两个参数，详细描述如下：

-p --project 项目名，会将该字段手动填充到模板文件的 package.json 中

```shell
-p react-demo
```

-t --template 模板名，用简称表示对应 templates 下各模板文件的文件夹名

```shell
-t rw-ts
```

### 3、启动模板项目

```shell
cd react-demo // 进入到已生成的模板项目中
yarn install // 安装模板依赖
yarn dev // 运行webpack-dev-server
```

最终显示如下:

![demo](https://store-g1.seewo.com/easiclass-public/646bd4cddc8344c5901ab10b29151f32)

## 二、Markdown

### cli 命令

![2](https://store-g1.seewo.com/easiclass-public/7e03cb50d8494098b23817e3887724a3)

### create 命令

生成每日工作计划模板

```shell
tpl create -m 每日工作计划 -t m-ds
```
