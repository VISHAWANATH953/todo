import React from 'react'
import Home from '../screens/Home'
import Social from '../screens/Social'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Social" component={Social} />
        </Tab.Navigator>
    )
}

export default BottomNavigator
