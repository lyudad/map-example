import { Navigation } from 'react-native-navigation';

import { registerScreens } from './Navigation'
import * as routeNames from './Navigation/constants/routeNames'

registerScreens()

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Map',
      icon: require('./Images/search.png'),
      title: 'MAP',
      screen: routeNames.map
    },
    {
      label: 'Screen',
      icon: require('./Images/search.png'),
      title: 'SCREEN',
      screen: routeNames.fakeScreen
    }
  ]
})
