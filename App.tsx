import React from 'react';
import BottomNavigator from './Navigator/BottomNavigator'
import TopNavigator from './Navigator/TopNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native';
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TopNavigator />
    </NavigationContainer>
  )
}