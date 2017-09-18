import { Map } from 'immutable';

const initState = Map( {
  // test variable
  test : '首页',
  nowCount: 999
} );

// 设置loading状态

const NOW_COUNT_ADD = 'home/NOW_COUNT_ADD';
export default function HomeReducer( state = initState, action = {} ) {
  switch ( action.type ) {
    case NOW_COUNT_ADD:
        return state.set('nowCount', action.payload)
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