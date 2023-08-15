import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from 'react-router-dom';
import products from '../apis/productapi';
import Cart from './Cart';
import Menu from './Menu';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Checkout from './Checkout';
import Payment from './Payment';
import vegetable from '../apis/productapi';
import {Vege, Fruit } from './product';
import spices from '../apis/spices';
import Tabtopnavigation from '../navigation/tabtopnavigation';

import productapi from '../apis/productapi';



const tabs = createMaterialTopTabNavigator();
const Kitchenhome = ({ navigation }: { navigation: any }) => {

    return (
        <><SafeAreaView>
            <ScrollView

                style={{
                    backgroundColor: '#EEEEEE',
                    paddingTop:20
                }}>
                <View style={styles.topscreen}>
                    <TouchableOpacity

                        style={{
                            borderRadius: 50,
                            backgroundColor: '#587765',
                            padding: 20

                        }}
                    >
                        <Text style={[styles.topscreentext, { color: 'white' }]}>Kitchen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("tab")}
                        style={{
                            borderRadius: 50,
                            // backgroundColor:'#587765',
                            padding: 20,
                            paddingHorizontal: 38,
                        }}
                    >
                        <Text style={[styles.topscreentext, { color: 'black' }]}>Farm</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.navtab}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("toptabv")}
                >
                    <Text style={styles.navtabtext}>Vegetable</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("toptabf")}
                >
                    <Text style={styles.navtabtext}>Fruits</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("toptabs")}
                >
                    <Text style={styles.navtabtext}>Spices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate("toptaba")}
                >
                    <Text style={styles.navtabtext}>Atta</Text>
                </TouchableOpacity>
                </View>
                
                {/* product display */}
                <FlatList
                    scrollEnabled={false}
                    numColumns={2}
                    data={productapi}
                    columnWrapperStyle={styles.productstyle}
                    renderItem={({ item }) => {
                        return (

                            <TouchableOpacity
                                style={styles.productbox}
                                onPress={() => navigation.navigate("display",
                                    {
                                        productid: item.id
                                    })
                                }>
                                <Image
                                    style={styles.primg}
                                    source={item.image} />
                                <Text style={styles.producttext}>{item.name}</Text>

                            </TouchableOpacity>
                        )
                    }}

                />


            </ScrollView>
        </SafeAreaView></>
    )
}

const styles = StyleSheet.create({
    topscreen: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    topscreentext: {
        color: 'black',
        fontSize: 30,
        borderRadius: 40,
        borderColor: '#587765',

    },
    navtab:{
        marginVertical:10,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#D2E1D2'
        

    },
    navtabtext:{
        color:'black',
        fontSize:20,
        borderColor:'black',
       
        padding:5


    },
    offerproduct: {
        flex: 1,
        flexDirection: 'row'
    },
    primg: {
        height: 130,
        width: 160,
        objectFit: 'scale-down',
        borderRadius: 20
    },
    productbox: {
        backgroundColor: 'white',
        borderRadius: 20
    },
    productstyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginVertical: 10

    },
    producttext: {
        color: 'black',
        fontSize: 20,
        margin: 10,
        marginHorizontal: 20,

        // flex:1,
        // flexWrap:'wrap'
    }
})

export default Kitchenhome;