import * as ActionTypes from './actionTypes';

export const Gyro = (state={
    frontLeft : {
        x : [23,234],
        y : [23,234],
        z : [23,234]
    },
    frontRight : {
        x : [23,234],
        y : [23,234],
        z : [23,234]
    },
    backLeft : {
        x : [23,234],
        y : [23,234],
        z : [23,234]
    },
    backRight : {
        x : [23,234],
        y : [23,234],
        z : [23,234]
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
                x:state.frontRight.x.concat(action.payload.frontRight.x),
                y:state.frontRight.y.concat(action.payload.frontRight.y),
                z:state.frontRight.z.concat(action.payload.frontRight.z)
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