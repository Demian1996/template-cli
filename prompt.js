const inquirer = require('inquirer');
const { PROMPT_TYPE, projectTemplateMap, markdownTemplateMap, MODE } = require('./constant');

/**
 * @description { 't1': { value: 'template1', desc: 'description1'} } => [{ name: 'description1', value: 't1' }]
 */
const templateAdapter = (templateMap) => {
  return Object.keys(templateMap).map((k) => ({
    name: templateMap[k].desc,
    value: k,
  }));
};
const props = (key) => (obj) => obj[key];

/**
 * @description inquirer提示生成器
 */
const promptGenerator = {
  /**
   * @description 输入型 prompt生成器
   */
  inputPromptGenerator: ({ message, name, defaultValue, validate }) => ({
    type: PROMPT_TYPE.INPUT,
    message,
    name,
    validate,
    default: defaultValue,
  }),
  /**
   * @description 单选型 prompt生成器
   */
  listPromptGenerator: ({ message, name, choices }) => ({
    type: PROMPT_TYPE.LIST,
    loop: false,
    message,
    name,
    choices,
  }),
};

const prompt = {
  mode: MODE.PROJECT,
  /**
   * @description 询问当前要创建的类型
   */
  askMode: function () {
    return inquirer
      .prompt([
        promptGenerator.listPromptGenerator({
          message: '请选择想要创建的类型:',
          name: 'mode',
          choices: [
            {
              name: 'project',
              value: MODE.PROJECT,
            },
            {
              name: 'markdown file',
              value: MODE.MARKDOWN,
            },
          ],
        }),
      ])
      .then((obj) => {
        const mode = props('mode')(obj);
        this.mode = mode;
        return mode;
      });
  },
  /**
   * @description 询问当前要创建的名称
   */
  askTargetName: function () {
    switch (this.mode) {
      case MODE.MARKDOWN: {
        return inquirer
          .prompt([
            promptGenerator.inputPromptGenerator({
              message: '请输入当前文件的名称:',
              name: 'targetName',
              defaultValue: 'default_name',
            }),
          ])
          .then(props('targetName'));
      }
      case MODE.PROJECT:
      default: {
        return inquirer
          .prompt([
            promptGenerator.inputPromptGenerator({
              message: '请输入当前项目的名称:',
              name: 'targetName',
              defaultValue: 'default_name',
            }),
          ])
          .then(props('targetName'));
      }
    }
  },
  /**
   * @description 询问当前要使用的模板
   */
  askSelectWhichTemplate: function () {
    switch (this.mode) {
      case MODE.MARKDOWN: {
        return inquirer
          .prompt([
            promptGenerator.listPromptGenerator({
              message: '请选择当前要使用的模板:',
              name: 'template',
              choices: templateAdapter(markdownTemplateMap),
            }),
          ])
          .then(props('template'));
      }
      case MODE.PROJECT:
      default: {
        return inquirer
          .prompt([
            promptGenerator.listPromptGenerator({
              message: '请选择当前要使用的模板:',
              name: 'template',
              choices: templateAdapter(projectTemplateMap),
            }),
          ])
          .then(props('template'));
      }
    }
  },
};

module.exports = prompt;
