import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image } from 'react-native';
import CheckBox from 'react-native-check-box';




const Login = () => {
    const [ischeck, setcheck] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submit=()=> {
        if(email=="h" && password=="h"){
            console.warn('hii')
        }
        else{console.warn('no')}
    }
    return (
        <><View>
            <Text style={styles.headertext1}>
                Login
            </Text>
            <Text style={styles.headertext2}>
                Hey users for further information
                contact us on mykhetstore@gmail.com
            </Text>
            <View>
                <Text style={styles.text1}>Enter your Name</Text>
                <TextInput
                    style={styles.inputtext}
                    placeholderTextColor={'gray'}
                    placeholder='xyz@gmail.com'
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={(actualdata) => setemail(actualdata)}
                />
                <Text style={styles.text1}>Phone No.</Text>
                <TextInput
                    placeholderTextColor={'gray'}
                    style={styles.inputtext}
                    placeholder='765XXXXXXX'
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(actualdata) => setpassword(actualdata)}
                />

            </View>

            <View style={{ paddingHorizontal: 50 }}>
                <CheckBox
                    disabled={false}
                    isChecked={ischeck}
                    onClick={() => setcheck(!ischeck)}
                    rightText="Agree to the terms and condition"
                    rightTextStyle={{color: 'blue',}}
                />

            </View>
            <View>
                <TouchableOpacity
                    style={styles.img}
                    disabled={!ischeck}
                    onPress={submit}
                >
                    <Image 
                    style={{height:95, width:95}}
                    source={require('../src/product/icons/loginicon.png')}
                    ></Image>
                </TouchableOpacity>
            </View>
        </View></>

    )
}

const styles = StyleSheet.create({
    headertext1: {
        fontSize: 50,
        color: '#000000',
        marginHorizontal: 50,
        marginTop: 30,
    },
    headertext2: {
        fontSize: 20,
        marginHorizontal: 50,
        color: '#117937',
        marginBottom: 50
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
        backgroundColor: '#cecfce'
    },
    img: {
        marginTop: 50,
        marginHorizontal: 50,
        flex: 1,
        alignItems: 'flex-end'
    }
})
export default Login;