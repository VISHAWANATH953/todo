import React from 'react';
import TopNavigator from './Navigator/TopNavigator'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {
  return (
    <NavigationContainer>
      <TopNavigator />
    </NavigationContainer>
  )
}
export default App