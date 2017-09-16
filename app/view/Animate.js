

import React, { Component } from 'react';

import {
  NativeModules,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation
} from 'react-native';

const { UIManager } = NativeModules;


UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

class Home extends Component {

  static navigationOptions = {
    title: 'Animate-View'
  }

  constructor (props){
    super(props);
    this.state = {
      w: 100,
      h: 100,
    };
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={ this._onBig }>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Big！</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={ this._onSmall }>
          <View style={styles.button}>
            <Text style={styles.buttonText}> Small！</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  _onBig  = () => {
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  _onSmall  = () => {
    LayoutAnimation.spring();
    this.setState({w: this.state.w - 15, h: this.state.h - 15})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})
export default Home;