import * as ActionTypes from './actionTypes';

export const CVT = (state = {
    primary:[],
    secondary: []
},action)=>{
    switch (action.type){
        case ActionTypes.CVT_UPDATE:
            return {...state, primary: state.primary.concat(action.payload.primary), secondary: state.secondary.concat(action.payload.secondary)}
        default:
            return state;
    }
}