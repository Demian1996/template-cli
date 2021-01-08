const { copyAllFiles, injectJson, mkdirSync, copyFile, mkfileSync } = require('./lib/copy');
const path = require('path');

const MODE = {
  PROJECT: 'project',
  MARKDOWN: 'markdown',
};

/**
 * @description 模板生成器
 */
class Generator {
  constructor() {
    /**
     * @description 当前生成的模板格式
     */
    this.mode = MODE.PROJECT;
    /**
     * @description 目标文件或目录的名称，用以组合路径
     */
    this.targetName = '';
    /**
     * @description 项目模板文件映射
     */
    this.projectTemplateMap = {
      'rc-ts': 'react-component-typescript',
      'rw-ts': 'react-web-typescript',
      'lib-ts': 'library-typescript',
    };
    /**
     * @description markdown模板文件映射
     */
    this.markdownTemplateMap = {
      'm-ds': 'daily-summary',
    };
    this.templateMap = { ...this.projectTemplateMap, ...this.markdownTemplateMap };
  }

  createProject(targetName) {
    this.mode = MODE.PROJECT;
    this.targetName = targetName;
  }

  createMarkdown(targetName) {
    this.mode = MODE.MARKDOWN;
    this.targetName = targetName;
  }

  generateTemplate(template) {
    switch (this.mode) {
      case MODE.PROJECT: {
        if (!this.projectTemplateMap[template]) {
          console.log('模板输入错误!');
          console.log('可用project模板如下：', Object.keys(this.projectTemplateMap).join('/'));
          return;
        }
        const srcPath = path.resolve(__dirname, './templates/', this.templateMap[template]);
        const targetPath = path.resolve(process.cwd(), this.targetName);
        // 生成目录
        mkdirSync(targetPath);
        // 拷贝生成模板
        copyAllFiles(srcPath, targetPath);
        // 写入package.json
        this._handlePackageJSON({ targetPath, targetName: this.targetName, template });
        break;
      }
      case MODE.MARKDOWN: {
        if (!this.markdownTemplateMap[template]) {
          console.log('模板输入错误!');
          console.log('可用markdown模板如下：', Object.keys(this.markdownTemplateMap).join('/'));
          return;
        }
        const srcPath = path.resolve(
          __dirname,
          './templates/markdowns',
          this.templateMap[template] + '.md'
        );
        const targetPath = path.resolve(process.cwd(), this.targetName + '.md');
        // 生成文件
        mkfileSync(targetPath);
        // 拷贝内容
        copyFile(srcPath, targetPath);
        console.log('生成文件：', targetPath);
        break;
      }
      default: {
        console.log('生成错误，请检查当前选择的模式');
      }
    }
  }

  /**
   * @description 处理生成项目模板时的package.json文件
   */
  _handlePackageJSON({ targetPath, targetName, template }) {
    switch (template) {
      case 'rw-ts': {
        return injectJson(path.resolve(targetPath, './package.json'), { name: targetName });
      }
      case 'rc-ts': {
        return injectJson(path.resolve(targetPath, './package.json'), {
          name: targetName,
          main: `dist/index.js`,
          module: `dist/index.js`,
          types: 'types/index.d.ts',
        });
      }
      case 'lib-ts': {
        return injectJson(path.resolve(targetPath, './package.json'), {
          name: targetName,
          main: `lib/${targetName}.js`,
          unpkg: `dist/${targetName}.js`,
          module: `esm/${targetName}.js`,
          types: 'types/index.d.ts',
        });
      }
    }
  }
}

module.exports = Generator;
