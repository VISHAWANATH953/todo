import React from 'react'
import Home from '../screens/Home'
import Social from '../screens/Social'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createDrawerNavigator();

const TopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Social" component={Social} />
        </Stack.Navigator>
    )
}

export default TopNavigator
