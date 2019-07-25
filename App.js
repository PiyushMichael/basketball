import React,{Component} from 'react';
import {Image} from 'react-native';
import {createSwitchNavigator,createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
/*----------------------*/
import LoginComponent from './src/login';
import NewsComponent from './src/news';
import GamesComponent from './src/games';
import ReaderComponent from './src/reader';
import PlayerComponent from './src/player';
import LogoImg from './assets/nba.png';

const Logo = () => (
  <Image 
    source={LogoImg} 
    style={{width: 70, height: 31}} 
    resizeMode="contain" 
  />
);

const headerConfiguration = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#001338'
    },
    headerTintColor: 'white',
    headerTitle: Logo
  }
};

const NewsStack = createStackNavigator({
  News: NewsComponent,
  Article: ReaderComponent
},headerConfiguration);

const GamesStack = createStackNavigator({
  Games: GamesComponent,
  Video: PlayerComponent
},headerConfiguration);

const AppStack = createBottomTabNavigator({
  NewsPage: NewsStack,
  GamesPage: GamesStack
},{
  tabBarOptions: {
    activeTintColor: '#fff',
    showLabel: false,
    activeBackgroundColor: '#00194b',
    inactiveBackgroundColor: '#001338',
    style: {
      backgroundColor: '#001338'
    }
  },
  initialRouteName: 'NewsPage',
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon:({focused,horizontal,tintColor}) => {
      const {routeName} = navigation.state;
      let IconName;
      switch(routeName){
        case 'NewsPage': IconName = 'ios-paper'
          break;
        case 'GamesPage': IconName = 'ios-tv'
          break;
        default: IconName = 'ios-add'
      }
      //icons are ios-tv and ios-paper
      return <Ionicons name={IconName} size={25} color={tintColor} />
    }
  })
});

const AuthStack = createStackNavigator({
  Login: LoginComponent
},{
  headerMode: 'none'
});

const RootNavigator = createAppContainer(createSwitchNavigator({
    App: AppStack,
    Auth: AuthStack
  },{
    initialRouteName: 'Auth'
  }));

export default RootNavigator;