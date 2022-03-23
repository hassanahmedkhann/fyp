import React from "react";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";

const BarGraph = () => {


    const data = [
        {
          name: 'Product A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Product B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Product C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Product D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Product E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Product F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];


  return   (
    <ResponsiveContainer width="100%" height="100%">
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" label={{ value: 'Products', position: 'insideBottomRight', offset: 0 }} scale="band" />
      <YAxis label={{ value: 'Cost', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="amt" fill="rgb(244, 117, 44)" stroke="#F15238" />
      <Bar dataKey="pv" barSize={20} fill="#F15238" />
      <Line type="monotone" dataKey="uv" stroke="#F4752C" />
    </ComposedChart>
  </ResponsiveContainer>
);
};

export default BarGraph;
