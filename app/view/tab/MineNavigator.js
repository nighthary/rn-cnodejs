import { StackNavigator } from 'react-navigation';

import MineIndex from './MineIndex';
import Info from './Info';

const MineNavigator = StackNavigator( {
  // 页面跳转的钩子
  MineIndex: { screen: MineIndex, key: 'MineIndex' },
  info: {screen: Info, key: 'info'},
});


const defaultGetStateForAction = MineNavigator.router.getStateForAction;

MineNavigator.router.getStateForAction = (action, state) => {
  if (state && action.type === 'PushTwoProfiles') {
    const routes = [
      ...state.routes,
      {key: 'MineIndex', routeName: 'MineIndex'},
      {key: 'info', routeName: 'info'},
    ];
    return {
      ...state,
      routes,
      index: routes.length - 1,
    };
  }
  return defaultGetStateForAction(action, state);
};


export default MineNavigator;
