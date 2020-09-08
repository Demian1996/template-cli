# 脚手架

个人用，类似 create-react-app，开发小项目和三方包时便于复用项目模板。不用 cra 是因为想要自定义 eslint 和 jest，而且不需要每次都要装 less 之类的东西。

目前仅提供 ts 模板（ts 就是王道~）

集成：

- antd
- react-css-modules
- less

## 使用

### 一、安装本地命令

```shell
git clone git@github.com:Demian1996/template-cli.git
cd template-cli/
npm install // 安装commander等依赖
npm link // 将tpl作为全局命令

// 检测
tpl -v // 若此时显示版本号，则安装成功
```

### 二、命令使用和参数介绍

命令安装成功后，可在任意目录下生成模板。
例如生成项目 react-demo，使用 ts 模板：

```shell
tpl -p react-demo -t ts
```

运行成功后会在命令运行目录下生成文件夹 react-demo。

目前仅有两个参数，后续增加参数介绍如下：

-p --project 项目名，会将该字段手动填充到模板文件的 package.json 中

```shell
-p react-demo
```

-t --template 模板名，用简称表示对应 templates 下各模板文件的文件夹名

```shell
-t ts
```

### 三、启动模板项目

```shell
cd react-demo // 进入到已生成的模板项目中
yarn install // 安装模板依赖
yarn dev // 运行webpack-dev-server
```

最终显示如下:

![demo](https://store-g1.seewo.com/easiclass-public/646bd4cddc8344c5901ab10b29151f32)
