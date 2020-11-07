import * as ActionTypes from './actionTypes';

export const Front = (state = {
    rpm:['2000','2300','2400','2400','2600','2650'],
    speed: [],
    isLoading:false
},action)=>{
    switch (action.type){
        case ActionTypes.FRONT_UPDATE:
            return {...state, rpm: state.rpm.concat(action.payload.rpm), speed: state.speed.concat(action.payload.speed)}
        default:
            return state;
    }
}