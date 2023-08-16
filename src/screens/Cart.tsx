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
import { Vege } from './product';



const image =[
    {
        id: '1',
        image: require('../product/vegetable/tomato.jpg'),
        name: 'Tamato',
        price: '₹125',
        details: ("Tomato Hybrids are high-quality fruits compared to desi local tomatoes Tomatoes contain Vitamin C,K. lycopene, an antioxidant that reduces the risk of cancer and heart-diseases. They protect the eyes from light induced damage.Essential for pregnant women these tomatoes protect infants against neural tube defects."),
        quantity: 0
    },
    {
        id: '2',
        image: require('../product/vegetable/potato.jpg'),
        name: 'Potato',
        price: '₹50',
        details: ("Low in calories and high on flavor, these pocket-sized potatoes are a must-have in your kitchen. This pesticide-free safe to eat baby potatoes are naturally fat-free. They are a good source of fiber which is essential to maintain body weight and is good for digestion."),
        quantity: 0
    },
]

const Cart = ({ navigation }: { navigation: any }) => {
    const route = useRoute()

    const cartdata = useSelector((state: any) => state.reducer);
    // console.warn(cartdata)
    const select = productapi.find((item) => {
        return cartdata === item.id
    })
    console.warn(select)


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text style={styles.headertext}>Cart</Text>
                    

                </View>



                <FlatList
                    scrollEnabled={false}
                    numColumns={1}
                    data={cartdata}
                    // columnWrapperStyle={styles.productstyle}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                {/* <Image source={()}/> */}
                                <Text style={{ backgroundColor: 'gray', fontSize: 30, color: 'red' }}>{select?.id}</Text>
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