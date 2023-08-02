import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Home = () => {
    const [nonselect, selected] = useState({})
    


    return (
        

        <><ScrollView>
            <View style={styles.topnav}>
                <TouchableOpacity>
                    <Text style={styles.toptext}>Kitchen</Text>

                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[styles.toptext,{paddingHorizontal:37}]}>Farm</Text>

                </TouchableOpacity>
            </View>
            <View style={styles.middlenav}>
                <TouchableOpacity
                    // onPress={() => selected()}
                >
                    <Text style={styles.Textbar}>Vegetable</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Fruit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selected('styles.btcolor')}
                >
                    <Text style={styles.Textbar}>Spices</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => selected('styles.btcolor')}
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
            {/* BOTTOM NAVBAR */}
            <View style={{  }}>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../src/icons/homew.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../src/icons/searchw.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../src/icons/cart.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.img} source={require('../src/icons/menuw.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View></>

    )
}

const styles = StyleSheet.create({
    topnav:{
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-around',
        

    },
    toptext:{
        color:'white',
        fontSize:30,
        backgroundColor:'#587765',
        borderRadius:30,
        paddingHorizontal:20,
        paddingVertical:10,
    },
    Textbar: {
        color: 'black',
        fontSize: 20,
        paddingVertical: 10,
        // borderWidth:2,
    },
    middlenav: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical:10,
        backgroundColor:'#D2E1D2'

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
        justifyContent: 'space-around',
        backgroundColor: 'red',
        borderWidth: 5,
        borderColor: 'black'


    },
    btcolor: {
        borderBottomWidth: 5,
        borderColor: 'green',
        color: 'green'
    },
    container: {
        backgroundColor: '#587765',
        // marginVertical: 20,
        // paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical:10,
        borderTopStartRadius:25,
        borderTopEndRadius:25,
    },
    img: {
        
        height: 50,
        width: 50,
        

    }

})

export default Home;