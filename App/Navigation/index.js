import { Navigation } from 'react-native-navigation'

import Map from '../Components/Screens/Map'
import FakeScreen from '../Components/Screens/FakeScreen'

import * as routeNames from './constants/routeNames'

export const registerScreens = () => {
  Navigation.registerComponent(routeNames.map, () => Map)
  Navigation.registerComponent(routeNames.fakeScreen, () => FakeScreen)
}
