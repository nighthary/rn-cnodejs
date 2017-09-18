
import { TabNavigator, StackNavigator } from 'react-navigation'

import React from 'react'

import HomeIndex from '../view/home/';
import InfoIndex from '../view/info/';
import Detail from '../view/home/detail/';
import Movie from '../view/home/movie/';
import Login from '../view/info/login/';
import MyInfo from '../view/info/myInfo/';

const Tabs = TabNavigator({
  home: {
    screen: HomeIndex,
  },
  info: {
    screen: InfoIndex,
  }
}, {
  animationEnabled: false,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e25800',
    showIcon: true,
    mode: 'card',
    indicatorStyle: {
      height: 0
    },
    style: {
      backgroundColor: '#fff',
    },
  },
  tabBarPosition: 'bottom'
})

const Navigator = StackNavigator({
  tabs: {screen: Tabs},
  detail: {screen: Detail},
  login: {screen: Login},
  myInfo: {screen: MyInfo},
  movie: {screen: Movie},
}, {
  initialRouteName: 'tabs',
  cardStyle: {
    backgroundColor: '#F1F1F1'
  },
  headerMode: 'screen'
})


export default Navigator