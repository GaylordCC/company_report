import React from "react";
import "./__styles__/index.css";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const BarChart = () => {
    const data = {
        labels: [ 'Mon', 'Tue', 'Wed'],
        datasets: [
            {
                label: '369',
                data: [3, 6, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1,
            },
            {
                label: '346',
                data: [3, 4, 6],
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }

    const options = {

    }

    return (
        <div className='barchart'>
            <Bar
                data = {data}
                options = {options}
            >
            </Bar>
        </div>
    );

}

export default BarChart;