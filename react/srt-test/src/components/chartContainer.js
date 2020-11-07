import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';

export default function Chart(props){
    const data = props.data;
    const config = {
        labels: data.labels,
        datasets:[
            {
                label:data.title,
                fill:false,
                lineTension: 0.1,
                backgroundColor: '#B41F3D',
                borderColor:'#B41F3D',
                data:data.data
            }
        ]
    }
    return(
        <div className="chart">
            <Line data={config}
                options={{
                    maintainAspectRatio:0,
                    legend:{
                        display:true,
                        position:'top',
                        labels:{
                            fontColor: 'white'
                        }
                    },
                    layout:{
                        padding:{
                            left:10,
                            right:20,
                            top:20,
                        }
                    },
                    gridLines:{
                        display:false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true,
                                fontColor: '#A3A3A3',
                                padding: 10
                            },
                            gridLines: {
                                display: true,
                                color: '#393535',
                                drawTicks:false
                              }
                        }],
                      xAxes: [{
                            ticks: {
                                fontColor: '#A3A3A3',
                                padding: 10
                            },
                            gridLines: {
                                display: true,
                                color: '#393535',
                                drawTicks:false
                              }
                        }]
                    } 
                }}
            />
        </div>
    )
}