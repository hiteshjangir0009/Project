import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar } from 'react-native';
import CheckBox from 'react-native-check-box';
import Imagefile from './images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabBar } from '@react-navigation/bottom-tabs';

const Home = () => {
    const [select,selected] = useState("")



    return (

        <ScrollView>
            <View style={styles.box}>
                <TouchableOpacity
                onPress={()=>selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Vegetable</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Fruit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Spices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Atta</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                style={{ paddingVertical: 40, backgroundColor: 'blue' }}
            >

                <View style={styles.offerproduct}>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>
                    <Text style={{ color: 'black', fontSize: 50, }}>hitesh</Text>

                </View>
            </ScrollView>
            <View style={styles.product}>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/tomato.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/potato.jpg')}></Image>
                    <Text>hitesh</Text>
                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/brinjal.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/cuc.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/coriander.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/lemon.jpg')}></Image>
                    <Text>hitesh</Text>
                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/ginger.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/pumpkin.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
            </View>
            <View style={styles.product}>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/AMRED11.jpg')}></Image>
                    <Text>hitesh</Text>

                </View>
                <View style={styles.prbox}>
                    <Image style={{ height: 130, width: 160 }} source={require('../src/product/capsicum.jpg')}></Image>
                    <Text>hitesh</Text>
                </View>
            </View>



        </ScrollView>




    )
}

const styles = StyleSheet.create({
    Textbar: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 20,
        // borderWidth:2,
    },
    box: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 2,
        borderColor: 'black'

    },
    offerproduct: {
        flex: 1,
        flexDirection: 'row'
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 5
    },
    prbox: {
        justifyContent:'space-around',
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: 'black'


    },
    btcolor:{
        borderBottomWidth:5,
        borderColor:'green',
        color:'green'
    }





})

export default Home;