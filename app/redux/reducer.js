import { loop, combineReducers } from 'redux-loop-symbol-ponyfill';
import { Map, fromJS } from 'immutable';

import NavigatorReducer from '../navigator/NavigatorState';
import HomeReducer from '../view/home/state';
import InfoReducer from '../view/info/state';
import DetailReducer from '../view/home/detail/state';
import LoginReducer from '../view/info/login/state';
import MyInfoReducer from '../view/info/myInfo/state';

const reducers = {
  navigatorState: NavigatorReducer,
  homeState: HomeReducer,
  infoState: InfoReducer,
  detailState: DetailReducer,
  loginState: LoginReducer,
  myInfoState: MyInfoReducer,
};

const immutableStateContainer = Map();
const getImmutable = (child, key) => child ? child.get(key) : void 0;
const setImmutable = (child, key, value) => child.set(key, value);

const namespacedReducer = combineReducers(
  reducers,
  immutableStateContainer,
  getImmutable,
  setImmutable
);

export default function mainReducer(state, action) {
  const [nextState, effects] = namespacedReducer(state || void 0, action);
  return loop(fromJS(nextState), effects);
}