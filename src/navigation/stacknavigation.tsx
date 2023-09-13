import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {Route } from "@react-navigation/native";
import Login from '../screens/login';
import Otp from '../screens/otp';
import Display from '../screens/display';
import Payment from '../screens/Payment';
import Checkout from '../screens/Checkout';
import Cart from '../screens/Cart';
import {  Tabbottomnavigation1, Tabbottomnavigation2, Toptab1, Toptab2, Toptab3, Toptab4 } from './tabbottomnavigation';
import Farmhome from '../screens/farmhome';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Search from '../screens/Search';

const getroutname = (route: Partial<Route<string>>) => {
    const routeName = getFocusedRouteNameFromRoute(route)
    console.log(routeName)

}
const stack = createStackNavigator();
const Mainstack = () => {
    return (

        <stack.Navigator
            screenOptions={
                {
                    headerShown: false
                }}
            initialRouteName='tabs'
        >
            <stack.Screen name="login" component={Login} />
            <stack.Screen name="otp" component={Otp} />
            <stack.Screen name="farm" component={Farmhome} />
            <stack.Screen name="tabs" component={Tabbottomnavigation1} />
            <stack.Screen name="tab" component={Tabbottomnavigation2} />
            <stack.Screen name="toptabv" component={Toptab1} />
            <stack.Screen name="toptabf" component={Toptab2} />
            <stack.Screen name="toptabs" component={Toptab3} />
            <stack.Screen name="toptaba" component={Toptab4} />
            <stack.Screen name="display" component={Display} />
            {/* <stack.Screen name="car" component={Cart} /> */}
            {/* <stack.Screen name="display" component={Display} /> */}
            <stack.Screen name="checkout" component={Checkout} />
            <stack.Screen name="payment" component={Payment} />
        </stack.Navigator>

    );

};


export default Mainstack;