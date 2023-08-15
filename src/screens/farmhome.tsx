import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from 'react-router-dom';
import products from '../apis/productapi';
import Cart from './Cart';
import Menu from './Menu';




const Farmhome = ({navigation}: {navigation: any}) => {

    return (
        <><SafeAreaView>
        <ScrollView 
        style={{ 
            backgroundColor: '#EEEEEE',
            padding:StatusBar.currentHeight
     }}>
            <View style={styles.topscreen}>
                <TouchableOpacity
                onPress={()=>navigation.navigate("tabs")}
                style={{
                    borderRadius:50,
                    // backgroundColor:'#587765',
                    padding:20
                
                }}
                >
                    <Text style={[styles.topscreentext,{color:'black'}]}>Kitchen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                    borderRadius:50,
                    backgroundColor:'#587765',
                    padding:20,
                    paddingHorizontal:38,
                }}
                >
                    <Text style={[styles.topscreentext,{color:'white'}]}>Farm</Text>
                </TouchableOpacity>

            </View>
<View>
    <Text style={{color:'black'}}>this is farm</Text>
</View>
            {/* product display */}
            <FlatList
            scrollEnabled={false} 
                numColumns={2}
                data={products}
                columnWrapperStyle={styles.productstyle}
                renderItem={({ item }) => {
                    return (

                        <TouchableOpacity
                            style={styles.productbox}
                            onPress={() => navigation.navigate("display",
                                {
                                    productid: item.id,
                                    productname: item.name,
                                    productprice: item.price,
                                    productdetails: item.details
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
    topscreen:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    topscreentext:{
        color: 'black',
        fontSize:30,
        borderRadius:40,
        borderColor:'#587765',

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

export default Farmhome;