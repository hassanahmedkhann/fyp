import React from "react";
import { Link } from "react-router-dom";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { buttonSX } from "../../Util";


const SmallLineGraph = ({ text, type, graphData, graph, index, ...props }) => {

  const CustomTooltip = ({ payload, label, active }) => {
    return (
      <div className="tooltipContainer">
        {graph ? <p className="label">Month: {label}</p> :
          <p className="label">Product ID: {label}</p>}

        {graph ? <p>{keyZ} {payload ? Math.round(payload[0]?.value) + ' $' : null}</p> :
          <p>{type === 'ROI' ? 'Profit' : type === 'Growth' ? 'Sales' : 'Cost'} {payload ? payload[0]?.value + ' $' : null}</p>}
      </div>
    )
  }

  const keyX = type === 'ROI' ? 'unitProfit' : type === 'Growth' ? 'totalSales' : 'unitCost'
  const keyY = graph == 1 ? 'averageEarning' : graph == 2 ? 'averageSales' : 'totalOrders'
  const keyZ = graph === 1 ? 'Average Profit Rate' : graph === 2 ? 'Average Transactions' : 'Monthly Orders'
  const keyA = graph === 1 ? 'Avg. Earnings' : graph === 2 ? 'Avg. Sales' : 'Orders'
  const keyB = type === 'ROI' ? 'Profits' : type === 'Growth' ? 'Sales' : 'Costing'






  return (<>
    <div>
      {!graph ? <h3>{type}</h3> :
        <h3>{keyZ}</h3>}

    </div>
    <ResponsiveContainer width="100%" height="80%">
      <LineChart margin={{ left: 10 }} width={300} height={100} data={graphData}>
        <YAxis label={{ value: graph ? keyA : keyB, angle: -90, margin: 5, position: 'insideBottomLeft' }} dataKey={graph ? keyY : keyX} domain={graph == 2 ? [0, 30] : graph == 1 ? [0, 100] : graph == 3 ? [0, 200] : [0, 700]} />
        <Line type="monotone" dataKey={graph ? keyY : keyX} stroke="#FAA540" strokeWidth={2} />
        <XAxis dataKey={graph ? 'Month' : 'productID'} />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  </>
  )
    ;
};

export default SmallLineGraph;
