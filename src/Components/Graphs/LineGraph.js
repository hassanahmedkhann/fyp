import React, { useEffect } from "react";
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
import { staticGraphData } from "../../Utils/constants";
import "./Graph.css";
const Linegraph = ({ graphData }) => {
  const CustomTooltip = ({ payload, label, active }) => {
    return (
      <div className="tooltipContainer">
        <p className="label">Cluster Number: {label}</p>
        <p>
          {payload ? "Total Customers: " + Math.round(payload[0]?.value) : null}
        </p>
      </div>
    );
  };

  return (
    <ResponsiveContainer height="100%" width="100%">
      <AreaChart data={staticGraphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          label={{
            value: "Cluster No.",
            position: "insideBottomRight",
            offset: -3,
          }}
          dataKey="Sales"
          padding={{ left: 30, right: 30 }}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Line type="monotone" dataKey="totalCustomers" stroke="#F4752C" activeDot={{ r: 8 }} /> */}
        <Area
          type="monotone"
          dataKey="Earnings"
          fill="rgb(244, 117, 44)"
          stroke="#F15238"
        />
        {/* <Line type="monotone" dataKey="uv" stroke="#FAA540" activeDot={{ r: 8 }} /> */}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Linegraph;
