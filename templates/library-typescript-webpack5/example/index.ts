import sayHi from '../src/index';

sayHi();

if (module.hot) {
  module.hot.accept();
}