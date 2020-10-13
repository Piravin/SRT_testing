import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {Back} from './back';
import {Front} from './front';
import {Break} from './break';
import {CVT} from './cvt';
import {Acc} from './acc';
import {Gyro} from './gyro';

export const configureStore = ()=>{
    const store = createStore(
        combineReducers({
            front:Front,
            back:Back,
            break:Break,
            cvt:CVT,
            acc : Acc,
            gyro : Gyro}),
        applyMiddleware(thunk,logger));
        return store;
};
