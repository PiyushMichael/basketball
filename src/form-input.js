import React,{Component} from 'react';
import {View,Text,TextInput,Picker} from 'react-native';
import styles from './styles';

const FormInput = (props) => {
    let template = null;
    switch(props.type){
        case "textinput":
            template = (
                <TextInput {...props}
                style={[styles.input,props.overrideStyle]} />
            );
            break;
        default: return template;
    }
    return <View>{template}</View>
};

export default FormInput;