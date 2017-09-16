import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Button
} from 'react-native';

class InfoIndex extends Component {

  static navigationOptions =  ({navigation}) => {
    return {
      tabBarLabel: '个人中心',
      tabBarIcon: ({ focused, tintColor }) => {
        return (
          <Image
            source={require('../../assets/imgs/mine.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      headerTitle: '个人中心'
    }
  }

  render = () => (
    <View>
      <Text>个人中心{this.props.nowCount}</Text>
      <Button title="更新count" onPress={ this.updateCount.bind(this) }/>
    </View>
  )

  updateCount (){
    let {homeActions} = this.props;
    homeActions.setNowCount(20)
  }
  componentDidMount () {
    fetch('http://malldev.goodsogood.com/app/commodity/recommendList?openId=f0a9c82b1f07ea88f52d5b314be037f0', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'pageNo=1&pageSize=3'
    }).then((response) => response.json())
    .then( (result) => {
      if(Number(result.code) === 0){
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
  }
})

export default InfoIndex;