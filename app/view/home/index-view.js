import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ProgressBar,
} from 'react-native'

import { getHomeList } from '../../service/apis';
import {formatDate} from '../../util/tools';

import {baseStyle, styles, tabStyles, listStyles} from './styles';

const tabs = [{key: 'all', value: '全部'}, {key: 'good', value: '精华'}, {key: 'share', value: '分享'}, {key: 'ask', value: '问答'}]
const tabsObj = { 'top': '置顶', 'ask': '问答', 'good': '精华', 'share': '分享', 'job': '招聘', 'dev': '测试', 'default': '暂无' }

class HomeIndex extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      tabBarLabel: '首页',
      tabBarIcon: ({tintColor}) => {
        return (
          <Image
            source={require('../../assets/imgs/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        )
      },
      headerLeft: (
        <Image style={styles.headerLeft} source={require('../../assets/imgs/logo.png')} resizeMode='contain' />
      ),
      headerRight: (
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerTouch} onPress={() => { navigation.navigate('img') }}>
            <Image style={styles.headerBtn} source={require('../../assets/imgs/icon-search.png')} resizeMode='contain' />
          </TouchableOpacity>
        </View>
      ),
      headerStyle: {
        backgroundColor:'#000',
        paddingRight:10
      }
    }
  }

  constructor (props) {
    super(props)

    this.state = {
      lists: [],
      isLoading: false,
      isShowLoading: false,
      limit: 10,
      page: 1,
      isDataEnd: false,
      refreshing: true,
      failed: false,
    }
  }

  componentWillMount () {
    this.getList()
  }

  getList () {
    let {page, limit} = this.state;
    let {activeTab} = this.props;
    let _isDataEnd = false;
    if(!this.state.isLoading){
      this.setState({isLoading: true})
      getHomeList(page, limit, activeTab).then((result) => {
        if (result.success) {
          let _data = result.data;
          this.convertData(_data);
          const newData = this.state.lists.concat(_data);
          this.setState({isLoading: false, lists: newData, refreshing: false, isDataEnd: _isDataEnd, isShowLoading: false})
        }
      }).catch(err => {
        this.setState({failed: true})
      })
    }
  }

  convertData (data) {
    data.map((elem, index) => {
      let obj = data[index];
      obj.create_at = formatDate(obj.create_at);
      obj.last_reply_at = formatDate(obj.last_reply_at);
      obj.tabTxt = tabsObj[data[index].tab];
      let avatar_url = obj.author.avatar_url;
      if (avatar_url && !avatar_url.startsWith('https')){
        obj.author.avatar_url = 'https:' + avatar_url
      }
    })
  }

  refresh () {
    this.setState({page: 1, lists: [],isDataEnd: false, refreshing: false, failed: false})
    this.getList()
  }

  loadMore () {
    if(!this.state.isDataEnd){
      this.setState({page: this.state.page++ })
      this.getList()
    }
  }

  async switchTab (tab) {
    this.setState({isShowLoading: true});
    const {changeTab} = this.props;
    this.setState({ lists: []});
    await changeTab(tab);
    this.getList();
  }

  render () {
    const {activeTab} = this.props;
    const {navigate} = this.props.navigation;
    let {isShowLoading} = this.state;
    return (
      <View style={styles.container}>
        <View style={tabStyles.tabView}>
        {
          tabs.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {this.switchTab(item.key)}}>
              <View style={[tabStyles.item, activeTab === item.key ? tabStyles.itemActive : null]} key={index}>
                <Text style={[tabStyles.txt, activeTab === item.key ? tabStyles.txtActive : null]}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
        </View>
        <FlatList
          refreshing={this.state.refreshing}
          data={this.state.lists}
          keyExtractor={(item, index) => index}
          renderItem={this._renderListItem}
          onRefresh={this.refresh.bind(this)}
          onEndReached={this.loadMore.bind(this)}
          onEndReachedThreshold={0.1}
          getItemLayout={(data, index) => ({length: 270.5, offset: 270.5 * index, index})}
        />
        <TouchableOpacity onPress={() => { navigate('detail') }}>
          <Image style={styles.pubilsh} source={require('../../assets/imgs/add.png')} resizeMode='contain' />
        </TouchableOpacity>
        <View style={styles.loading}>
          <ActivityIndicator
            animating={isShowLoading}
            size="large"
          />
        </View>
      </View>
    )
  }

  _renderListItem = ({item}) => {

    return (
      <TouchableOpacity
        onPress={() => (this.props.navigation.navigate('movie'))}
        activeOpacity={0.6}>
        <View style={listStyles.item}>
          <View style={listStyles.header}>
            <View style={[listStyles[item.tab], listStyles.tab]}>
              <Text style={listStyles.headerTxt}>{item.tabTxt}</Text>
            </View>
            <Text numberOfLines={1} style={listStyles.title}>{item.title}</Text>
          </View>
          <View style={listStyles.content}>
            <TouchableOpacity>
              <Image
                source={{ uri: item.author.avatar_url}}
                style={listStyles.avatar}
              />
            </TouchableOpacity>
            <View style={listStyles.info}>
              <Text style={listStyles.name}>{item.author.loginname}</Text>
              <Text style={listStyles.time}>{item.create_at}</Text>
            </View>
            <View style={listStyles.replyInfo}>
              <View style={listStyles.count}>
                 <Text style={listStyles.replyCount}>{item.reply_count} / </Text>
                 <Text style={listStyles.visitCount}>{item.visit_count}</Text>
              </View>
              <Text style={listStyles.replyTime}>{item.last_reply_at}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


export default HomeIndex
