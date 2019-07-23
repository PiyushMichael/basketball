import axios from 'axios';
import {SIGN_IN,SIGN_UP,SIGNIN_URL,SIGNUP_URL,FIREBASEURL,REFRESH} from './types';

export const signIn = () => {
    return {
        type: SIGN_IN,
        payload: {
            email: 'piyush',
            token: 'dskjbvhdsvfbhd'
        }
    };
};
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
        console.warn(response);
        return response.data
    });

    return {
        type:SIGN_UP,
        payload:request
    }
}