import React, { useEffect } from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "./Graph.css"
const Linegraph = ({ graphData }) => {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
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

  const CustomTooltip = ({ payload, label, active }) => {
    return (
      <div className="tooltipContainer">
        <p className="label">Cluster Number: {label}</p>
        <p>{payload ? "Total Customers: " + Math.round(payload[0]?.value) : null}</p>
      </div>
    )
  }


  return (
    <ResponsiveContainer height='100%' width='100%'>
      <AreaChart data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis label={{ value: 'Cluster No.', position: 'insideBottomRight', offset: -3 }} dataKey="clusterNumber" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Line type="monotone" dataKey="totalCustomers" stroke="#F4752C" activeDot={{ r: 8 }} /> */}
        <Area type="monotone" dataKey="totalCustomers" fill="rgb(244, 117, 44)" stroke="#F15238" />
        {/* <Line type="monotone" dataKey="uv" stroke="#FAA540" activeDot={{ r: 8 }} /> */}
      </AreaChart>
    </ResponsiveContainer>
  )
    ;
};

export default Linegraph;
