import React, { useState, useEffect } from "react";
import { Chartjs } from "./Chartjs";


export function Home() {
    const [width, setWidth] = useState(600);
    const [end, setEnd] = useState(100);

    // useEffect(() => {
    //     document.getElementById("resize").style.width = width + "px";
    //     document.getElementById("chart-wrapper").style.width = width + "px";
    // }, [width])

    const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];


    return (
        <div style={{margin: "0 auto", width: 800}}>
            <Chartjs 
                type="bar"
                data={{
                    // labels: [1, 2],
                    datasets: [
                        {data: [{x: "1", y: 1}, {x: "2", y: 2}], parsing: {yAxisKey: "y"}},
                    ]
                }}
                options={{
                    // spanGaps: true,
                    animation: false,
                    parsing: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
            
        </div>
    )
}