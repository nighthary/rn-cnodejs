

import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

class Info extends Component {

  static navigationOptions = {
    headerTitle: '个人信息'
  }

  constructor (props, context) {
    super(props, context);

    this.gotoTabIndex = this.gotoTabIndex.bind(this);
    this.gotoStackIndex = this.gotoStackIndex.bind(this);
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title="回到Stack首页" onPress={ this.gotoStackIndex } />
        <Button title="回到Tab首页" onPress={ this.gotoTabIndex } />
        <Button title="返回" onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }

  gotoTabIndex () {
    this.props.navigation.navigate('TabIndex')
  }

  gotoStackIndex () {
    this.props.navigation.goBack('Home')
  }
}

export default Info;