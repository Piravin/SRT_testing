import * as ActionTypes from './actionTypes';

export const Gyro = (state={
    frontLeft : {
        x : [],
        y : [],
        z : []
    },
    fromtRight : {
        x : [],
        y : [],
        z : []
    },
    backLeft : {
        x : [],
        y : [],
        z : []
    },
    backRight : {
        x : [],
        y : [],
        z : []
    }
},action) =>{
    switch (action.type){
        case ActionTypes.GYRO_UPDATE:
            const frontLeft = {
                x:state.frontLeft.x.concat(action.payload.frontLeft.x),
                y:state.frontLeft.y.concat(action.payload.frontLeft.y),
                z:state.frontLeft.z.concat(action.payload.frontLeft.z)
            };
            const fromtRight = {
                x:state.fromtRight.x.concat(action.payload.fromtRight.x),
                y:state.fromtRight.y.concat(action.payload.fromtRight.y),
                z:state.fromtRight.z.concat(action.payload.fromtRight.z)
            };
            const backLeft = {
                x:state.backLeft.x.concat(action.payload.backLeft.x),
                y:state.backLeft.y.concat(action.payload.backLeft.y),
                z:state.backLeft.z.concat(action.payload.backLeft.z)
            };
            const backRight = {
                x:state.backRight.x.concat(action.payload.backRight.x),
                y:state.backRight.y.concat(action.payload.backRight.y),
                z:state.backRight.z.concat(action.payload.backRight.z)
            };
            return {...state, frontLeft: frontLeft, fromtRight:fromtRight,backLeft:backLeft,backRight:backRight}
        default:
            return state;
    }
}