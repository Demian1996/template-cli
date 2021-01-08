const fse = require('fs-extra');
const path = require('path');
const fs = require('fs');

/**
 * @description 批量拷贝文件
 * @param {string} srcPath
 * @param {string} targetPath
 */
const copyAllFiles = (srcPath, targetPath) => {
  const files = fse.readdirSync(srcPath);
  if (files.length) {
    files.forEach((file) => {
      fileSrc = path.resolve(srcPath, file);
      fileTarget = path.resolve(targetPath, file);
      if (fs.lstatSync(fileSrc).isDirectory()) {
        fse.copySync(fileSrc, fileTarget);
        //  递归拷贝下一级目录
        copyAllFiles(fileSrc, fileTarget);
      } else {
        fse.copySync(fileSrc, fileTarget);
      }
    });
  }
};

/**
 * @description 向JSON对象中注入数据
 * @param {string} srcFilePath
 * @param {any} obj
 */
const injectJson = (srcFilePath, obj) => {
  fse.readJSON(srcFilePath, (err, data) => {
    const newData = { ...data, ...obj };
    fse.outputJson(srcFilePath, newData, { spaces: 2 });
  });
};

module.exports = {
  copyAllFiles,
  copyFile: fse.copySync,
  injectJson,
  mkdirSync: fse.mkdirSync,
  mkfileSync: fse.createFileSync,
};
