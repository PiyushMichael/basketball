import React,{Component} from 'react';
import {View,Text,Platform} from 'react-native';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
/*----------------------*/
import styles from './src/styles';
import LoginComponent from './src/login';
import NewsComponent from './src/news';
import GamesComponent from './src/games';
import ReaderComponent from './src/reader';
import PlayerComponent from './src/player';

const AppStack = createBottomTabNavigator({
  News: NewsComponent,
  Games: GamesComponent
});

const AuthStack = createStackNavigator({
  Login: LoginComponent
},{
  headerMode: 'none'
});

const Tabbed = createAppContainer(AuthStack);


const RootNavigator = createAppContainer(createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
  },{
    initialRouteName: 'Auth'
  }));

class App extends Component {
  render(){
    //const Nav = RootNavigator();

    return (<View style={styles.container}>
      <Roo />
    </View>);
  }
}

export default RootNavigator;