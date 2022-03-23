import React from "react";
import {  Legend, Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';


const SmallLineGraph = ({text,numbers,...props}) => {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv : 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

  return(<>
  <div>
      <h3>{text}</h3>
      <h4>{numbers}</h4>
  </div>
    <ResponsiveContainer width="100%" height="80%">
    <LineChart width={300} height={100} data={data}>
      <Line type="monotone" dataKey='pv' stroke="#FAA540" strokeWidth={2} />
      <Tooltip/>
      <Legend/>
    </LineChart>
  </ResponsiveContainer>
  </>
  )
  ;
};

export default SmallLineGraph;
