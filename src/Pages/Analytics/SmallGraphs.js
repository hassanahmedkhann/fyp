import React from "react";
import "./Analytics.css";
const SmallGraphs = (props) => {
  return (
    <div className="smallgraphs ">
      {!props.isImg ? (
        <>
          <p>{props.text}</p>
          <h3>{props.numbers}</h3>
          <img src={props.src} alt="image" />
        </>
      ) : (
        <div>
          <p>{props.text}</p>
          <h3>{props.numbers}</h3>
        </div>
      )}
    </div>
  );
};

export default SmallGraphs;
