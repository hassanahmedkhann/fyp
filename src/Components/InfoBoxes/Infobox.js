import React from "react";
import numeral from "numeral";
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
        className={`p-4 infobox fadeDown ${props.graph && "mt-4"} ${props.mh && "mt-4"
          }`}
      >
        <div className="infobox-header mt-2">
          <p style={{ color: `${props.color2}` }} className="h5">{props.heading.toUpperCase()}</p>
          <div className="icon-div">
            {props.icon && (
              <props.icon style={{ color: props.color, fontSize: '45px' }} />
            )}
          </div>
        </div>
        <div className="infobox-text ms-2 d-flex flex-direction-column align-items-start">
          <p style={{ color: `${props.color2}` }} className="h2">
            {numeral(props.amount).format('($ 0.000 a)').toUpperCase()}
          </p>
        </div>
      </div>

    </>
  );
};

export default Infobox;
