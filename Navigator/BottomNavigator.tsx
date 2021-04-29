import React from 'react'
import Home from '../screens/Home'
import Social from '../screens/Social'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Social" component={Social} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigator
