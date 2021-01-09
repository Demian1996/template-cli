#!/usr/bin/env node
const program = require('commander');
const Generator = require('./Generator');

const generator = new Generator();

program
  .version('1.0.0', '-v, --version')
  .option('-m, --markdown <markdownName>', 'new Markdown', generator.createMarkdown.bind(generator))
  .option('-p, --project <projectName>', 'new Project', generator.createProject.bind(generator))
  .option(
    '-t, --template <templateName>',
    'use template: rw-ts',
    generator.generateTemplate.bind(generator)
  );

program.on('--help', function () {
  console.log(`
Code-Project-Example:
  React Web Example:
    tpl -p rw-demo -t rw-ts
  React Component Example:
    tpl -p rc-demo -t rc-ts
  Library Example:
    tpl -p lib-demo -t lib-ts
Markdown-Example:
  Daily Summary Example:
    tpl -m ds-demo -t m-ds
  Weekly Summary Example:
    tpl -m ws-demo -t m-ws
  Yearly Summary Example:
    tpl -m ys-demo -t m-ys
  Reading Summary Example:
    tpl -m rs-demo -t m-rs
`);
});

program.parse(process.argv);
