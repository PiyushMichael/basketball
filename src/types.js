import {AsyncStorage} from 'react-native';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const FIREBASEURL = 'https://basketball-b8f89.firebaseio.com';
export const APIKEY = 'AIzaSyCpfzCK1DqXsxBbJFCRVaRyK_JRf8RnaT4';
export const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;
export const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;
export const REFRESH_URL = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;
export const AUTO_SIGN_IN = 'AUTO_SIGN_IN';
export const GET_NEWS = 'GET_NEWS';

export const getTokens = (cb) => {
    //check comment in next function
    AsyncStorage.multiGet([
        '@basketball@token',
        '@basketball@refreshToken',
        '@basketball@expireToken',
        '@basketball@uid'
    ]).then(values => {cb(values)});
};

export const setTokens = (values,cb) => {
    const DateNow = new Date();
    const expiration = DateNow.getTime() + (3600*1000);
    //follow conventions in teh following function...
    AsyncStorage.multiSet([
        ['@basketball@token',values.token],
        ['@basketball@refreshToken',values.refToken],
        ['@basketball@expireToken',expiration.toString()],
        ['@basketball@uid',values.uid]
    ]).then(response => {cb()});
};

//    apiKey: "AIzaSyCpfzCK1DqXsxBbJFCRVaRyK_JRf8RnaT4"
//    databaseURL: "https://basketball-b8f89.firebaseio.com"
//  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]