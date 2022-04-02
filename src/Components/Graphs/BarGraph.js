import React, { useEffect, useState } from "react";
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, LineChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from "recharts";
import { getOverallProductAnalytics } from "../../Api-Interaction/api-Interaction";
import Loader from "../../Utils/Loader";
import Notification from "../../Utils/Notification";

const BarGraph = ({ graphData }) => {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={500}
        height={500}
        data={graphData}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="productID" label={{ value: 'Product IDs', position: 'insideBottomRight', offset: -10 }} scale="band" />
        <YAxis dataKey='unitPrice' label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="unitProfit" fill="rgb(244, 117, 44)" stroke="#F15238" />
        <Bar dataKey="unitCost" barSize={20} fill="#F15238" />
        <Line type="monotone" dataKey="unitPrice" stroke="#F4752C" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarGraph;
