import { Map } from 'immutable';

const initState = Map( {
  // test variable
  test : '首页',
  nowCount: 999,
  activeTab: 'all'
} );

// 设置loading状态

const NOW_COUNT_ADD = 'home/NOW_COUNT_ADD';
const NOW_ACTIVE_TAB = 'home/NOW_ACTIVE_TAB';
export default function HomeReducer( state = initState, action = {} ) {
  switch ( action.type ) {
    case NOW_COUNT_ADD:
      return state.set('nowCount', action.payload)
      break;
    case NOW_ACTIVE_TAB:
      return state.set('activeTab', action.payload)
      break;
    default:
      return state
  }
}

export const setNowCount = (count) => {
  return (dispatch) => dispatch({
    type: NOW_COUNT_ADD,
    payload: count
  });
};

export const changeTab = (tab) => {
  return (dispatch) => dispatch({
    type: NOW_ACTIVE_TAB,
    payload: tab
  });
}