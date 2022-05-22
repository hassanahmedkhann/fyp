import React from "react";
import numeral from "numeral";
import "./Products.css";
import { Rating } from "@mui/material";
const ProductBox = ({ productData, ...props }) => {
  return (
    <div className="productBox my-3 mx-3">
      <div className="productBoxImg"><img className="pbi" style={{ borderRadius: "10px" }} src={productData?.productImage} alt="productImage" /></div>
      {props.rating ? <h5 className="mt-2">The product has the highest rating!</h5> :
        <h5 className="mt-2">The product has the highest sales.</h5>}

      <div className="d-flex">
        <div className="producBox-detailBox d-flex flex-column mx-1 align-items-center w-100">
          <h5 className="my-2">{productData?.productName}</h5>
          <h5 className="my-1">{productData?.productCategory}</h5>
          <h5 className="my-1">Rating: <Rating name="read-only" value={productData?.productRating} readOnly /></h5>
          

        </div>
        <div className="producBox-detailBox d-flex flex-column mx-1 align-items-center w-100">
          <h5 className="my-1">Price: {productData?.unitPrice}</h5>
          <h5 className="my-1">Cost: {productData?.unitCost}</h5>
          <h5 className="my-1">Total Profit: {numeral(productData?.unitProfit * productData?.totalSales).format('(0.00 a)').toUpperCase()}</h5>
        </div>
      </div>
      <h3>{numeral(productData?.totalSales).format('(0.00 a)').toUpperCase()} total sales</h3>

    </div>
  );
};

export default ProductBox;
