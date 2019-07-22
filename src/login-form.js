import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import FormInput from './form-input';
import styles from './styles';

class LoginForm extends Component{
    state ={
        type: 'Login',
        action: 'Login',
        actionMode: 'I want to register',
        hasErrors: true,
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
                value: '',
                valid: false,
                type: "textinput",
                rules: {
                    isRequired: true,
                    minLength: 6
                }
            },
            confirmPassword: {
                value: '',
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

    submitUser = () => {};

    changeActionMode = () => {
        const type = this.state.type;
        this.setState({
            type: type === 'Login' ? 'Register' : 'Login',
            action: type === 'Login' ? 'Register' : 'Login',
            actionMode: type === 'Login' ? 'I want to sign  in' : 'I want to register'
        });
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
        <View style={styles.errorContainer}>
            <Text style={styles.errorLabel}>lulz kat gaya</Text>
        </View>:null
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
            <View style={{marginTop: 20}}>
                <View style={styles.button}><Button title={this.state.action} onPress={this.submitUser} /></View>
                <View style={styles.button}><Button title={this.state.actionMode} onPress={this.changeActionMode} /></View>
                <View style={styles.button}><Button title={"I'll do it later"} onPress={() => this.props.goNext()} /></View>
            </View>
        </View>);
    }
}

export default LoginForm;