import React from 'react';

export default function DataTable(props){
    return (
        <table className="vals">
            <tr>
                <th>{props.title}</th>
                <th>Acc</th>
                <th>Gyro</th>
            </tr>
            <tr>
                <td>X</td>
                <td>{props.acc.x[props.acc.x.length -1]}</td>
                <td>{props.gyro.x[props.gyro.x.length -1]}</td>                                                
            </tr>
            <tr>
                <td>Y</td>
                <td>{props.acc.y[props.acc.y.length -1]}</td>
                <td>{props.gyro.y[props.gyro.y.length -1]}</td>
            </tr>
            <tr>
                <td>Z</td>                       
                <td>{props.acc.z[props.acc.z.length -1]}</td>
                <td>{props.gyro.z[props.gyro.z.length -1]}</td>                        
            </tr>
        </table>
        );
}