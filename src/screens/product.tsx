import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import vegetable from '../apis/productapi';
import fruits from '../apis/fruits';
import spices from '../apis/spices';
import atta from '../apis/atta';

const Vege = ({ navigation }: { navigation: any }) => {
    return (
        <><FlatList

            numColumns={2}
            data={vegetable}
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

                        <TouchableOpacity>
                            <Text style={styles.carttext}>Add to cart</Text>
                        </TouchableOpacity>

                    </TouchableOpacity>

                )
            }}

        />
         <View style={styles.navstyle}>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/searchw.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/cart.png')}/>
            </TouchableOpacity>
        </View></>
    )
}
const Fruit = ({ navigation }: { navigation: any }) => {
    return (
        <><FlatList

            numColumns={2}
            data={fruits}
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
                        <TouchableOpacity>
                            <Text style={styles.carttext}>Add to cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}

        />
        <View style={styles.navstyle}>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/searchw.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/cart.png')}/>
            </TouchableOpacity>
        </View></>
    )
}
const Spice = ({ navigation }: { navigation: any }) => {
    return (
        <><FlatList
            scrollEnabled={false}
            numColumns={2}
            data={spices}
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
                        <TouchableOpacity>
                            <Text style={styles.carttext}>Add to cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}

        />
         <View style={styles.navstyle}>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/searchw.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/cart.png')}/>
            </TouchableOpacity>
        </View></>
    )
}
const Flour = ({ navigation }: { navigation: any }) => {
    return (
        <><FlatList
            scrollEnabled={false}
            numColumns={2}
            data={spices}
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
                        <TouchableOpacity>
                            <Text style={styles.carttext}>Add to cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}

        />
         <View style={styles.navstyle}>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/searchw.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={styles.navicon}
                source={require('../icons/cart.png')}/>
            </TouchableOpacity>
        </View></>
    )
}


const styles = StyleSheet.create({

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
    },
    carttext: {
        color: 'black',
        backgroundColor: '#D2E1D2',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    navstyle:{
        flexDirection:'row',
        justifyContent:'space-around'
        ,backgroundColor:'#587765',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        paddingVertical:10,
        elevation:1
    },
    navicon:{
        height:40,
        width:40

    }
})

export { Vege, Fruit, Spice, Flour };