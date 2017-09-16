import { StackNavigator } from 'react-navigation';
import Home from '../view/Home';
import Second from '../view/Second';
import TabView from './MyTabNavigator';
import AnimateView from '../view/Animate';
import MyList from '../view/MyList';

const AppNavigator = StackNavigator( {
  // 页面跳转的钩子
  Home: { screen: Home , key: 'Home'},
  Second: {screen: Second, key: 'Second'},
  TabView: { screen: TabView, key: 'TabView'},
  animate: {screen: AnimateView, key: 'animate'},
  myList: {screen: MyList, key: 'myList'}
});

export default AppNavigator;
