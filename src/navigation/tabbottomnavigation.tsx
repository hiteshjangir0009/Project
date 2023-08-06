import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
    StyleSheet,
    View,
    SafeAreaView,
    StatusBar,
    Touchable,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/home';
import Search from '../screens/Search';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();
const Tabbottomnavigation = () => {
    return (

        <Tab.Navigator >
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="search" component={Search} />
            <Tab.Screen name="cart" component={Cart} />
            <Tab.Screen name="menu" component={Menu} />
        </Tab.Navigator>


    )


}
export default Tabbottomnavigation;