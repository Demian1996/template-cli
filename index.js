#!/usr/bin/env node
const program = require('commander');
const { MODE } = require('./constant');
const Generator = require('./Generator');
const prompt = require('./prompt');

const generator = new Generator();

program.version('1.1.0', '-v, --version');

program
  .command('create')
  .option('-m, --markdown <markdownName>', 'new Markdown', generator.createMarkdown.bind(generator))
  .option('-p, --project <projectName>', 'new Project', generator.createProject.bind(generator))
  .option('-t, --template <templateName>', 'use template: rw-ts', generator.generateTemplate.bind(generator));

program
  .command('cli')
  .description('初始化项目')
  .action(async () => {
    try {
      const mode = await prompt.askMode();
      const createFileMethod =
        mode === MODE.PROJECT ? generator.createProject.bind(generator) : generator.createMarkdown.bind(generator);
      console.log(mode);
      const targetName = await prompt.askTargetName();
      createFileMethod(targetName);
      console.log(targetName);
      const template = await prompt.askSelectWhichTemplate();
      console.log(template);
      generator.generateTemplate(template);
    } catch (error) {
      console.log('执行出错', error.message);
    }
  });

program.on('--help', function () {
  console.log(`
Use Cli:
  tpl cli
Code-Project-Example:
  React Web Example:
    tpl -p rw-demo -t rw-ts
  React Web Example:
    tpl -p rw-demo -t rw-ts-w5
  React Component Example:
    tpl -p rc-demo -t rc-ts
  Library Example:
    tpl -p lib-demo -t lib-ts
  Library Example:
    tpl -p lib-demo -t lib-ts-w5
Markdown-Example:
  Daily Summary Example:
    tpl -m ds-demo -t m-ds
  Daily Summary Example (Table Version):
    tpl -m ds-demo -t m-dst
  Weekly Summary Example:
    tpl -m ws-demo -t m-ws
  Yearly Summary Example:
    tpl -m ys-demo -t m-ys
  Reading Summary Example:
    tpl -m rs-demo -t m-rs
  Source Code Reading Summary Example:
    tpl -m scrs-demo -t m-scrs
`);
});

program.parse(process.argv);
