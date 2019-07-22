import React,{Component} from 'react';
import {View,ActivityIndicator,ScrollView} from 'react-native';
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
            return (<ScrollView>
                <View style={styles.container}>
                    <LogoComponent />
                    <LoginForm goNext={() => this.props.navigation.navigate('App')} />
                </View>
            </ScrollView>);
        }
    }
}

export default LoginComponent;