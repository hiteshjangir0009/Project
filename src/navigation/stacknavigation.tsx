import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../screens/login';
import Otp from '../screens/otp';
import Home from '../screens/home';
import Display from '../screens/display';
import Payment from '../screens/Payment';
import Checkout from '../screens/Checkout';
import Cart from '../screens/Cart';
import Tabbottomnavigation from './tabbottomnavigation';


const stack = createStackNavigator();
const Mainstack = () => {
    return (

        <stack.Navigator
        >
            <stack.Screen name="login" component={Login} />
            <stack.Screen name="otp" component={Otp} />
            <stack.Screen name="tabs" component={Tabbottomnavigation} />
        </stack.Navigator>

    );

};
const Productstack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="home" component={Home} />
            <stack.Screen name="display" component={Display} />
            <stack.Screen name="checkout" component={Checkout} />
            <stack.Screen name="payment" component={Payment} />
        </stack.Navigator>
    );

};
const Cartstack = () => {
    return (
        <stack.Navigator>
            <stack.Screen name="cart" component={Cart} />
            <stack.Screen name="checkout" component={Checkout} />
            <stack.Screen name="payment" component={Payment} />
        </stack.Navigator>
    );

};

export { Mainstack, Productstack, Cartstack };