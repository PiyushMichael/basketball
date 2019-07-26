//nav to Video
import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {connect} from 'react-redux';
import Video from 'react-native-video';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {LogOut} from './types';

class PlayerComponent extends Component {
    state = {auth: false};

    componentDidMount(){
        if (this.props.User.auth.token) this.setState({auth: true});
    }
    
    render(){
        const game = this.props.navigation.state.params.game;
        if(this.state.auth) return (<View>
            <Video style={styles.videoPlayer} source={{uri: game.play}} />
            <Button title="Logout" onPress={() => LogOut(this.props)} />
        </View>);
        else return (<View style={styles.videoAuth}>
            <Icon name="md-sad" size={160} color="#d5d5d5" />
            <Text style={styles.videoAuthText}>you need to login or signup to view video</Text>
            <Button title="Login/Register" onPress={() => this.props.navigation.navigate('Auth')} />
        </View>);
    }
}

function mapStateToProps(state){
    return {
        User: state.User
    };
}

export default connect(mapStateToProps)(PlayerComponent);