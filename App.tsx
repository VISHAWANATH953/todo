import React from 'react';
import TopNavigator from './Navigator/TopNavigator'
import { NavigationContainer } from '@react-navigation/native'
export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TopNavigator />
    </NavigationContainer>
  )
}