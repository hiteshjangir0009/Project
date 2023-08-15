import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Route, Router } from "react-router-dom";
import Home from './Kitchenhome';
import { RouteProp, useRoute } from "@react-navigation/native";
import products from '../apis/productapi';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/actions';
import productapi from '../apis/productapi';

interface DisplayParams {
    productid: any;
}

const Display = ({ navigation }: { navigation: any }) => {
    const [quantity] = useState("")
    const route = useRoute()
    const { productid } = route.params as DisplayParams

    const selected = productapi.find((item) => {
        return productid === item.id
    })
    const dispatch = useDispatch()


    const handleAddToCart = (selected: any) => {
        
        dispatch(addtocart(selected))
        console.warn(selected)
    }

    return (

        <><ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.productImage}
                    source={selected?.image} />
            </View>
            <View style={styles.pricebox}>
                <Text style={{ color: 'black', fontSize: 30 }}>{selected?.name} </Text>
                <Text style={styles.productprice}>{selected?.price}/kg</Text>
            </View>
            <TouchableOpacity
                onPress={() => handleAddToCart(productid)}
            >
                <Text style={styles.button}>Add to Basket</Text>
            </TouchableOpacity>
            <View style={styles.detailbox}>
                <Text style={{ color: 'black', fontSize: 25, marginBottom: 10 }}>Health Benefits :-</Text>
                <Text style={{ color: 'black', fontSize: 15 }}>{selected?.details}</Text>
            </View>

        </ScrollView></>


    )
}
const styles = StyleSheet.create({
    productImage: {
        flex: 1,
        height: 330,
        width: 360,
        objectFit: 'scale-down',
        marginVertical: 20,
        borderRadius: 50,

    },
    productprice: {
        color: 'white',
        backgroundColor: '#587765',
        fontSize: 30,
        padding: 20,
        borderRadius: 50

    },
    pricebox: {
        flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20
    },
    button: {
        color: 'black',
        fontSize: 25,
        borderRadius: 30,
        backgroundColor: '#fee175',
        marginHorizontal: 30,
        textAlign: 'center',
        padding: 7

    },
    detailbox: {
        marginHorizontal: 30,
        marginTop: 50

    }

})
export default Display;