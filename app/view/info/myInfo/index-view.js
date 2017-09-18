import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  ScrollView
} from 'react-native'

const {width, height} = Dimensions.get('window')

class HomeIndex extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: '个人信息',
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

    this.state = {

    }
  }

  componentWillMount () {
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>我是个人信息</Text>
      </ScrollView>
    )
  }

  _renderLoadingView = () => (
    <View style={baseStyle.center}>
      <ActivityIndicator
        animating={true}
        color='#666'
        size='large'
      />
    </View>
  )
}

const baseStyle = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200
  }
})


const styles = StyleSheet.create({
  icon: {
    width: 25,
  },
  container: {
    flex: 1,
  },
  header: {
    width,
    height: 150
  },
  headerImg: {
    width,
    height: 150
  },
  item: {
    backgroundColor: '#FFF',
    marginHorizontal: 2.5,
    marginVertical: 2.5,
    paddingVertical: 5,
    alignItems: 'center',
  },
  img: {
    width: (width / 2),
    height: 80
  },
  title: {
    marginTop: 10
  }
})

export default HomeIndex