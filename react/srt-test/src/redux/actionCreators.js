import * as ActionTypes from './actionTypes';

const upFront = (rpm, speed) => ({
    type : ActionTypes.FRONT_UPDATE,
    payload : {
        rpm: rpm,
        speed: speed
    }
});

const upBack = (rpm, speed) => ({
    type : ActionTypes.BACK_UPDATE,
    payload : {
        rpm: rpm,
        speed: speed
    }
});

const upBreak = (isBreaking, distance) => ({
    type : ActionTypes.BREAK_UPDATE,
    payload : {
        isBreaking: isBreaking,
        distance: distance
    }
});

const upCvt = (primary, secondary) => ({
    type : ActionTypes.CVT_UPDATE,
    payload : {
        primary: primary,
        secondary: secondary
    }
});

const upAcc = (frontLeft, frontRight, backLeft, backRight) => ({
    type : ActionTypes.ACC_UPDATE,
    payload : {
        frontLeft: frontLeft,
        frontRight: frontRight,
        backLeft:backLeft,
        backRight:backRight
    }
});

const upGyro = (frontLeft, frontRight, backLeft, backRight) => ({
    type : ActionTypes.GYRO_UPDATE,
    payload : {
        frontLeft: frontLeft,
        frontRight: frontRight,
        backLeft:backLeft,
        backRight:backRight
    }
});

export const updater = (data) => (dispatch) => {
    const received = JSON.parse(data);
    dispatch(upFront(received.front.rpm,received.front.speed));
    dispatch(upBack(received.back.rpm,received.back.speed));
    dispatch(upCvt(received.cvt.p,received.cvt.s));
    dispatch(upBreak(received.break.isBreaking,received.break.distance));
    dispatch(upAcc(received.acc.frontLeft,
        received.acc.frontRight,
        received.acc.backLeft,
        received.acc.backLeft));
    dispatch(upGyro(received.gyro.frontLeft,
        received.gyro.frontRight,
        received.gyro.backLeft,
        received.gyro.backLeft));
};