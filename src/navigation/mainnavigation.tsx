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
import { Mainstack, Productstack } from './stacknavigation';

const Mainnavigation=()=>{
    return(
        <NavigationContainer>
            <Mainstack/>
            {/* <Productstack/> */}
        </NavigationContainer>
    )


}
export default Mainnavigation;