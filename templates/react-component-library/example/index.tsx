import React from 'react';
import ReactDOM from 'react-dom';
import View from '../dist/index.js';

function App() {
  return <View name="everyone" age={18}/>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// 模块热更新
if (module.hot) {
  module.hot.accept();
}
