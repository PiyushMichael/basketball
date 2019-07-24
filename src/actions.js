import axios from 'axios';
import {SIGN_IN,SIGN_UP,SIGNIN_URL,SIGNUP_URL,FIREBASEURL,REFRESH_URL,AUTO_SIGN_IN} from './types';

export const signIn = (data) => {
    const request = axios({
        method:'POST',
        url:SIGNIN_URL,
        data:{
            email:data.email,
            password:data.password,
            returnSecureToken:true
        },
        header:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        //console.warn(response);
        return response.data
    });

    return {
        type:SIGN_IN,
        payload:request
    }
}

export function signUp(data){
    const request = axios({
        method:'POST',
        url:SIGNUP_URL,
        data:{
            email:data.email,
            password:data.password,
            returnSecureToken:true
        },
        header:{
            "Content-Type":"application/json"
        }
    }).then(response=>{
        //console.warn(response);
        return response.data
    });

    return {
        type:SIGN_UP,
        payload:request
    }
}

export const autoSignIn = (refToken) => {
    const request = axios({
        method:'POST',
        url:REFRESH_URL,
        data: "grant_type=refresh_token&refresh_token="+refToken,
        header:{
            "Content-Type":" application/x-www-form-urlencoded "
        }
    }).then(response => {
        return response.data;
    }).catch(e => {return false});

    return {
        type: AUTO_SIGN_IN,
        payload: request
    };
}