import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import Home from './home';




const Login = ({navigation}: {navigation: any}) => {
    const [ischeck, setcheck] = useState(false)
    const [name, setemail] = useState("")
    const [number, setnumber] = useState("")

    const submit = () => {
        if (name == "h" && number == "6") {
            console.warn('hi')
        }
        else { console.warn('no') }
    }
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <><View style={{ alignItems: 'center', marginTop: 40 }}>
                <Image
                    style={{ height: 110, width: 190 }}
                    source={require('../icons/logo-r.png')}></Image>


            </View>
                <View>
                    <Text style={styles.headertext1}>
                        Login
                    </Text>

                    <View>
                        <Text style={styles.text1}>Enter your Name</Text>
                        <TextInput
                            style={styles.inputtext}
                            placeholderTextColor={'gray'}
                            placeholder='hitesh jangir'
                            autoCorrect={false}
                            value={name}
                            onChangeText={(actualdata) => setemail(actualdata)}
                        />
                        <Text style={styles.text1}>Enter Phone No.</Text>
                        <TextInput
                            placeholderTextColor={'gray'}
                            style={styles.inputtext}
                            inputMode='numeric'
                            placeholder='765XXXXXXX'
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={number}
                            onChangeText={(actualdata) => setnumber(actualdata)}
                        />

                    </View>

                    <View style={{ paddingHorizontal: 50 }}>
                        <CheckBox
                            disabled={false}
                            isChecked={ischeck}
                            onClick={() => setcheck(!ischeck)}
                            rightText="Agree to the terms and condition"
                            rightTextStyle={{ color: '#216b39', }}
                        />

                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.img}
                            disabled={!ischeck}
                            onPress={()=>navigation.navigate("otp")}
                        >
                            <Image
                                style={{ height: 95, width: 95 }}
                                source={require('../icons/loginicon.png')}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                </View></>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    headertext1: {
        fontSize: 50,
        color: '#000000',
        marginHorizontal: 50,
        marginTop: 30,
        marginBottom: 10
    },
    text1: {
        fontSize: 25,
        color: '#000000',
        marginHorizontal: 50,
        shadowColor: 'black',
        shadowOpacity: 50,
    },
    inputtext: {

        borderRadius: 10,
        marginHorizontal: 50,
        marginBottom: 50,
        marginTop: 20,
        padding: 10,
        color: 'black',
        backgroundColor: '#D2E1D2'
    },
    img: {
        marginTop: 50,
        marginHorizontal: 50,
        flex: 1,
        alignItems: 'flex-end'
    }
})
export default Login;