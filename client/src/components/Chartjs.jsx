import React, { useState, useEffect } from "react";
import { array1500 } from "../mock/array1500";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';
Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

export function Chartjs({type, data, options}) {
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (chart) {
            chart.data = data;
            chart.type = type;
            chart.options = options
            chart.update()
        } else {
            const ctx = document.getElementById("chart");
            console.log(ctx)
            setChart(new Chart(ctx, {
                type,
                data,
                options,
            }))
        }

    })

    return <canvas id="chart" width="600" height="400" ></canvas>
}