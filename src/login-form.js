import React,{Component} from 'react';
import {View,Text} from 'react-native';
import FormInput from './form-input';

class LoginForm extends Component{
    state ={
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to register',
        hasErrors: false,
        form: {
            email: {
                value: '',
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    isEmail: true
                }
            },
            password: {
                value: '****',
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: 'be',
                valid: false,
                type: "textinput",
                rules: {
                    confirmPass: 'password'
                }
            }
        }
    };

    updateInput = (name,value) => {
        this.setState({hasErrors: false});
        let formCopy = this.state.form;
        formCopy[name].value = value;
        this.setState({form: formCopy});
    };

    confirmPassword = () => (
        this.state.type != 'Login' ?
        <FormInput 
                placeholder="Confirm Password"
                placeholderTextColor="#cecece"
                type={this.state.form.confirmPassword.type}
                value={this.state.form.confirmPassword.value}
                onChangeText={value => this.updateInput("confirmPassword",value)}
                secureTextEntry
        />:null
    );

    formHasErrors = () => (
        this.state.hasErrors ?
        <Text>lulz kat gaya</Text>:null
    );

    render(){
        return (<View>
            <FormInput
                placeholder="Enter Email"
                placeholderTextColor='#cecece'
                type={this.state.form.email.type}
                value={this.state.form.email.value}
                autoCapitalize={'none'}
                keyboardType={"email-address"}
                onChangeText={value => this.updateInput("email",value)}
            />
            <FormInput 
                placeholder="Enter Password"
                placeholderTextColor="#cecece"
                type={this.state.form.password.type}
                value={this.state.form.password.value}
                onChangeText={value => this.updateInput("password",value)}
                secureTextEntry
            />
            {this.confirmPassword()}
            {this.formHasErrors()}
        </View>);
    }
}

export default LoginForm;