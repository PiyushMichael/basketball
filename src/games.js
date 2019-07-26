import React,{Component} from 'react';
import {Image,ScrollView,View,Text,TouchableOpacity,Button,ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import Moment from 'moment';
import {getGames} from './actions';
import styles from './styles';
import {LogOut} from './types';

class GamesComponent extends Component {
    componentDidMount(){
        this.props.dispatch(getGames());
    }

    RenderGames = (games) => (
        games ? games.map((game,i) => (<TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('Video',{game})}>
            <View style={styles.gameContainer}>
                <View style={styles.teamContainer}>
                    <Image style={{height: 80, width: 80, resizeMode: 'contain'}} source={{uri: game.awayData.logo}} />
                    <Text style={styles.teamRecord}>{game.awayData.wins} - {game.awayData.loss}</Text>
                </View>
                <View style={styles.teamContainer}>
                    <Text style={styles.gameTime}>{game.time}</Text>
                    <Text>{Moment(game.date).format('d MMMM')}</Text>
                </View>
                <View style={styles.teamContainer}>
                    <Image style={{height: 80, width: 80, resizeMode: 'contain'}} source={{uri: game.localData.logo}} />
                    <Text style={styles.teamRecord}>{game.localData.wins} - {game.localData.loss}</Text>
                </View>
            </View>
        </TouchableOpacity>)) : (<ActivityIndicator style={{backgroundColor: '#e0b700',width:'100%',height:'80%'}} />)
    )

    render(){
        return (<ScrollView><View style={{backgroundColor:'#f0f0f0',flex: 1,flexDirection: 'column',flexWrap: 'nowrap'}}>
            {this.RenderGames(this.props.Games.games)}
            <Button title="Logout" onPress={() => LogOut(this.props)} />
        </View></ScrollView>);
    }
}

function mapStateToProps(state){
    //if(state.Games) console.warn(state.Games);
    return {
        Games: state.Games
    };
};

export default connect(mapStateToProps)(GamesComponent);