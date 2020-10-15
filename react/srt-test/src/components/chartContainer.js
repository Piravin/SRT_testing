import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';

export default function Chart(props){
    const [labels,setLabel] = useState(props.lables);
    const [data, setData] = useState(props.data);
    const config = {
        labels: labels,
        datasets:[
            {
                label:data.lable,
                fill:false,
                lineTension:0.1,
                data:data.data
            }
        ]
    }
    return(
        <Line data={config}
            options={{
                title:{
                    display:true,
                    text:data.title,
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
    )
}