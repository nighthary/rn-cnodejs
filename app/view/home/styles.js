import {
  StyleSheet,
  Dimensions
} from 'react-native';


const {width, height} = Dimensions.get('window')

export const baseStyle = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  }
})

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF'
  },
  headerLeft: {
    height: 25,
    width: 100,
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
  pubilsh: {
    position: 'absolute',
    bottom: -60,
    right: 20,
    width: 40,
  }
})

export const tabStyles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    borderBottomWidth: 0.5,
    borderColor: '#F5F5F5'
  },
  item: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemActive:{
    borderBottomWidth: 1.5,
    borderColor: '#4181DE',
  },
  txt: {
    color: '#000'
  },
  txtActive: {
    color: '#4181DE'
  }
})

export const listStyles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#f1f1f1'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tab: {
    marginRight: 10,
    paddingTop: 5,
    paddingLeft: 6,
    paddingBottom: 5,
    paddingRight: 6,
    borderRadius: 3,
  },
  all: {
    backgroundColor: '#e74c3c',
  },

  ask: {
    backgroundColor: '#3498db',
  },

  good: {
    backgroundColor: '#e67e22',
  },

  share: {
    backgroundColor: '#1abc9c',
  },
  headerTxt: {
    color: '#000',
    fontSize: 12
  },
  title: {
    flex: 1,
    fontSize: 16
  },
  content: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  info: {
    flex: 1,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 12
  },
  time: {
    fontSize: 12,
  },
  replyInfo: {
    paddingVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  replyCount: {
    fontSize: 12,
    color: '#42b983',
  },
  visitCount: {
    fontSize: 12
  },
  replyTime: {
    fontSize: 12
  },

  count: {
    flexDirection: 'row'
  }
})
