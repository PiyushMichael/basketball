import React,{Component} from 'react';
import {View,Text,ActivityIndicator,ScrollView} from 'react-native';
import styles from './styles';
import LogoComponent from './login_logo';
import LoginForm from './login-form';

class LoginComponent extends Component {
    state = {loading: false};

    render(){
        if (this.state.loading) {
            return(<View style={styles.loading}>
                <ActivityIndicator />
            </View>);
        } else {
            return (<ScrollView style={styles.container}>
                <View>
                    <LogoComponent />
                    <LoginForm />
                </View>
            </ScrollView>);
        }
    }
}

export default LoginComponent;