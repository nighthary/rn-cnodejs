import React, { Component } from 'react'

import { getList } from '../../service/apis'

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView
} from 'react-native'

const {width, height} = Dimensions.get('window')

let base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
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
          <TouchableOpacity style={styles.headerTouch} onPress={() => { navigation.navigate('detail') }}>
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
      pageSize: 10,
      pageNo: 1,
      isDataEnd: false,
      refreshing: false,
      failed: false,
    }
  }

  componentWillMount () {
    this.getList()
  }

  getList () {
    let {pageNo, pageSize} = this.state;
    let _isDataEnd = false;
    if(!this.state.isLoading){
      this.setState({isLoading: true})
      getList(pageNo, pageSize).then((result) => {
        if (result.code === 0) {
          const newData = this.state.lists.concat(result.data);
          if ((newData.length === result.totalCount) || result.data.length < pageSize) {
            _isDataEnd = true;
          }
          this.setState({isLoading: false, lists: newData, refreshing: false, isDataEnd: _isDataEnd})
        }
      }).catch(err => {
        this.setState({failed: true})
      })
    }
  }

  refresh () {
    this.setState({pageNo: 1, lists: [],isDataEnd: false, refreshing: false, failed: false})
    this.getList()
  }

  loadMore () {
    if(!this.state.isDataEnd){
      this.setState({pageNo: this.state.pageNo++ })
      this.getList()
    }
  }

  navigate (routeName, params) {
    if (!global.transitioning) {
      this.props.navigation.navigate(routeName, params)
    }
  }

  render () {
    if(!this.state.lists){
      return this._renderLoadingView()
    }else{
      return (
        <View style={styles.container}>
          <FlatList
            refreshing={this.state.refreshing}
            numColumns={2}
            data={this.state.lists}
            keyExtractor={(item, index) => index}
            renderItem={this._renderListItem}
            onRefresh={this.refresh.bind(this)}
            onEndReached={this.loadMore.bind(this)}
            onEndReachedThreshold={0.1}
            ListHeaderComponent={this._renderHeader}
            getItemLayout={(data, index) => ({length: 270.5, offset: 270.5 * index, index})}
          />
        </View>
      )
    }
  }

  _renderListItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => { this.navigate('detail') }}
        activeOpacity={0.6}>
        <View style={styles.item}>
          <Image
            defaultSource={{ uri: base64Icon}}
            source={{uri: item.imgUri1}}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
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

  _renderHeader = () => (
    <View style={styles.header}>
      <Image
        resizeMode='cover'
        source={{uri: `https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3454737647,4030834292&fm=27&gp=0.jpg`}}
        style={styles.headerImg}
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
  headerLeft: {
    height: 44,
    width: 80,
    marginLeft: 15
  },

  headerRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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
    height: 150
  },
  title: {
    marginTop: 10
  }
})

export default HomeIndex