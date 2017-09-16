import React, { Component } from 'react'

import {
  Text,
  View,
  Button
} from 'react-native'

class Mine extends Component {

  static navigationOptions = {
    headerTitle: '个人中心'
  }

  constructor (props, context) {
    super(props, context);
    this.gotoTabIndex = this.gotoTabIndex.bind(this);
    this.gotoStackIndex = this.gotoStackIndex.bind(this);
    this.gotoInfo = this.gotoInfo.bind(this);
  }

  render () {
    return (
      <View>
        <Button title="回到Stack首页" onPress={this.gotoStackIndex}/>
        <Button title="回到Tab首页" onPress={this.gotoTabIndex}/>
        <Button title="去个人信息" onPress={ this.gotoInfo }/>
        <Button title="返回" onPress={() => this.props.navigation.goBack()}/>
      </View>
    )
  }

  gotoTabIndex () {
    this.props.navigation.goBack('TabIndex')
  }

  gotoStackIndex () {
    debugger
    this.props.navigation.goBack('Home')
  }

  gotoInfo() {
    this.props.navigation.navigate('info')
  }
}

export default Mine