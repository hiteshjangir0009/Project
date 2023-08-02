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
import Login from './login';
import Otp from './otp';
import Home from './home';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{headerShown: false}} name='otp' component={Otp} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
      </Stack.Navigator>

    </NavigationContainer>
    
  )
}

export default App;
