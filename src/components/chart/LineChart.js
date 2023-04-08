import React, { useEffect } from "react";
import "./__styles__/index.css";
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { getReport } from '../../controllers/lineCharts';

const LineChart = () => {

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


    const data = {
        // labels: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        labels: (h1) ,
        datasets: [
            {
                label: 'u1',
                // data: [5, 6, 3, 4, 2, 5, 1],
                data: (u1),
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1.0,
            },
            {
                label: 'u2',
                // data: [9, 4, 7, 3, 6, 2, 8],
                data:  (u2),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1.0,
            },
            {
                label: 'u3',
                // data: [9, 4, 7, 3, 6, 2, 8],
                data:  (u3),
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: 1.0,
            },
            {
                label: 'P5_u1',
                data:  (P5_u1),
                backgroundColor: 'blue',
                borderColor: 'black',
                borderWidth: 0.1,
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