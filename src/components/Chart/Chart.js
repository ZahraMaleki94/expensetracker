import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) =>{
    const dataPointValues = props.dataPoints.map(datapoin => datapoin.value);
    const totalMaximum= Math.max(...dataPointValues);
    return(
        <div className="chart">
            {props.dataPoints.map(
                datapoint => <ChartBar 
                value={datapoint.value}
                maxValue={totalMaximum}
                label={datapoint.label}
                key={datapoint.label}
                
                />

            )}         
        </div>
    )

};
export default Chart;