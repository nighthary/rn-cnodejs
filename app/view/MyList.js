import React, { Component } from 'react'

import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet
} from 'react-native'

import Mock from 'mockjs'



class Home extends Component {

  constructor (props){
    super(props)

    Mock.Random.image('200x100', '#FF6600')

    this.data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        'text': '@ctitle(5)',
        'key': '@string("aeiou",5)',
        'img': '@image'
      }]
    })
    console.log(this.data)
  }

  static navigationOptions = {
    title: 'FatList'
  }

  render = () => (
    <FlatList
      data={ this.data.list}
      renderItem={({item}) => this._renderItem(item)}
    />
  )

  _renderItem = (item) => (
    <View style={styles.container}>
      <Text style={styles.txt} numberOfLines={2}>{item.text}</Text>
      <Image source={{ uri: item.img }} style={styles.img}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'aqua',
    alignItems:'center',
  },
  img: {
    width: 200,
    height:100
  },
  txt: {
    width: 200,
    color: 'red',
    fontSize: 20
  }
})
export default Home