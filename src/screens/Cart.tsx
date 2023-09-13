import React, { JSXElementConstructor, ReactElement, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, FlatList, SafeAreaView, Button, ListRenderItemInfo } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removefromcart } from '../redux/actions';
import { useRoute } from '@react-navigation/native';
import Quantity from '../apis/quantityapi';
import Display from './display';



interface DisplayParams {
    selid: any;
}

const Cart = ({ navigation }: { navigation: any }) => {
    const cartdata = useSelector((state: any) => state.reducer);
    const dispatch = useDispatch()
    const route = useRoute()
    const { selid } = route.params as DisplayParams
    
    const select = Quantity.find((item) => {
        return selid === item.id 
    })

    const removeitem = (index: any) => {
        dispatch(removefromcart (index))
    }
console.warn(cartdata)
    return (
        <SafeAreaView>

            <ScrollView >
                <View>
                    <Text style={styles.headertext}>Cart</Text>
                </View>

                {/* product display */}
                <View style={{ marginBottom: 120 }}>

                    <FlatList
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        data={cartdata}
                        renderItem={({ item,index }) => {
                            return (

                                <View style={styles.productbox}>
                                    <Image style={{
                                        height: 105,
                                        width: 105,
                                        objectFit: 'scale-down',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20,


                                    }}
                                        source={item.image} />
                                    <Text style={styles.textstyle}>{item.name}</Text>
                                    <Text style={styles.textstyle}>{item.price}</Text>

                                    <View >
                                        <TouchableOpacity
                                            style={styles.addbutton}>
                                            <Text style={{ color: 'black', textAlign: 'center' }}>{select?.qt2}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                        onPress={() => {removeitem(index)}}
                                            style={styles.removebutton}>
                                            <Text style={{ color: 'white' }}>Remove</Text>
                                        </TouchableOpacity>

                                    </View>


                                </View>

                            )
                        }
                        }

                    />

                    <View style={styles.billbox}>
                        <Text style={styles.billheader}>Bill</Text>
                        <Text style={styles.bill}>Total weight</Text>
                        <Text style={styles.bill}>Total amount</Text>
                        <Text style={styles.bill}>delivery</Text>
                        <Text style={styles.bill}>Subtotal</Text>
                    </View>
                    <View>
                        <Button title='press' onPress={() => navigation.navigate("checkout")} />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headertext: {
        color: 'black',
        fontSize: 40,
        margin: 20
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
    },
    textstyle: {
        color: 'black',
        textAlignVertical: 'center',


    },
    productbox: {
        margin: 10,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#fcde75',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    addbutton: {

        // justifyContent: 'center',
        backgroundColor: '#D2E1D2',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15

    },
    removebutton: {

        // justifyContent: 'center',

        backgroundColor: '#587765',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15

    },
    billbox: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20
    },
    billheader: {
        color: 'black',
        fontSize: 30,
        paddingVertical: 20
    },
    bill: {
        color: 'black',
        fontSize: 15,
        margin: 5,
        marginHorizontal: 30
    }
})
export default Cart;