import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';



class Dial extends Component {
    constructor(props){
        super (props);
        this.state = {
            cvt: {
                primary: this.props.cvt.primary,
                secondary: this.props.cvt.secondary
            },
            front: {
                rpm : this.props.front.rpm,
                speed : this.props.front.speed
            },
            back: {
                rpm : this.props.back.rpm,
                speed : this.props.back.speed
            }
            
        }
    }
    
    render() {
        const style = {
            transform: `rotate${this.state.cvt.primary}`,
            transformOrigin: "100% 50%"
        }
        const chart = {
            labels: [
                '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`,
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`,
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`,
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`,
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`,
                // `${new Date().getMinutes()}:${new Date().getSeconds()}`
            ],
            datasets: [
              {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'white',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 0,
                data: [
                    this.state.cvt.primary,
                    this.state.cvt.primary+2,
                    this.state.cvt.primary-2,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+2,
                    this.state.cvt.primary-2,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+2,
                    this.state.cvt.primary-2,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+2,
                    this.state.cvt.primary-2,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary+1,
                    this.state.cvt.primary-3,
                    this.state.cvt.primary+1
                ]
              }
            ]
          }
        return (
            <div className="dial-container">
                Front Rpm : {this.state.front.rpm}
                Front Speed : {this.state.front.speed}
                Back Rpm : {this.state.back.rpm}
                Back Speed : {this.state.back.speed}
                <div className="dial" style={style}>
                    <Line
                    data={chart}
                    options={{
                        title:{
                        display:false,
                        text:'Average Rainfall per month',
                        fontSize:10
                        },
                        legend:{
                        display:true,
                        position:'top'
                        },
                        layout:{
                            padding:{
                                left:10,
                                right:20,
                                top:20,
                                bottom:10
                            }
                        },
                        gridLines:{
                            display:false
                        }
                    }}
                    />
                </div>
            </div>
        );
    }
}

export default Dial;