import React,{Component} from 'react';
import {View,Text,ScrollView,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Moment from 'moment';
import {getNews} from './actions';
import styles from './styles';

class NewsComponent extends Component {
    componentDidMount(){
        this.props.dispatch(getNews());
    }

    renderArticle = (news) => (
        news.articles ?
            news.articles.map((item,i) => (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Article',{item})} key={i}><View style={styles.cardContainer}>
                    <View><Image 
                        source={{uri: item['image']}} 
                        style={{height:150, justifyContent: "space-around"}}
                        resizeMode="cover"
                    /></View>
                    <View style={styles.contentCard}>
                        <Text style={styles.titleCard}>{item['title']}</Text>
                        <View style={styles.bottomCard}>
                            <Text style={styles.bottomCardTeam}>{item['team']} - </Text>
                            <Text style={styles.bottomCardDate}>{Moment(item['date']).format('d MMMM')}</Text>
                        </View>
                    </View>
                </View></TouchableOpacity>
            ))
        : null
    )
    
    render(){
        return (<ScrollView><View style={{backgroundColor: '#f0f0f0'}}>
            {this.renderArticle(this.props.News)}
        </View></ScrollView>);
    }
}

function mapStateToProps (state){
    //console.warn(state);
    return {
        News: state.News
    };
}

export default connect(mapStateToProps)(NewsComponent);