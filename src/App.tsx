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
import Home from './home';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Loginnav} />
        <Stack.Screen name='Home' component={Homenav} />
      </Stack.Navigator>

    </NavigationContainer>

  )
}
const Loginnav = () => {
  return(
  <SafeAreaView style={styles.maincontainer}>
    <View>
      <Login />

    </View>
  </SafeAreaView>

  )
}

const Homenav = () => {
  return(

  <><SafeAreaView style={styles.maincontainer}>
    <><View >
      <Home />
    </View></>
  </SafeAreaView>

    {/* BOTTOM NAVBAR */}
    <View style={{ backgroundColor: 'white', }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/icons/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/icons/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/icons/cart.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/icons/menu.png')}></Image>
        </TouchableOpacity>
      </View>
    </View></>


  )
}


const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    backgroundColor: 'gray',
    // marginVertical: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

  },
  img: {
    height: 30,
    width: 30,

  }

})

export default App;
