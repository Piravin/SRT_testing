import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updater} from '../redux/actionCreators';
import io from 'socket.io-client';
import Meter from './meter';



const mapStateToProps = state => {
    return{
        front: state.front,
        back: state.back,
        break: state.break,
        cvt: state.cvt,
        acc: state.acc,
        gyro: state.gyro
    }
}

const mapDispatchToProps = (dispatch) => ({
    updater: (data)=>dispatch(updater(data))
});

class DataPage extends Component{
    constructor(props){
        super (props);

    }
    componentDidMount(){
        const socket = io("http://localhost:8000/web");
        socket.on('connection',()=>console.log('Connected'));
    }
    
    render(){
        // const cvt = {
        //     primary: 10,
        //     secondary: 10
        //   }
        //   const front = {
        //     rpm: 30,
        //     speed: 20
        //   }
        //   const back = {
        //     rpm: 30,
        //     speed: 20
        //   }
        return(
        //     <Dial 
        //   cvt = {cvt}
        //   front = {front}
        //   back = {back}
        // />
        <React.Fragment>
        <Meter rpm = {this.props.cvt.primary}/>
        </React.Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataPage);