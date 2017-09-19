import React, { Component } from 'react'

import { Dimensions, Image } from 'react-native'
import ImageZoom from 'react-native-image-pan-zoom'

class ImageShow extends React.Component {
  render () {
    return (
      <ImageZoom cropWidth={Dimensions.get('window').width}
                 cropHeight={Dimensions.get('window').height}
                 imageWidth={200}
                 imageHeight={200}>
        <Image style={{width: 200, height: 200}}
               source={{uri: 'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'}}/>
      </ImageZoom>
    )
  }
}

export default ImageShow