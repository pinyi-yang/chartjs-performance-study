import React, { useState, useEffect } from "react";
import { array1500 } from "../mock/array1500";
import { Chartjs } from "./Chartjs";


export function BasicChart() {
    const [width, setWidth] = useState(600);
    const [end, setEnd] = useState(100);
    const [parseData, setParseData] = useState(false);
    const [animation, setAnimation] = useState(true);

    // useEffect(() => {
    //     document.getElementById("resize").style.width = width + "px";
    //     document.getElementById("chart-wrapper").style.width = width + "px";
    // }, [width])

    const pointsOptionButtons = [50, 100, 200, 500, 1000, 1500].map(num => {
        return <button style={{margin: 10}} onClick={() => setEnd(num)} key={`point-option-${num}`} disabled={num === end}>{num}</button>
    })

    const data = {
        labels: [...new Array(end).keys()],
        datasets: [{
            data: array1500.slice(0, end),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

        }]
    };

    const options = {
        // spanGaps: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }

    if (!animation) {
        options.animation = false;
    }

    if (parseData) {
        delete data.labels;
        data.datasets[0].data = data.datasets[0].data.map((value, index) => ({x: index.toString(), y: value}));
        data.datasets[0].parsing = {yAxisKey: "y"};
        options.parsing = false;
        console.log("data parsed")
    }

    return (
        <div>
            <h1>Basic Chartjs</h1>
            <h2>Bar Chart</h2>
            <div>
                Points: {pointsOptionButtons}
            </div>
            <div>
                <input type="checkbox" value={parseData} onChange={e => setParseData(e.target.checked)}/> Parse Data 
                <input type="checkbox" value={animation} onChange={e => setAnimation(e.target.checked)} defaultChecked={animation}/> Animation
            </div>
            <input type="range" min={100} max={3000} step={10} value={width}
                onChange={e => setWidth(e.target.value)} /><br/>
            <button onClick={() => {
                setTimeout(() => {
                    document.getElementById("resize").style.width = "800px";
                    document.getElementById("chart-wrapper").style.width = "800px";
                }, 1000);
        
                setTimeout(() => {
                    document.getElementById("resize").style.width = "1000px";
                    document.getElementById("chart-wrapper").style.width = "1000px";
                }, 2000)
            }}>Start</button>
            <div id="resize" style={{height: 50, border: "1px solid black", margin: "0 auto", width}}>Current Width: {width}px</div>
            <div id="chart-wrapper" style={{margin: "0 auto", width, border: "1px solid black"}}>
                <Chartjs 
                    type="bar"
                    data={data}
                    options={options}

                />
            </div>
            
        </div>
    )
}