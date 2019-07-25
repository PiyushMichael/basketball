import {combineReducers} from 'redux';
import {SIGN_IN,SIGN_UP,AUTO_SIGN_IN,GET_NEWS} from './types';

function user_reducer(state={},action){
    switch(action.type){
        case SIGN_IN: return {
            ...state,auth: {
                uid: action.payload.localId || false,
                token: action.payload.idToken || false,
                refToken: action.payload.refreshToken || false
            }
        }
        case SIGN_UP: return {
            ...state,auth: {
                uid: action.payload.localId || false,
                token: action.payload.idToken || false,
                refToken: action.payload.refreshToken || false
            }
        }
        case AUTO_SIGN_IN: return {
            ...state,auth: {
                uid: action.payload.user_id || false,
                token: action.payload.id_token || false,
                refToken: action.payload.refresh_token || false
            }
        }
        default: return state;
    }
};

function news_reducer(state={},action){
    switch(action.type){
        case GET_NEWS: return {
            ...state,articles: action.payload
        };
        default: return state;
    }
};

export const reducers = combineReducers({
    User: user_reducer,
    News: news_reducer
});