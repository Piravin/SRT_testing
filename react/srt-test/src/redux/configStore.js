import {createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            speedFront : [],
            speedBack : [],
            rpmFront : [],
            rpmBack : [],
            isBreaking : [],
            breakDistance : [],
            rpmPrimary : [],
            rpmSecondmary : [],
            acc : {
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
            },
            gyro : {
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
            }
        }),
        applyMiddleware(thunk,logger));
}
