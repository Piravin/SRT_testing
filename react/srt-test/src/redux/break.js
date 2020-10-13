import * as ActionTypes from './actionTypes';

export const Break = (state = {
    isBreaking:[],
    distance: []
},action)=>{
    switch (action.type){
        case ActionTypes.BREAK_UPDATE:
            return {...state, isBreaking: state.isBreaking.concat(action.payload.isBreaking), distance: state.distance.concat(action.payload.distance)}
        default:
            return state;
    }
}