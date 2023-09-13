import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
    Image,
    Text
} from 'react-native';
import { Route, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from '../screens/Search';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import Kitchenhome from '../screens/Kitchenhome';
import Mainstack from './stacknavigation';
import Farmhome from '../screens/farmhome';
import Otp from '../screens/otp';
import Checkout from '../screens/Checkout';
import Payment from '../screens/Payment';
import Login from '../screens/login';
import { MaterialTopTabBar, createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Flour, Fruit, Vege, Spice } from '../screens/product';


const Tab = createBottomTabNavigator();
const tabs = createMaterialTopTabNavigator();
const Toptab1 = () => {
    return (

        <tabs.Navigator
            backBehavior='none'
            initialRouteName='Vegetable'
            
            screenOptions={{
                tabBarLabelStyle:{
                    fontWeight:'bold',
                    fontStyle:'italic',
                    fontSize:12.3,
                    
                    // justifyContent:'space-around'

                },
                tabBarActiveTintColor:'#fee175',
                tabBarInactiveTintColor:'white',
                
                tabBarStyle:{
                    backgroundColor:'#587765',
                    // justifyContent:'space-around'
                }
            }}
            >
            <tabs.Screen name="Vegetable" component={Vege} />
            <tabs.Screen name="Fruit" component={Fruit} />
            <tabs.Screen name="Spices" component={Spice} />
            <tabs.Screen name="Atta" component={Flour} />

        </tabs.Navigator>

    )
}
const Toptab2 = () => {
    return (

        <tabs.Navigator
            initialRouteName='Fruit'
            backBehavior='none'
            screenOptions={{
                tabBarLabelStyle:{
                    fontWeight:'bold',
                    fontStyle:'italic',
                    fontSize:12.3,
                    
                    // justifyContent:'space-around'

                },
                tabBarActiveTintColor:'#fee175',
                tabBarInactiveTintColor:'white',
                
                tabBarStyle:{
                    backgroundColor:'#587765',
                    // justifyContent:'space-around'
                }
            }}
        >
            <tabs.Screen name="Vegetable" component={Vege} />
            <tabs.Screen name="Fruit" component={Fruit} />
            <tabs.Screen name="Spices" component={Spice} />
            <tabs.Screen name="Atta" component={Flour} />

        </tabs.Navigator>

    )
}
const Toptab3 = () => {
    return (

        <tabs.Navigator
            initialRouteName='Spices'
            backBehavior='none'
            screenOptions={{
                tabBarLabelStyle:{
                    fontWeight:'bold',
                    fontStyle:'italic',
                    fontSize:12.3,
                    
                    // justifyContent:'space-around'

                },
                tabBarActiveTintColor:'#fee175',
                tabBarInactiveTintColor:'white',
                
                tabBarStyle:{
                    backgroundColor:'#587765',
                    // justifyContent:'space-around'
                }
            }}
        >
            <tabs.Screen name="Vegetable" component={Vege} />
            <tabs.Screen name="Fruit" component={Fruit} />
            <tabs.Screen name="Spices" component={Spice} />
            <tabs.Screen name="Atta" component={Flour} />

        </tabs.Navigator>

    )
}
const Toptab4 = () => {
    return (

        <tabs.Navigator
            initialRouteName='Atta'
            backBehavior='none'
            screenOptions={{
                tabBarLabelStyle:{
                    fontWeight:'bold',
                    fontStyle:'italic',
                    fontSize:12.3,
                    
                    // justifyContent:'space-around'

                },
                tabBarActiveTintColor:'#fee175',
                tabBarInactiveTintColor:'white',
                
                tabBarStyle:{
                    backgroundColor:'#587765',
                    // justifyContent:'space-around'
                }
            }}
        >
            <tabs.Screen name="Vegetable" component={Vege} />
            <tabs.Screen name="Fruit" component={Fruit} />
            <tabs.Screen name="Spices" component={Spice} />
            <tabs.Screen name="Atta" component={Flour} />

        </tabs.Navigator>

    )
}
const Tabbottomnavigation1 = () => {
    return (

        <Tab.Navigator
            // initialRouteName='home'

            screenOptions={{

                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarStyle: {

                    position: 'absolute',
                    backgroundColor: '#587765',
                    margin: 10,
                    borderRadius: 30,
                    justifyContent: 'space-around',
                    height: 70
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    color: 'black',
                    paddingBottom: 10,


                },
            }}

        >
            <Tab.Screen
                name="home"
                component={Kitchenhome}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/homew.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Search</Text></>
                    )

                }}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={

                    {

                        tabBarIcon: ({ focused }) => (
                            <><Image
                                style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                                source={require('../icons/searchw.png')} />
                                <Text
                                    style={{ color: focused ? "black" : "white" }}
                                >Search</Text></>
                        )
                    }}
            />
            <Tab.Screen
                name="cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/cart.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Cart</Text></>
                    )
                }}
            />
            <Tab.Screen
                name="menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/menuw.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Menu</Text></>

                    )

                }}
            />
        </Tab.Navigator>
    )

}
const Tabbottomnavigation2 = () => {
    return (

        <Tab.Navigator
            // initialRouteName='home'

            screenOptions={{

                tabBarShowLabel: false,
                tabBarActiveTintColor: "white",
                headerShown: false,
                tabBarStyle: {

                    position: 'absolute',
                    backgroundColor: '#587765',
                    margin: 10,
                    borderRadius: 30,
                    justifyContent: 'space-around',
                    height: 70
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    color: 'black',
                    paddingBottom: 10,


                },
            }}

        >
            <Tab.Screen
                name="home"
                component={Farmhome}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/homew.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Search</Text></>
                    )

                }}
            />
            <Tab.Screen
                name="search"
                component={Search}
                options={

                    {

                        tabBarIcon: ({ focused }) => (
                            <><Image
                                style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                                source={require('../icons/searchw.png')} />
                                <Text
                                    style={{ color: focused ? "black" : "white" }}
                                >Search</Text></>
                        )
                    }}
            />
            <Tab.Screen
                name="cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/cart.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Cart</Text></>
                    )
                }}
            />
            <Tab.Screen
                name="menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <><Image
                            style={{ width: 35, height: 35, tintColor: focused ? "black" : "white" }}
                            source={require('../icons/menuw.png')} />
                            <Text
                                style={{ color: focused ? "black" : "white" }}
                            >Menu</Text></>

                    )

                }}
            />
        </Tab.Navigator>
    )

}


export { Tabbottomnavigation1, Tabbottomnavigation2, Toptab1, Toptab2, Toptab3, Toptab4 };