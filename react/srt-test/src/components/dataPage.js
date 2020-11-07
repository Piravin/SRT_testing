import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updater} from '../redux/actionCreators';
import io from 'socket.io-client';
import Meter from './meter';
import Chart from './chartContainer';
import DataTable from './dataTable';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

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
        this.socket = io("http://localhost:5000/web");
        this.socket.on('connection',(socket)=>{
            console.log('Connected');
            
        });
    }
    
    componentDidMount(){
        this.socket.on('success',()=>console.log('Successfully connected'));
        this.socket.on('data',data=>{
            console.log(data);
            this.props.updater(data);
            
        });
        // function openFullscreen() {
        //     if (document.getElementById('data').requestFullscreen) {
        //         document.getElementById('data').requestFullscreen();
        //     } else if (document.getElementById('data').mozRequestFullScreen) { /* Firefox */
        //         document.getElementById('data').mozRequestFullScreen();
        //     } else if (document.getElementById('data').webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        //         document.getElementById('data').webkitRequestFullscreen();
        //     } else if (document.getElementById('data').msRequestFullscreen) { /* IE/Edge */
        //         document.getElementById('data').msRequestFullscreen();
        //     }
        //   }
        // openFullscreen();
        // document.getElementsByTagName('body')[0].requestFullscreen();
    }
    
    render(){
        
        
        const data = {
            data: this.props.front.rpm.map(rpm=>Number(rpm)),
            labels: this.props.front.rpm.map(rpm=>''),
            title: 'rpm'
        };
        console.log(data);
        return(
        <React.Fragment>
        <div className="g" id="data">
            <div></div>
            <div className="g11">
                <Chart className="chart-rpm" data={data}/>
            </div>
            <div className="meter-container g11">
                <div className="meter">
                    <Meter rpm = {Number(this.props.cvt.primary[this.props.cvt.primary.length-1]).toFixed(2)}/>
                </div>
            </div>
            <div className="g11">
                <Chart className="chart-rpm" data={data}/>
            </div>
            <div></div>

        </div>
        <div className="g2">
            <div className="g21">
                <div className="g211">
                    <div className={this.props.isBreaking ? "brakeon" : "brakeoff"}>
                        Brake
                    </div>
                    <div className="brakeDist">
                        Distance : {Number(this.props.break.distance[this.props.break.distance.length-1]).toFixed(2)}
                    </div>
                </div>
                <div className="g212">
                    <Chart className="chart-rpm" data={data}/>
                </div>
            </div>
            <div className="g22">
                <div className="g221">Chamber</div>
                <div className="g222">
                    <div>{Number(this.props.gyro.frontLeft.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                    <div>{Number(this.props.gyro.frontRight.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                </div>
                <div className="g223">Wheel Altitude</div>
                <div className="g224">
                    <div>{Number(this.props.gyro.frontLeft.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                    <div>{Number(this.props.gyro.frontRight.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                    <div>{Number(this.props.gyro.frontLeft.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                    <div>{Number(this.props.gyro.frontRight.y[this.props.gyro.frontLeft.y.length-1]).toFixed(2)}deg</div>
                </div>
            </div>
            <div className="g23">
                <DataTable title="Front Left" gyro={this.props.gyro.frontLeft} acc={this.props.acc.frontLeft}/>
                <DataTable title="Front Right" gyro={this.props.gyro.frontRight} acc={this.props.acc.frontRight}/>
                <DataTable title="Back Left" gyro={this.props.gyro.backLeft} acc={this.props.acc.backLeft}/>
                <DataTable title="Back Right" gyro={this.props.gyro.backRight} acc={this.props.acc.backRight}/>
            </div>
        </div>
        <div className="menuBack">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> Main Menu
        </div>
        </React.Fragment>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DataPage);