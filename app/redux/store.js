import { createStore, applyMiddleware,compose } from 'redux';
import middleware from './middleware';
import { install } from 'redux-loop-symbol-ponyfill';
import reducer from './reducer'


// 多个增强器函数
const enhancers = [
  applyMiddleware( ...middleware ),
  install()
]

// 顺序执行
const enhancer = compose(...enhancers);

const store = createStore( reducer, null, enhancer );

export default store;