import React from "react";
import {View, StyleSheet, Image} from 'react-native';




const Imagefile = () => {
    return(
        <View >
            <Image style={styles.Styleimage} source={require('../src/product/loginicon.png')}></Image>
        </View>
    )
}

// const Tomato = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/tomato.jpg')}></Image>
//         </View>
//     )
// }
// const Potato = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/potato.jpg')}></Image>
//         </View>
//     )
// }
// const Cucumber = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/cuc.jpg')}></Image>
//         </View>
//     )
// }
// const Coriender = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/coriander.jpg')}></Image>
//         </View>
//     )
// }
// const Pumpkin = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/pumpkin.jpg')}></Image>
//         </View>
//     )
// }
// const Lemon = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/lemon.jpg')}></Image>
//         </View>
//     )
// }
// const Ginger = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/gimger.jpg')}></Image>
//         </View>
//     )
// }
// const Brinjal = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/brinjal.jpg')}></Image>
//         </View>
//     )
// }
// const Capsicum = () => {
//     return(
//         <View >
//             <Image style={styles.Styleimage} source={require('../src/product/capsicum.jpg')}></Image>
//         </View>
//     )
// }
const styles = StyleSheet.create({
    Styleimage:{
        height:100,
        width:65
    }
    
})


export default Imagefile;
// Potato,
// Brinjal,
// Tomato,
// Lemon,

