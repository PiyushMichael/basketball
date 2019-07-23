import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormInput from './form-input';
import styles from './styles';
import ValidationRules from './validation-rules';
import {signIn,signUp} from  './actions';

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
        let rules = formCopy[name].rules;
        let valid = ValidationRules(value,rules,formCopy);
        //console.warn(valid);
        formCopy[name].valid = valid;
        this.setState({form: formCopy});
    };

    submitUser = () => {
        let isFormValid = true;
        let formToSubmit ={};
        const formCopy = this.state.form;

        for (let key in formCopy){
            if(this.state.type === 'Login'){
                if(key !== 'confirmPassword'){
                    //console.warn(key+' '+formCopy[key].valid);
                    isFormValid = isFormValid && formCopy[key].valid;
                    formToSubmit[key] = formCopy[key].value;
                }
            }
            else {
                //console.warn(key+' '+formCopy[key].valid);
                if(key !== 'confirmPassword') isFormValid = isFormValid && formCopy[key].valid;
                formToSubmit[key] = formCopy[key].value;
            }
        }

        if(isFormValid){
            if(this.state.type === 'Login'){this.props.signIn(formToSubmit)}
            else{this.props.signUp(formToSubmit)}
        }
        else {this.setState({hasErrors: true})}
    };

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

function mapStateToProps(state){
    console.warn(state);
    return {
        User: state.User
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn,signUp},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);