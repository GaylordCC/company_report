import React from "react";
import "./__styles__/index.css";
import { Chart as ChartJS } from 'chart.js/auto';

import { Line } from 'react-chartjs-2';


const LineChart = () => {
    const data = {
        labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9, 4, 7, 3, 1],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '369',
                data: [9, 4, 7, 3, 6, 2, 8],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }

    return (
        <div className='linechart'>
            <Line
                data = {data}
                options = {options}
            >
            </Line>
        </div>
    );

}

export default LineChart;