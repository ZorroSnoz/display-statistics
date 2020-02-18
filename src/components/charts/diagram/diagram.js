import React from 'react';
import { Line } from 'react-chartjs-2';
import s from './diagram.module.css';

let Diagram = ({statistic, statisticDate}) => {

    const data = {
        labels: statisticDate,
        datasets: [{
            data: statistic,
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
            borderColor: [
                '#3A80BA',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                '#3A80BA'
            ],
            pointBorderColor: [
                '#3A80BA',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.0)',
                '#3A80BA'
            ],
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