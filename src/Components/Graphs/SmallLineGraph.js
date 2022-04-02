import React from "react";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';


const SmallLineGraph = ({ text, type, graphData, ...props }) => {


  return (<>
    <div>
      <h3>{type}</h3>
    </div>
    <ResponsiveContainer width="100%" height="80%">
      <LineChart width={300} height={100} data={graphData}>
        <YAxis dataKey={type === 'ROI' ? 'unitProfit' : type === 'Growth' ? 'totalSales' : 'unitCost'} />
        <Line type="monotone" dataKey={type === 'ROI' ? 'unitProfit' : type === 'Growth' ? 'totalSales' : 'unitCost'} stroke="#FAA540" strokeWidth={2} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  </>
  )
    ;
};

export default SmallLineGraph;
