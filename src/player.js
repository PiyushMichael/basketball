//nav to Video
import React,{Component} from 'react';
import {View,Text} from 'react-native';

class PlayerComponent extends Component {
    render(){
        return <View><Text>play videos</Text><Text>{this.props.navigation.state.params.game.play}</Text></View>
    }
}

export default PlayerComponent;