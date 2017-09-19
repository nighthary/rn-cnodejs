import React, { Component } from 'react';
import {
  AppRegistry, // 注册组件,是应用的JS运行入口
  StyleSheet,  // 样式表, 类似于一个集合包含各个组件的属性
  ScrollView,
  Dimensions,  // 规格
  TouchableWithoutFeedback,
  Image,       // 图片组件
  View         // 视图组件
} from 'react-native';

const { width, height } = Dimensions.get('window')

// 声明一个 Helloworld 组件
class DetailIndex extends Component {

  render() { // 渲染

    return (

      <ScrollView contentContainerStyle={{flex: 1}} // 默认充满整个空间(屏幕)
                  maximumZoomScale={2}    // 子组件(图片)放大倍数
                  minimumZoomScale={1.0}  // 子组件(图片)缩小倍数
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  centerContent={true} // 子组件(图片)一直处于父组件中心位置,不会因缩放向其他方向偏离
                  ref="testScroll"
      >
        <TouchableWithoutFeedback onPressOut={this.sigleTap()}>
          <Image source={{ uri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1849483001,1752516309&fm=27&gp=0.jpg'}}
                 resizeMode={'contain'}
                 style={{flex: 1, width, height}} // 如果Image不设置width、height那么他就会按照自身的大小就行展示,导致超出屏幕边界
          />
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }

  sigleTap() { // 手势这个暂未搞明白
  }

}

export default DetailIndex