import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import CofeeScreen from '../screens/CofeeScreen';
import CoffeeDetails from '../screens/CoffeeDetails';

export default function StackNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Main" component={BottomNavigation} />
      <Stack.Screen name="Cofee" component={CofeeScreen} />
      <Stack.Screen name="CofeeDetails" component={CoffeeDetails} />
    </Stack.Navigator>
  )
}