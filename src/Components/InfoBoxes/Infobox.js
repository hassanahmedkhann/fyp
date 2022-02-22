import React from "react";
import "./Infobox.css";
const Infobox = (props) => {
  return (
    <>
      <div
        style={{
          maxWidth: props.mW,
          height: props?.mh,
          width: props?.mw,
          backgroundImage: `url(${props.backImg ? props.backImg : props.test})`,
        }}
        className={`mx-4 infobox fadeDown ${!props.mh && "mb-4"} ${
          props.mh && "mt-4"
        }`}
      >
        <div className="infobox-header">
          <p className="h4">{props.heading.toUpperCase()}</p>
          {props.icon && (
            <props.icon style={{ color: props.color }} fontSize="large" />
          )}
        </div>
        <div className="infobox-text ms-2 d-flex flex-direction-column align-items-start">
          <p className="h3">
            {props.amount} {props.mh ? "$" : "%"}
          </p>
        </div>
      </div>
      {props.graph && <div></div>}
    </>
  );
};

export default Infobox;
