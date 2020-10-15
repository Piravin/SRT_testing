import React from 'react';
import {ReactComponent as Pointer} from '../public/dial/dial-pointer.svg';
import {ReactComponent as Arc} from '../public/dial/ArcSVG.svg';
// import {ReactComponent as Arc} from '../public/dial/dial-arc';


function Meter(props){
    const styleSheet = {
        pointer:{
            transform: `rotate(${(Number(props.rpm)/1000*60)-30}deg)`,
            transformOrigin: "100% 50%"
        }
    }
    return(
        <React.Fragment>
            <Arc className="dial"></Arc>
            <Pointer style={styleSheet.pointer} className="pointer"/>
        </React.Fragment>
    );
}

export default Meter;