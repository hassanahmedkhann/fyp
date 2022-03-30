import React from "react";
import "./Products.css";
const ProductBox = ({ productData, ...props }) => {
  return (
    <div className="productBox my-3 mx-3">
      <img style={{ borderRadius: "10px" }} src={productData?.productImage} alt="productImage" />
      {props.rating ? <h5 className="mt-2">The product has the highest sales with a rating of 5!</h5> :
        <h5 className="mt-2">The product has the highest sales.</h5>}

      <div className="d-flex">
        <div className="producBox-detailBox d-flex flex-column mx-1 align-items-center w-100">
          <h3 className="my-2">{productData?.productName}</h3>
          <h3 className="my-1">{productData?.productCategory}</h3>
        </div>
        <div className="producBox-detailBox d-flex flex-column mx-1 align-items-center w-100">
          <h4 className="my-1">Price: {productData?.unitPrice}</h4>
          <h4 className="my-1">Cost: {productData?.unitCost}</h4>
          <h4 className="my-1">Total Profit: {productData?.unitProfit * productData?.totalSales}</h4>
        </div>
      </div>

      {props.rating && <h3 className="text-center">Best Rated ⭐</h3>}
      <h3>{productData?.totalSales} total sales</h3>

    </div>
  );
};

export default ProductBox;
