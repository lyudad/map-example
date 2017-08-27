import React, { Component } from 'react'
import { View, Geolocation, Text, Alert } from 'react-native'
import PropTypes from 'prop-types'
import MapView, { Marker } from 'react-native-maps'

import styles from './styles'

class Map extends Component {
  constructor (props) {
    super(props)

    let location = {latitude: 0, longitude: 0}

    this.state = {
      location
    }
  }

  componentDidMount () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position)
        this.sendLocation(position.coords)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        Alert.alert(
          'Error',
          error.message,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        )
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchUserPostion()
  }

  watchUserPostion = () => {
    navigator.geolocation.watchPosition(
      (response) => {
        console.log('new position', response)
        const { coords } = response
        const location = {
          latitude: coords.latitude,
          longitude: coords.longitude
        }
        this.sendLocation(coords)
        this.setState({location})
      },
      error => console.error(error),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 10000}
    )
  }

  sendLocation(coords){
    fetch('http://putsreq.com/O5FQ0cs4QM489pvI7pvJ', {
      method: 'POST',
      body: JSON.stringify(coords)
    })
  }

  render () {
    const { location } = this.state
    const delta = {
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    }
    const region = {
      ...location,
      ...delta
    }

    return (
      <View style={styles.container}>
         <MapView
            style={styles.map}
            region={region}
            toolbarEnabled
            showsUserLocation
            showsMyLocationButton
            showsScale
            followsUserLocation
            loadingEnabled
          >
         <Marker
            coordinate={location}
            title='user'
            description='user location'
          />
        </MapView>
      </View>
    )
  }
}

Map.propTypes = {

}

export default Map
