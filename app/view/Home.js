import React, { Component } from 'react'

import {
  Button
} from 'react-native'

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <Button
        title='Go to next Screen'
        onPress={() => {
          navigate('Second', {name: 'zs'})
        }}
      />
    )
  }
}

export default Home

