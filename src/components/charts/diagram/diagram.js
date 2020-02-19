import React from 'react';
import { Line } from 'react-chartjs-2';
import s from './diagram.module.css';

let Diagram = ({statistic, statisticDate}) => {

    let borderArr = [];
    for (let i = 0; i < statistic.length; i++) {
        if (i === 0 || i === statistic.length - 1) {
            borderArr.push('#3A80BA');
        } else {
            borderArr.push('rgba(0, 0, 0, 0.0)');
        }
         
    }

    const data = {
        labels: statisticDate,
        datasets: [{
            data: statistic,
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            borderColor: borderArr,
            pointBorderColor: borderArr,
            pointBorderWidth: 8,
            borderWidth: 4,
            borderColor: '#3A80BA'
        }]
    }
   const options = {
    legend: {
        display: false
    }}
    return <div className={s.diagram_container}>


        <Line 
        width ={1120}
        height={255}
             data={data} 
             options ={options}/>
    </div>
};

export default Diagram;