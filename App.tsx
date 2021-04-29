import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home'
import Social from './screens/Social'
const Stack = createDrawerNavigator();
export default function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Social" component={Social} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}