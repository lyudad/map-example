import { StyleSheet } from 'react-native'

import { metrics } from '../../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    width: 400, //metrics.screenWidth,
    height: metrics.screenHeight
  }
})
