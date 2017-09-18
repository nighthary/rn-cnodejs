import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

class Header extends Component {

  render = () => {
    const {data, navigate} = this.props
    return (
      Object.keys(data).length ? <TouchableOpacity onPress={() => { navigate('myInfo')}}>
          <View style={styles.info}>
            <Image
              resizeMode='cover'
              source={require('../../../assets/imgs/header.png')}
              style={styles.avator}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>NightHary</Text>
              <Text style={styles.time}>注册于：8天前</Text>
            </View>
          </View>
        </TouchableOpacity>
        : <TouchableOpacity onPress={() => { navigate('login')}}>
          <View style={styles.info}>
            <Image
              resizeMode='cover'
              source={require('../../../assets/imgs/header.png')}
              style={styles.avator}
            />
            <View style={styles.detail}>
              <Text style={styles.name}>未注册</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  info: {
    height: 80,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avator: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  detail: {
    marginLeft: 20,
  },
  name: {
    color: '#333',
    fontSize: 14
  },
  time: {
    fontSize: 12,
    color: '#999',
    paddingTop: 5,
    paddingBottom: 5,
  }
})

export default Header