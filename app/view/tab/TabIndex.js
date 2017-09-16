

import React, { Component } from 'react';

import {
  Text,
  View,
  Button
} from 'react-native';

class TabIndex extends Component {

  static navigationOptions = {
    title: 'Tab-首页'
  }

  constructor (props, context) {
    super(props, context);

    this.gotoInfo = this.gotoInfo.bind(this);
  }

  render () {
    return (
      <View>
        <Button title="去个人信息" onPress={ this.gotoInfo }/>
      </View>
    )
  }

  gotoInfo() {
    this.props.navigation.navigate('info')
  }
}

export default TabIndex;