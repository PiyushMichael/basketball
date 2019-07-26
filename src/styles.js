import {StyleSheet,Platform} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d428a',
        padding: 50
    },
    loading: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#eaeaea',
        fontSize: 16,
        padding: 5,
        marginTop: 10
    },
    errorContainer: {
        marginTop: 30,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f44336'
    },
    errorLabel: {
        color: '#fff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    button: {
        ...Platform.select({
            ios:{
                marginBottom: 0
            },
            android:{
                marginVertical: 10
            }
        })
    },
    cardContainer: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#dddddd',
        shadowOffset: {
            width:0,
            height:2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2
    },
    contentCard: {
        borderWidth: 1,
        borderColor: '#dddddd'    
    },
    titleCard: {
        color: '#232323',
        fontSize: 16,
        padding: 5,
        fontFamily: 'Roboto-Bold'
    },
    bottomCard: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e6e6e6',
        padding: 5
    },
    bottomCardTeam: {
        color: '#828282',
        fontSize: 12,
        fontFamily: 'Roboto-Bold'
    },
    bottomCardDate: {
        color: '#828282',
        fontSize: 12,
        fontFamily: 'Roboto-Light'
    },
    articleContainer: {
        padding: 10,
    },
    articleTitle: {
        fontSize: 23,
        color: '#323232',
        fontFamily: 'Roboto-Bold'
    },
    articleData: {
        fontSize: 12,
        color: '#828282',
        fontFamily: 'Roboto-Light'
    },
    articleContent: {
        marginTop: 30
    },
    articleText: {
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'Roboto-Light'
    },
    gameContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        shadowColor: '#dddddd',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        borderRadius: 2
    },
    teamContainer: {
        width: '33%',
        height: 100,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    teamRecord: {
        fontFamily: 'Roboto-Light',
        fontSize: 12
    },
    gameTime: {
        fontFamily: 'Roboto-Bold',
        fontSize: 15
    }
});

export default styles;