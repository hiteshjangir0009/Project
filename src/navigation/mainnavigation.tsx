import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import Tabbottomnavigation from './tabbottomnavigation';
import Mainstack from './stacknavigation';

const Mainnavigation = () => {
    return (
        <NavigationContainer>
            <Mainstack/>
        </NavigationContainer>

    )


}
export default Mainnavigation;