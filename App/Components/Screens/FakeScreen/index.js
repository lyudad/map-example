import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class FakeScreen extends Component {
  render () {
    return (
      <View>
        <Text>this is a fake screen</Text>
      </View>
    )
  }
}

FakeScreen.propTypes = {

}

export default FakeScreen
