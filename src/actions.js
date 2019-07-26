import axios from 'axios';
import {
    SIGN_IN,SIGN_UP,AUTO_SIGN_IN,GET_NEWS,GET_GAMES,
    SIGNIN_URL,SIGNUP_URL,FIREBASEURL,REFRESH_URL,convertFirebase,findTeamData
} from './types';

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

export function getNews(){
    const request = axios({
        method: 'GET',
        url: `${FIREBASEURL}/news.json`
    }).then(response => {
        const articles = [];
        for(let key in response.data){
            articles.push({
                ...response.data[key],
                id: key,

            })
        }
        return articles;
    });
    
    return {
        type: GET_NEWS,
        payload: request
    };
}

export function getGames(){
    const promise = new Promise((resolve,reject) => {
        const request = axios({
            method: 'GET',
            url: `${FIREBASEURL}/teams.json`
        }).then(response => {
            const teams = convertFirebase(response.data);
            axios({
                method: 'GET',
                url: `${FIREBASEURL}/games.json`
            }).then(response => {
                const games = convertFirebase(response.data);
                const responseData = [];
                for(let key in games){
                    responseData.push({
                        ...games[key],
                        awayData: findTeamData(games[key].away,teams),
                        localData: findTeamData(games[key].local,teams)
                    });
                }
                resolve(responseData);
            })
        }).catch(e => {reject(false)});
    });
    
    return {
        type: GET_GAMES,
        payload: promise
    };
}