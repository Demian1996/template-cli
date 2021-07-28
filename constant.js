/**
 * @description 当前支持的模式
 */
const MODE = {
  PROJECT: 'project',
  MARKDOWN: 'markdown',
};

/**
 * @description project模式支持的模板映射
 */
const projectTemplateMap = {
  'rc-ts': { value: 'react-component-typescript', desc: 'react组件模板-ts' },
  'rw-ts': { value: 'react-web-typescript', desc: 'web项目模板-react、ts' },
  'rw-ts-w5': { value: 'react-web-typescript-webpack5', desc: 'web项目模板-react、ts、webpack5' },
  'lib-ts': { value: 'library-typescript', desc: '工具库模板-rollup、ts' },
};

/**
 * @description template模式支持的模板映射
 */
const markdownTemplateMap = {
  'm-ds': { value: 'daily-summary', desc: '日总模板' },
  'm-dst': { value: 'daily-summary-table', desc: '日总模板表格版' },
  'm-ws': { value: 'weekly-summary', desc: '周总模板' },
  'm-ys': { value: 'yearly-summary', desc: '年总模板' },
  'm-rs': { value: 'reading-summary', desc: '阅读笔记模板' },
  'm-scrs': { value: 'source-code-reading-summary', desc: '源码阅读模板' },
};

/**
 * @description 当前使用的prompt类型
 */
const PROMPT_TYPE = {
  INPUT: 'input',
  LIST: 'list',
};

module.exports = {
  MODE,
  markdownTemplateMap,
  projectTemplateMap,
  PROMPT_TYPE,
};
