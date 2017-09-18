import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native'

import {login} from '../../../service/apis';

class HomeIndex extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: '登录',
      mode: 'card',
      headerMode: 'float',
      headerStyle: {
        backgroundColor:'#000',
        paddingRight:10,
      },
      headerTitleStyle: {
        color: '#FFF'
      }
    }
  }

  constructor (props) {
    super(props)

    this.state = { text: '' }
  }

  componentWillMount () {
  }

  _onLogin = (accesstoken) => {
    if (!accesstoken) return
    login({accesstoken}).then((result) => {
      if(Number(result.code) === 0){
        AsyncStorage.setItem('accesstoken', accesstoken)
      }
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image style={styles.logo} source={require('../../../assets/imgs/logo.png')} resizeMode='contain' />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.input}
                     value={this.state.text}
                     placeholder='输入 Access Token'
                     underlineColorAndroid="transparent"
                     onChangeText={(text) => { this.setState({ text }) }}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={() => { this._onLogin(this.state.text) }}>
          <Text style={styles.login}>登录</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },

  bgImage: {
    flex: 1,
    resizeMode: "stretch"
  },

  logoView: {
    alignItems: 'center',
    margin: 15,
    marginBottom: 0,
    borderRadius: 5,
    backgroundColor: '#282828',
  },

  logo: {
    width: 200,
  },

  inputView: {
    height: 44,
    margin: 15,
    marginBottom: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
  },

  input: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },

  loginBtn: {
    padding: 15,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0079FD',
  },

  login: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
})

export default HomeIndex