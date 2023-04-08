import React, { useEffect } from "react";
import "./__styles__/index.css";
import Chart  from 'chart.js/auto';

let myChart = null;

export default function LineChart2 (props) {
    console.log(props)

    useEffect (() => {
        const ctx = document.getElementById(props.name);

        if (Chart.getChart(props.name)){
            Chart.getChart(props.name).destroy();
          }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: (props.y),
                datasets: [{
                    label: props.title1,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 1,
                    radius: 0,
                    data: (props.x1),
                },
                {
                    label: props.title2,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1,
                    radius: 0,
                    data: (props.x2),
                }, 
                {
                    label: props.title3,
                    borderColor: 'green',
                    backgroundColor: 'green',
                    borderWidth: 1,
                    radius: 0,
                    data: (props.x3),
                },
                {
                    label: props.title4,
                    borderColor: 'black',
                    backgroundColor: 'black',
                    borderWidth: 1,
                    radius: 0,
                    data: (props.x4),
                }]
            },
    
        });
    });

    return (
        <div className="LineChart2">
            <canvas id={props.name}/>
        </div>
    );
}

