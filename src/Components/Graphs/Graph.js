import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import TimelineIcon from '@mui/icons-material/Timeline';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import sampleGraph from "../../Images/sampleGraph.jpg";
import "./Graph.css";
import { getDashboardGraph } from "../../Api-Interaction/api-Interaction";
import Loader from "../../Utils/Loader";
import Notification from "../../Utils/Notification";
const Graph = () => {

  const [graphData, setGraphData] = useState();
  const [alert, setAlert] = useState({ flag: false, status: 1, message: '' });
  const [open, setOpen] = useState(false);
  const months = [2022, 2021, 2020];
  const [selected, setSelected] = useState(2022);


  useEffect(async () => {

    try {
      setOpen(true)
      let resultHandle = await getDashboardGraph(selected);

      if (resultHandle?.success === true) {
        // console.log(resultHandle?.message)
        setGraphData(resultHandle?.message)
        setOpen(false);
      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)
      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }

  }, [selected]);





  const handleChange = (event) => {
    setSelected(event.target.value)
  }

  return (
    <div className="graph d-flex justify-content-center flex-column align-items-center px-1">
      <Notification alert={alert} setAlert={setAlert} />
      <Loader open={open} />
      <div className="d-flex w-100 justify-content-between">
        <p style={{ fontSize: '1.2rem' }} className="pt-3 ps-4 my-2 text-start w-100 px-3"> Year {<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={handleChange}
        >{months.map((month, index) => (
          <MenuItem key={index} value={month}>{month}</MenuItem>
        ))
          }
        </Select>} </p>
        <span className="p-2 m-4" style={{ backgroundColor: "#F4752C", borderRadius: "40px" }}><TimelineIcon style={{ fontSize: "40px", color: 'white' }} /></span></div>


      <ResponsiveContainer width="90%" height="100%">
        <AreaChart
          data={graphData}
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
            dataKey="totalProfit"
            stackId="1"
            stroke="#F99F3F"
            fill="#F25839"
          />
          <Area
            type="monotone"
            dataKey="totalEarning"
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
