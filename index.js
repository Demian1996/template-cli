#!/usr/bin/env node
const program = require('commander');
const { copyAllFiles, injectJson, mkdirSync } = require('./lib/copy');
const path = require('path');
const fse = require;

const templateMap = {
  ts: 'typescript',
};

let projectName = 'project';

/**
 * @description 生成的项目的名称
 * @param {*} name
 */
function output(name) {
  projectName = name;
  console.log('创建项目：', name);
}

/**
 * @description 生成模板
 */
function generateTemplate(template) {
  if (!templateMap[template]) {
    console.log('模板输入错误!');
    console.log('可用模板如下：', Object.keys(templateMap).join('/'));
    return;
  }

  const srcPath = path.resolve(__dirname, './templates/', templateMap[template]);
  const targetPath = path.resolve(process.cwd(), projectName);
  // 生成目录
  mkdirSync(targetPath);
  // 拷贝生成模板
  copyAllFiles(srcPath, targetPath);
  // 写入package.json
  injectJson(path.resolve(targetPath, './package.json'), { name: projectName });
}

program
  .version('1.0.0', '-v, --version')
  .option('-p, --project <projectName>', 'new Project', output)
  .option('-t, --template <templateName>', 'use template: ts', generateTemplate);

program.on('--help', function () {
  console.log(`
Examples:
  tpl-rc -p rc-demo -t ts
`);
});

program.parse(process.argv);
