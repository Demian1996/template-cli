/*
 * @Author: wangdengzhi
 * @Date: 2020-12-10 10:18:46
 * @Last Modified by: wangdengzhi
 * @Last Modified time: 2020-12-17 14:45:23
 * @Description: 待开发的React组件
 */
import React from 'react';
import './index.less';

/**
 * @description 测试类型导出
 */
export interface Props {
  name: string;
  age: number;
}

function View({ name, age }: Props) {
  return (
    <div styleName="container">
      <h1>Hello, world! {name} {age}</h1>
    </div>
  );
}

export default View;
