import React,{Component} from 'react';
import {View,ActivityIndicator,ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './styles';
import LogoComponent from './login_logo';
import LoginForm from './login-form';
import {getTokens,setTokens} from './types';
import {autoSignIn} from './actions';

class LoginComponent extends Component {
    state = {loading: true};

    componentDidMount(){
        getTokens(values => {
            if(values[0][1]===null){this.setState({loading: false})}
            else {
                this.props.autoSignIn(values[1][1]).then(() => {
                    if(!this.props.User.auth.token){
                        this.setState({loading: false});
                    }
                    else{
                        setTokens(this.props.User.auth,() => {this.props.navigation.navigate('App')});
                    }
                });
            }
        })
    }

    render(){
        if (this.state.loading) {
            return(<View style={styles.loading}>
                <ActivityIndicator style={{backgroundColor: 'yellow',width:'100%',height:'100%'}} />
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

function mapStateToProps(state){
    return {
        User: state.User
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({autoSignIn},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);