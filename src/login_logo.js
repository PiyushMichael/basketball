import React,{Component} from 'react';
import {View,Image} from 'react-native';
import Logo from '../assets/nba.png';

const LogoComponent = () => (
    <View>
        <Image 
        source={Logo}
        resizeMode={'contain'}
        style={{width: 225, height: 125}} />
    </View>
);

export default LogoComponent;