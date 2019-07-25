import React,{Component} from 'react';
import {View,Text,ScrollView,Image} from 'react-native';
import Moment from 'moment';
import styles from './styles';

class ReaderComponent extends Component {
    formatPara(content){
        const text = content.replace(/<p>/g,"").replace(/<\/p>/g,"");
        return text;
    }

    render(){
        const article = this.props.navigation.state.params.item;
        return (<ScrollView style={{backgroundColor: '#f0f0f0'}}><View>
            <Image style={{height: 250}} source={{uri: article.image}} resizeMode="cover" />
            <View style={styles.articleContainer}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleData}>{article.team} - Posted at {Moment(article.date).format('d MMMM')}</Text>
                <View style={styles.articleContent}>
                    <Text style={styles.articleText}>{this.formatPara(article.content)}</Text>
                </View>
            </View>
        </View></ScrollView>);
    }
}

export default ReaderComponent;