import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import sampleGraph from "../../Images/sampleGraph.jpg";
import "./Graph.css";
const Graph = () => {
  const data = [
    {
      Month: "Jan",
      Profits: 2890,
      Purchases: 3400,
      amt: 2400,
    },
    {
      Month: "Feb",
      Profits: 3000,
      Purchases: 1398,
      amt: 2210,
    },
    {
      Month: "Mar",
      Profits: 2000,
      Purchases: 9800,
      amt: 2290,
    },
    {
      Month: "Apr",
      Profits: 2780,
      Purchases: 3908,
      amt: 2000,
    },
    {
      Month: "May",
      Profits: 1890,
      Purchases: 4800,
      amt: 2181,
    },
    {
      Month: "June",
      Profits: 2390,
      Purchases: 3800,
      amt: 2500,
    },
    {
      Month: "July",
      Profits: 3490,
      Purchases: 4300,
      amt: 2100,
    },
    {
      Month: "Aug",
      Profits: 2000,
      Purchases: 9800,
      amt: 2290,
    },
    {
      Month: "Sept",
      Profits: 2780,
      Purchases: 3908,
      amt: 2000,
    },
    {
      Month: "Oct",
      Profits: 1890,
      Purchases: 4800,
      amt: 2181,
    },
    {
      Month: "Nov",
      Profits: 2390,
      Purchases: 3800,
      amt: 2500,
    },
    {
      Month: "Dec",
      Profits: 3490,
      Purchases: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="graph d-flex justify-content-center flex-column align-items-center px-1">
      <p style={{fontSize: '1.2rem'}} className="my-2 text-start w-100 px-3">Last 12 Months</p>

      {/* <ResponsiveContainer width="90%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0, 
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Profits"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Purchases" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}
      <ResponsiveContainer width="90%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 30,
            right: 20,
            left: 0,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Profits"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="Purchases"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
