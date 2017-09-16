import { TabNavigator } from 'react-navigation';

import React from 'react';

import {
  Image,
  StyleSheet
} from 'react-native';

import TabIndex  from '../view/tab/TabIndex';
import Mine from '../view/tab/MineNavigator';

const MyTabNavigator = TabNavigator({
  TabIndex: {
    screen: TabIndex,
    key: 'TabIndex',
    options: {
      tabBar: {
        label: '首页',
        icon: ({tintColor}) => (
          <Image
            source={require('../assets/imgs/home.png')}
            style={[{tintColor: tintColor},styles.icon]}
          />
        ),
      },
    }
  },
  Mine: {
    screen: Mine,
    key: 'Mine',
    options: {
      tabBar: {
        label: '我',
        icon: ({tintColor}) => (
          <Image
            source={require('../assets/imgs/mine.png')}
            style={[{tintColor: tintColor},styles.icon]}
          />
        ),
      },
    }
  }
}, {
  animationEnabled: false,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    activeTintColor: '#0F9C00', // 文字和图片选中颜色
    inactiveTintColor: '#999', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: '#fff', // TabBar 背景色
    },
    labelStyle: {
      fontSize: 12, // 文字大小
    },
  }
})

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain'
  }
});

export default MyTabNavigator