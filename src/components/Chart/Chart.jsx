import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fecthDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart =({data,country})=>{
     
    const [dailyData,setDailyData] = useState([]);

    useEffect(()=>{
        const fecthAPI = async()=>{
            setDailyData(await fecthDailyData());
        }

        fecthAPI();
    });

    const lineChart = (
        dailyData.length
        ?(
            <Line
            data={{
                labels:dailyData.map(({date})=>date),
                datasets:[{
                    data:dailyData.map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                },{
                    data:dailyData.map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }],
            }}
    
        />) : null
    );

    const barChar = (
        data.confirmed
        ?(
            <Bar
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    )
    
}


export default Chart;