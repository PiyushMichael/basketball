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
        padding: 5
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
        fontWeight: 'bold'
    },
    bottomCardDate: {
        color: '#828282',
        fontSize: 12
    }
});

export default styles;