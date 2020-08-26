import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'antd';
import './index.less';

function App() {
  return (
    <div styleName="container">
      <h1>Hello world!</h1>
      <Button
        onClick={() => {
          window.open('https://github.com/SugarTurboS');
        }}
      >
        开启财富密码
      </Button>
    </div>
  );
}

// 模块热更新
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(App, document.getElementById('root'));
