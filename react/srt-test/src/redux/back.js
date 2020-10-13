import * as ActionTypes from './actionTypes';

export const Back = (state = {
    rpm:[],
    speed: [],
    isLoading:false
},action)=>{
    switch (action.type){
        case ActionTypes.BACK_UPDATE:
            return {...state, rpm: state.rpm.concat(action.payload.rpm), speed: state.speed.concat(action.payload.speed)}
        default:
            return state;
    }
}