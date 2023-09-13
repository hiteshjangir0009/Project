import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList, Button, Dimensions } from 'react-native';
import { RouteProp, useRoute } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { addquantity, addtocart } from '../redux/actions';
import productapi from '../apis/productapi';
import Modal from "react-native-modal";
import Quantity from '../apis/quantityapi';


interface DisplayParams {
    productid: any;
}

const { height, width } = Dimensions.get("window")



const q1 = () => {
    return (
        <View>
            <Text>
                500 g
            </Text>
        </View>
    )
}
const q2 = () => {
    return (
        <View>
            <Text>
                1 kg
            </Text>
        </View>
    )
}


const Display = ({ navigation }: { navigation: any }) => {
    const [modal, setmodel] = useState(false)
    const route = useRoute()
    const { productid } = route.params as DisplayParams
    const dispatch = useDispatch()


    const selected = productapi.find((item) => {
        return productid === item.id
    })
   
    const handleAddToCart = (selected:any) => {

        dispatch(addtocart(selected))
        console.warn(handleAddToCart)
        // dispatch(addquantity(select))

    }
    // // const handlequaltity = (item:any) => {

    //     // dispatch(addtocart(select))
    //     dispatch(addquantity(item))

    // } 

   
    return (

        <><ScrollView>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={styles.productImage}
                    source={selected?.image}
                />
            </View>
            <View style={styles.pricebox}>
                <Text style={{ color: 'black', fontSize: 30 }}>{selected?.name} </Text>
                <Text style={styles.productprice}>{selected?.price}/kg</Text>
            </View>
            <TouchableOpacity
                onPress={()=>{setmodel(true)}}
               
            >
                <Text style={styles.button}>Add to Basket</Text>
            </TouchableOpacity>
            <View style={styles.detailbox}>
                <Text style={{ color: 'black', fontSize: 25, marginBottom: 10 }}>Health Benefits :-</Text>
                <Text style={{ color: 'black', fontSize: 15 }}>{selected?.details}</Text>
            </View>
            {/* <Button title='press' onPress={() => setmodel(true)} /> */}

        </ScrollView>
            <View>
                <Modal
                    isVisible={modal}
                    onBackButtonPress={()=>setmodel(false)}
                    onSwipeComplete={() => setmodel(false)}
                    swipeDirection="down"
                    style={{ width: width, marginHorizontal: 0, marginBottom: 0 }}

                >
                    <View style={{

                        position: 'absolute',
                        backgroundColor: 'white',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        bottom: 0,
                        height: height / 3,
                        width: width,
                    }}>
                        <View style={{ alignItems: 'center' }}>
                             <Image
                                style={{ height: 30, width: 60 }}
                                source={require('../icons/line.png')} />
                        </View> 
                        <View>
                            <TouchableOpacity
                            
                                onPress={() => {handleAddToCart(selected);}}
                                
                            >
                                <Text style={{ color: 'black' }}>{selected?.qt+'1'} </Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                onPress={() => handleAddToCart()}
                            >
                                <Text style={{ color: 'black' }}>{selected?.qt}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleAddToCart()}
                            >
                                <Text style={{ color: 'black' }}>{selected?.qt}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => handleAddToCart()}
                                
                            >
                                <Text style={{ color: 'black' }}>{selected?.qt}</Text>
                            </TouchableOpacity> */}
                        </View> 
                        <FlatList
                            data={Quantity}
                            renderItem={({ item }) => {
                                return (
                                    <>
                                        <TouchableOpacity
                                        onPress={()=>{{navigation.navigate("cart",{selid:item.id})}}}

                                            style={{
                                                backgroundColor: 'gray',
                                                margin: 10,
                                                marginHorizontal: 30,
                                                marginTop: 5,
                                                borderRadius: 20
                                            }}
                                        >
                                            <View style={{ 
                                                flexDirection: 'row', 
                                                justifyContent: 'space-evenly',
                                                 margin: 10 }}>
                                                <Text style={styles.sheettext}>{item.qt2}</Text>
                                                
                                            </View>

                                        </TouchableOpacity></>

                                )
                            }}
                        />

                    </View>
                </Modal>
            </View>
        </>


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

    },
    sheettext: {
        color: 'black',
        padding: 10,
        fontSize: 25
        // backgroundColor: 'red'


    }

})
export default Display;