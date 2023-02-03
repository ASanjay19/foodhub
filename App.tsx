import { View, Text } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/Store';
import {Provider} from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <StackNavigation/>
   </NavigationContainer>
   </Provider>
  )
}