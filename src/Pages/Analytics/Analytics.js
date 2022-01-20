import React from "react";
import smallGraph1 from "../../Images/smallGraph1.PNG";
import smallGraph2 from "../../Images/smallGraph2.PNG";
import smallGraph3 from "../../Images/smallGraph3.PNG";
import graphSample from "../../Images/sampleAnalyticsGraph.PNG";
import graphSample2 from "../../Images/sampleAnalyticsGraph2.PNG";
import "./Analytics.css";
import SmallGraphs from "./SmallGraphs";
const Analytics = () => {
  const smallGraphData = [
    { text: "Customers", numbers: 14.586, src: smallGraph1 },
    { text: "New Customers", numbers: 17.586, src: smallGraph2 },
    { text: "Website Views", numbers: 188.586, src: smallGraph3 },
    { text: "Sessions", numbers: 134.464, src: smallGraph3 },
    { text: "Avg. Buy Rate", numbers: 32.526, src: smallGraph2 },
    { text: "Avg. transaction", numbers: 321.586, src: smallGraph1 },
  ];

  return (
    <>
      <h1 className="text-center">Overall Analytics</h1>
      <div className="analytics">
        <div className="analytics-graph container-fluid">
          <img src={graphSample} alt="graph" />
        </div>
        <div className="analytics-items-container container-fluid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {smallGraphData.map((data, index) => (
              <div key={index} className="analytics-small-items col">
                <SmallGraphs
                  text={data.text}
                  numbers={data.numbers}
                  src={data.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics">
        <div className="analytics-graph container-fluid">
          <img src={graphSample2} alt="graph" />
        </div>
        <div className="analytics-items-container container-fluid ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {smallGraphData.map((data, index) => (
              <div key={index} className="analytics-small-items">
                <SmallGraphs
                  text={data.text}
                  numbers={data.numbers}
                  src={data.src}
                  isImg
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
