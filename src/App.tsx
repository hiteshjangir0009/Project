import React, { useState } from 'react';
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
import Imagefile from './images';
import Home from './home';


const App = () => {
  return (
    <><SafeAreaView style={styles.maincontainer}>
      <><View >
        {/* <Login /> */}
        <Home />

      </View></>

    </SafeAreaView>

    {/* BOTTOM NAVBAR */}
    <View style={{backgroundColor:'white', }}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/home.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/search.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/cart.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.img} source={require('../src/product/menu.png')}></Image>
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
    paddingVertical:10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
  },
  img:{
    height: 30,
    width: 30,

  }

})

export default App;
