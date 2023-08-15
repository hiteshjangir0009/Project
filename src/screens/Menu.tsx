import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, FlatList } from 'react-native';
import Home from './Kitchenhome';

const Menu =()=>{
    return(
        <ScrollView>
            <View>
                <Text style={styles.headertext}>Menu</Text>
            </View>
            <View>
                
                



            </View>
            <View>
                <Text style={styles.billtext}></Text>
                <Text style={styles.billtext}></Text>
                <Text style={styles.billtext}></Text>
                <Text style={[styles.billtext,{fontSize:10}]}></Text>
            </View>
        </ScrollView>
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
export default Menu;