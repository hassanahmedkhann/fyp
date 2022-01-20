import React from "react";
import sampleGraph from "../../Images/sampleGraph.jpg";
import "./Graph.css"
const Graph = () => {
  return (
    <div className="graph">
      <img alt="Graph" src={sampleGraph}/>
    </div>
  );
};

export default Graph;
