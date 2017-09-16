import React, { Component } from 'react'

import { Provider } from 'react-redux';

import store from './redux/store';
import {
  StatusBar,
  View
} from 'react-native'
// import Navigator from './navigator/index';

import Navigator from './navigator/MyNavigator'

function setup () {
  class Root extends Component {
    render = () => (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar barStyle="light-content"/>
          <Navigator />
        </View>
      </Provider>
    )
  }

  return Root
}

export default setup
