import {combineReducers} from 'redux';
import {SIGN_IN,SIGN_UP} from './types';

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
        default: return state;
    }
};

export const reducers = combineReducers({
    User: user_reducer
});