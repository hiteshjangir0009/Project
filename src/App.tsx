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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mainnavigation from './navigation/mainnavigation';

import store from './redux/store';
import { Provider } from 'react-redux';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <Mainnavigation/>
    </Provider>
    
    
  )
}

export default App;
