import React from "react";
import "./Products.css";
const ProductBox = (props) => {
  return (
    <div className="productBox my-3 mx-3">
      <img src={props.img} alt="productImage" />
      {!props.rating && <h1 className="text-center">Best Seller $</h1>}
      {props.rating && <h1 className="text-center">Best Rated ⭐ </h1>}

      <h5>{props.desc}</h5>
    </div>
  );
};

export default ProductBox;
