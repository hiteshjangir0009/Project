import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, FlatList,SafeAreaView } from 'react-native';
import Home from './home';

const Cart =()=>{
    return(
        <SafeAreaView>

        <ScrollView>
            <View>
                <Text style={styles.headertext}>Cart</Text>
            </View>
            
            <View>
                <Text style={styles.billtext}> hii</Text>
                <Text style={styles.billtext}> yiu</Text>
                <Text style={styles.billtext}>yes</Text>
                <Text style={[styles.billtext,{fontSize:10}]}>no</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    headertext:{
        color:'black',
        fontSize:40
    },
    billtext:{
        color:'black',
        fontSize:20
    }
})
export default Cart;