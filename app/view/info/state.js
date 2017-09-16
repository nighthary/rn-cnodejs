import { Map } from 'immutable';

const initState = Map( {
  // test variable
  test : '个人中心',
} );

// 设置loading状态

export default function InfoReducer( state = initState, action = {} ) {
  switch ( action.type ) {
    default:
      return state
  }

}