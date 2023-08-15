import React, { JSXElementConstructor, ReactElement, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, FlatList, SafeAreaView, Button, ListRenderItemInfo } from 'react-native';
import Home from './Kitchenhome';
import { useSelector } from 'react-redux';
import fruits from '../apis/fruits';
import { State } from 'react-native-gesture-handler';
import rootreduser from '../redux/rootreduser';
import store from '../redux/store';
import { useRoute } from '@react-navigation/native';
import productapi from '../apis/productapi';





const Cart = ({ navigation }: { navigation: any }) => {
    const route = useRoute()
    // const cartItems = useSelector((state: any) => state.cart);


    const cartdata = useSelector((state: any) => state.reducer);
    console.warn(cartdata)
    const select = productapi.find((item) => {
        return cartdata === item.id
    })
    console.warn(select)

    // const renderItem = ({ item }:any) => (
    //     <View style={{ padding: 10 }}>
    //         <Text>{item.name} - {item.price}</Text>
    //     </View>
    // );



    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text style={styles.headertext}>Cart</Text>
                    <Text style={{ backgroundColor: 'gray', fontSize: 30, color: 'red' }}>{select?.id}</Text>
                    
                </View>

                {/* <FlatList
                    data={cartItems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()} // Assuming you have a unique ID for each item


                /> */}


                <FlatList
                    scrollEnabled={false}
                    numColumns={1}
                    data={cartdata}
                    // columnWrapperStyle={styles.productstyle}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Image
                                    style={{ height: 90, width: 90 }}
                                    source={select?.image} />
                                <Text style={{ backgroundColor: 'gray', fontSize: 30, color: 'red' }}>{select?.name}</Text>
                            </View>


                        )

                    }}


                />

                <View>


                    <Button title='press' onPress={() => navigation.navigate("checkout")} />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headertext: {
        color: 'black',
        fontSize: 40
    },
    billtext: {
        color: 'black',
        fontSize: 20
    },
    productstyle: {
        margin: 10,
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',


    }
})
export default Cart;