import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, Button } from 'react-native';
import Home from './home';


const Otp = ({navigation}: {navigation: any}) => {
    return (
        <><View style={{ alignItems: 'center', marginTop: 40 }}>
            <Image
                style={{ height: 110, width: 190 }}
                source={require('../icons/logo-r.png')}></Image>


        </View>
            <View>
                <Text style={styles.headertext1}>Otp</Text>
                <TextInput
                    style={styles.inputtext}
                    inputMode='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>

            <TouchableOpacity
                style={styles.img}

                onPress={() => navigation.navigate("home")}
            >
                <Image
                    style={{ height: 95, width: 95 }}
                    source={require('../icons/loginicon.png')}
                ></Image>
            </TouchableOpacity></>
            
    
    )

}

const styles = StyleSheet.create({
    img: {
        // position:'absolute',
        marginTop: 50,
        marginHorizontal: 50,
        flex: 1,
        alignItems: 'flex-end'
    },
    headertext1: {
        fontSize: 70,
        color: '#000000',
        marginHorizontal: 50,
        marginTop: 140,

    },
    inputtext: {
        borderRadius: 10,
        marginHorizontal: 50,
        marginBottom: 110,
        marginTop: 50,
        padding: 10,
        color: 'black',
        backgroundColor: '#D2E1D2'
    }
})
export default Otp;