import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import Header from './components/Header'
import { styles } from './styles'

class InfoIndex extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      tabBarLabel: '我',
      tabBarIcon: ({focused, tintColor}) => {
        return (
          <Image
            source={require('../../assets/imgs/mine.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      headerTitle: '我',
      headerStyle: {
        backgroundColor: '#000',
        paddingRight: 10
      },
      headerTitleStyle: {
        color: '#FFF'
      }
    }
  }

  render = () => {
    const { navigate } = this.props.navigation;
    const data = {
    };
    const headerProps = { data, navigate }
    return (
      <View style={styles.container}>
        <Header {...headerProps} />
        <View style={styles.rowList}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/integral.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>论坛积分</Text>
                <Text style={styles.txt}>280</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/github.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>代码仓库</Text>
                <Text style={styles.txt}>NightHary</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowList}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/comment.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>最近回复</Text>
                <Text style={styles.txt}>5</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/post.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>最新发布</Text>
                <Text style={styles.txt}>3</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/post.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>话题收藏</Text>
                {/*<Text style={styles.txt}>3</Text>*/}
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rowList}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={require('../../assets/imgs/setting.png')}
                style={styles.img}
              />
              <View style={styles.rowInner}>
                <Text style={styles.title}>设置</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  componentDidMount () {

  }
}

export default InfoIndex