import React, { Component } from 'react'
import {
  PanResponder,
  StyleSheet,
  View,
  Dimensions,
  LayoutAnimation
} from 'react-native'

const {width, height}  = Dimensions.get('window')

const MIN_SIZE = 50;
const MAX_SIZE = width / 2 + 50;

class MovieIndex extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: '我',
      headerStyle: {
        backgroundColor:'#000',
        paddingRight:10,
      },
      headerTitleStyle: {
        color: '#FFF'
      }
    }
  }

  // 构造
  constructor (props) {
    super(props)
    // 初始状态
    this.state = {
      cWidth: 50,
      cHeight: 50
    }

    _panResponder = {}
    _previousLeft = 0
    _previousTop = 0
    _circleStyles = {}
    circle = (null: ?{ setNativeProps(props: Object): void })

    startX1 = 0;
    startY1 = 0;
    startX2 = 0;
    startY2 = 0;
    endX1 = 0;
    endY1 = 0;
    endX2 = 0;
    endY2 = 0;
    CIRCLE_SIZE = width / 4;
    nowLength = 0;
    console.log(CIRCLE_SIZE)
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder.bind(this),
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: this._handlePanResponderMove.bind(this),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
      onPanResponderStart: this._onPanResponderStart.bind(this),
    })
    this._previousLeft = 20
    this._previousTop = 84
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    }
  }

  componentDidMount () {
    this._updateNativeStyles()
  }



  _highlight () {
    // this._circleStyles.style.backgroundColor = 'blue'
    CIRCLE_SIZE = CIRCLE_SIZE - 5;
    CIRCLE_SIZE = CIRCLE_SIZE <= 50 ? 50 : CIRCLE_SIZE;
    this._circleStyles.style.width = CIRCLE_SIZE;
    this._circleStyles.style.height = CIRCLE_SIZE;
    this._updateNativeStyles()
    // this.startAnimation(CIRCLE_SIZE)
  }

  _unHighlight () {
    // this._circleStyles.style.backgroundColor = 'red'
    CIRCLE_SIZE = CIRCLE_SIZE + 5;
    CIRCLE_SIZE = MAX_SIZE <= CIRCLE_SIZE ? MAX_SIZE : CIRCLE_SIZE;
    console.log(`CIRCLE_SIZE: ${CIRCLE_SIZE}`);
    this._circleStyles.style.width = CIRCLE_SIZE;
    this._circleStyles.style.height = CIRCLE_SIZE;
    this._updateNativeStyles()
    // this.startAnimation(CIRCLE_SIZE)
  }

  _updateNativeStyles () {
    this.circle && this.circle.setNativeProps(this._circleStyles)
  }

  _handleStartShouldSetPanResponder (e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true
  }

  _handleMoveShouldSetPanResponder (e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true
  }

  _handlePanResponderGrant (e: Object, gestureState: Object) {
    // this._highlight()
  }

  _onPanResponderStart (e:Object, gestureState: Object){
    if(gestureState.numberActiveTouches === 2) {
      let {touches} = e.nativeEvent;
      startX1 = touches[0].locationX;
      startY1 = touches[0].locationY;
      startX2 = touches[1].locationX;
      startY2 = touches[1].locationY;
    }
  }

  _handlePanResponderMove (e: Object, gestureState: Object) {
    // this._circleStyles.style.left = this._previousLeft + gestureState.dx
    // this._circleStyles.style.top = this._previousTop + gestureState.dy
    // this._updateNativeStyles()
    if(gestureState.numberActiveTouches === 2){
      let {touches} = e.nativeEvent;
      endX1 = touches[0].locationX;
      endY1 = touches[0].locationY;
      endX2 = touches[1].locationX;
      endY2 = touches[1].locationY;

      let {dx, dy} = gestureState
      // console.log(`dx:${dx}====dy:${dy}`);

      let moveX = Math.abs(endX2 - endX1)
      let moveY = Math.abs(endY2 - endY1)

      move1 = Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2) , 2)
      if(nowLength !== 0 && move1 > nowLength && (moveX> 100 || moveY > 100)){
        this._unHighlight()
      }else if(nowLength !== 0 && move1 <= nowLength && (moveX> 100 || moveY > 100)){
        this._highlight()
      }
      console.log(`move1:${move1}====nowLength:${nowLength}===moveX:${moveX}====moveY:${moveY}`)
      nowLength = move1

    }
  }

  _handlePanResponderEnd (e: Object, gestureState: Object) {
    // this._unHighlight()
    // this._previousLeft += gestureState.dx
    // this._previousTop += gestureState.dy

    CIRCLE_SIZE = CIRCLE_SIZE < 100 ? 100: CIRCLE_SIZE;
    CIRCLE_SIZE = CIRCLE_SIZE > width / 2 ? width / 2: CIRCLE_SIZE;
    console.log(`CIRCLE_SIZE:${CIRCLE_SIZE}`)
    this.startAnimation(CIRCLE_SIZE)
  }

  async startAnimation(value) {
    LayoutAnimation.configureNext(LayoutAnimation.create(700,
      LayoutAnimation.Types.spring,
      LayoutAnimation.Properties.scaleXY));
    await this.setState({cWidth: value, cHeight: value});
    this._circleStyles.style.width = CIRCLE_SIZE;
    this._circleStyles.style.height = CIRCLE_SIZE;
    this._updateNativeStyles()
  }

  render () {
    let {cWidth,cHeight} = this.state;
    return (
      <View
        style={styles.container}
        {...this._panResponder.panHandlers}
      >
        <View style={styles.scaleView}>
          <View
            ref={(circle) => {
              this.circle = circle
            }}
            style={{width: cWidth, height: cHeight}}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  round: {
    width: 50,
    height: 50,
    marginLeft: -40
  },
  container: {
    flex: 1,
    // alignItems:'center',
    // justifyContent:'center'
  },
  scaleView: {
    width,
    height,
    backgroundColor: '#eee',
    alignItems:'center',
    justifyContent:'flex-start'
  }
})

export default MovieIndex