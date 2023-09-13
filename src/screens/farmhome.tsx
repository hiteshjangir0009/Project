import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Touchable, Alert, Image, ScrollView, StatusBar, FlatList, Button, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import spices from '../apis/spices';
import displayapi from '../apis/displayapi';
import vegetableapi from '../apis/vegetable';
import fruits from '../apis/fruits';


const { height, width } = Dimensions.get('screen')

const Kitchenhome = ({ navigation }: { navigation: any }) => {

    const renderfooterveg = () => {
        return (
            <TouchableOpacity
            onPress={() => navigation.navigate("toptabv")}
                style={{ padding: 20 }}
            >
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../icons/loadmore.png')} />
            </TouchableOpacity>
        )
    }
    const renderfooterfru = () => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("toptabf")}
                style={{ padding: 20 }}
            >
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../icons/loadmore.png')} />
            </TouchableOpacity>
        )
    }
    const renderfooterspi = () => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("toptabs")}
                style={{ padding: 20 }}
            >
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../icons/loadmore.png')} />
            </TouchableOpacity>
        )
    }
    return (
        <><SafeAreaView >
            <ScrollView

                style={{
                    backgroundColor: '#EEEEEE',
                    paddingTop: 20,

                }}>
                <View style={styles.topscreen}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("tabs")}
                        style={{
                            borderRadius: 50,
                            // backgroundColor:'#587765',
                            padding: 20

                        }}
                    >
                        <Text style={[styles.topscreentext, { color: 'black' }]}>Kitchen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            borderRadius: 50,
                            backgroundColor: '#587765',
                            padding: 20,
                            paddingHorizontal: 38,
                        }}
                    >
                        <Text style={[styles.topscreentext, { color: 'white' }]}>Farm</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.navtab}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("toptabv")}
                    >
                        <Text style={styles.navtabtext}>Seed</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("toptabf")}
                    >
                        <Text style={styles.navtabtext}>Fertilizer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("toptabs")}
                    >
                        <Text style={styles.navtabtext}>Spices Raw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("toptaba")}
                    >
                        <Text style={styles.navtabtext}>News</Text>
                    </TouchableOpacity>
                </View>

                {/* slide display */}
                <View>

                    <FlatList

                        indicatorStyle='black'
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        horizontal
                        refreshing={true}
                        data={displayapi}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.displayimg}
                                    onPress={() => navigation.navigate("toptabv")}>
                                    <Image
                                        style={styles.displayimg}
                                        source={item.image}
                                    />
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>


                {/* products */}

                <View style={{ marginBottom: 120 }}>

                    {/* vegetable */}

                    <Text style={{
                        color: 'black',
                        fontSize: 23,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}
                    >Vegetables</Text>
                    <FlatList
                        ListFooterComponent={renderfooterveg}

                        ListFooterComponentStyle={{
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginVertical: 40,
                            marginHorizontal: 20
                        }}

                        initialNumToRender={2}

                        horizontal
                        data={vegetableapi}
                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity
                                    style={styles.productbox}
                                    onPress={() => navigation.navigate("display",
                                        {
                                            productid: item.id
                                        })
                                    }>
                                    <Image
                                        style={styles.primg}
                                        source={item.image} />
                                    <Text style={styles.producttext}>{item.name}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />


                    {/* Fruits */}

                    <Text style={{
                        color: 'black',
                        fontSize: 23,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}
                    >Fruits</Text>
                    <FlatList
                        ListFooterComponent={renderfooterfru}

                        ListFooterComponentStyle={{
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginVertical: 40,
                            marginHorizontal: 20
                        }}
                        horizontal

                        data={fruits}

                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity
                                    style={styles.productbox}
                                    onPress={() => navigation.navigate("display",
                                        {
                                            productid: item.id
                                        })
                                    }>
                                    <Image
                                        style={styles.primg}
                                        source={item.image} />
                                    <Text style={styles.producttext}>{item.name}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />


                    {/* Spices */}

                    <Text style={{
                        color: 'black',
                        fontSize: 23,
                        marginHorizontal: 10,
                        marginVertical: 20
                    }}>Spices</Text>
                    <FlatList
                        ListFooterComponent={renderfooterspi}

                        ListFooterComponentStyle={{
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 20,
                            marginVertical: 40,
                            marginHorizontal: 20
                        }}
                        horizontal

                        data={spices}

                        renderItem={({ item }) => {
                            return (

                                <TouchableOpacity
                                    style={styles.productbox}
                                    onPress={() => navigation.navigate("display",
                                        {
                                            productid: item.id
                                        })
                                    }>
                                    <Image
                                        style={styles.primg}
                                        source={item.image} />
                                    <Text style={styles.producttext}>{item.name}</Text>

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>


            </ScrollView>
        </SafeAreaView></>
    )
}

const styles = StyleSheet.create({
    topscreen: {
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    topscreentext: {
        color: 'black',
        fontSize: 30,
        borderRadius: 40,
        borderColor: '#587765',

    },
    navtab: {
        marginVertical: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#D2E1D2'


    },
    navtabtext: {
        color: 'black',
        fontSize: 20,
        borderColor: 'black',

        padding: 5


    },
    offerproduct: {
        flex: 1,
        flexDirection: 'row'
    },
    displayimg: {
        height: height / 5,
        width: width,
        objectFit: 'fill',
        justifyContent: 'space-between'
    },
    primg: {
        height: 130,
        width: 160,
        objectFit: 'scale-down',
        borderRadius: 20

    },
    productbox: {
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 10
    },
    productstyle: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginVertical: 10

    },

    producttext: {
        color: 'black',
        fontSize: 20,
        margin: 10,
        marginHorizontal: 20,
        textAlign: 'center'
    }
})

export default Kitchenhome;