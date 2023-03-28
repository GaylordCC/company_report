import React, { useEffect } from "react";
import "./__styles__/index.css";
import Chart  from 'chart.js/auto';
import { getReport } from '../../controllers/lineCharts'

let myChart = null;

export default function LineChart2 () {

    const [id, setId] = React.useState(null);
    const [u1, setU_1] = React.useState("");
    const [u2, setU_2] = React.useState("");
    const [u3, setU_3] = React.useState("");
    const [h1, setHora] = React.useState("");
    const [P5_u1, setP5_u1] = React.useState("");


        const fetchChart = async (id) =>{
        const { succes, data } = await getReport(id);
        console.log(data.u1)
        console.log(id)
        console.log(u1)

        if (succes) {
            setU_1(data.u1)
            setU_2(data.u2)
            setU_3(data.u3)
            setHora(data.h1)
            setP5_u1(data.P5_u1)
        }
    }

    useEffect(()=> {
        const params = new URLSearchParams(window.location.search)
        var paramsId = window.location.pathname.toString().split("/").pop()
        if(paramsId) {
            setId(paramsId);
            fetchChart(paramsId);
        }
    }, [])


    useEffect (() => {
        const ctx = document.getElementById('myChart');

        if (Chart.getChart("myChart")){
            Chart.getChart("myChart").destroy();
          }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: (h1),
                datasets: [{
                    label: "u1",
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 1,
                    radius: 0,
                    data: (u1),
                },
                {
                    label: "u2",
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1,
                    radius: 0,
                    data: (u2),
                }, 
                {
                    label: "u3",
                    borderColor: 'green',
                    backgroundColor: 'green',
                    borderWidth: 1,
                    radius: 0,
                    data: (u3),
                }]
            },
    
        });
    });

    return (
        <div className="LineChart2">
            <canvas id="myChart"/>
        </div>
    );
}

