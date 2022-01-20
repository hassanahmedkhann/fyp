import React from "react";
import "./Infobox.css";
const Infobox = (props) => {
  return (
    <>
      <div style={{ width: props?.width }} className="infobox">
        <div className="infobox-header">
          <p>{props.heading}</p>
          <props.icon style={{ color: props.color }} fontSize="large" />
        </div>
        <div className="infobox-text">
          <h2>{props.amount} $</h2>
          <h4>Random text</h4>
        </div>
      </div>
      {props.graph && <div></div>}
    </>
  );
};

export default Infobox;
