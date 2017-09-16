import React, { Component } from 'react'

import {
  Text,
  View,
  Button,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native'

class Second extends Component {
  static navigationOptions = {
    title: 'Second',
  }

  constructor (props) {
    super(props)
  }

  render () {
    const {params} = this.props.navigation.state
    return (
      <View>
        <TouchableHighlight>
          <Text
            onPress={() => {
              this.props.navigation.goBack()
            }}> Hello, {params.name}! </Text>
        </TouchableHighlight>
        <Text> Hello, {params.name}! </Text>
        <Button title="去TabView" onPress={() => { this.props.navigation.navigate('TabView')}}/>
        <Button title="去动画View" onPress={() => { this.props.navigation.navigate('animate')}}/>
        <Button title="去列表" onPress={() => { this.props.navigation.navigate('myList')}}/>
        <Image source={{
          uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1035436093,3470577695&fm=27&gp=0.jpg',
          cache: 'only-if-cached'
        }} style={styles.img}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 100,
    margin: 20
  }
})
export default Second