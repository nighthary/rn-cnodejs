import {
  StyleSheet,
  Dimensions
} from 'react-native';


const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  icon: {
    width: 25,
  },
  container: {
    flex: 1
  },
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
    marginLeft:20,
  },
  name: {
    color: '#333',
    fontSize: 16
  },
  time: {
    fontSize: 12,
    color: '#999',
    paddingTop: 5,
    paddingBottom: 5,
  },
  rowList: {
    marginTop: 10,
    backgroundColor:'#FFF'
  },
  row: {
    height: 50,
    flexDirection: 'row',
    alignItems:'center',
    paddingLeft: 20
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  rowInner: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    paddingRight: 20,
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: '#F1F1F1',
  },
  title: {
    fontSize: 14,
    color: '#333'
  },
  txt: {
    fontSize: 12,
    color: '#999',
  }
})