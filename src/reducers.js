import {combineReducers} from 'redux';

function user_reducer(state={},action){
    switch(action.type){
        case 'SIGN_IN': return state;
        default: return state;
    }
};

export const reducers = combineReducers({
    User: user_reducer
});