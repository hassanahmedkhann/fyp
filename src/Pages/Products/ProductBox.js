import React, { useState } from "react";
import numeral from "numeral";
import "./Products.css";
import { Button, Rating } from "@mui/material";
import { ButtonSX } from "../../Util";
import ProductAnalysis from "./ProductAnalysis";
const ProductBox = ({ productData, ...props }) => {

  const [modalState, setModalState] = useState({ open: false, product: null });
  const [loadFlag, setLoadFlag] = useState(false);


  const linkStyle = {
    fontSize: "18px",
    textDecoration: "none",
    padding: "3px 10px",
    borderRadius: "10px",
    backgroundColor: "orange",
    color: "white",
  }
  
  const handleModal = () => {
    setModalState({ open: true, product: productData })
    setLoadFlag(!loadFlag)
  }
  
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
          <h5 className="my-1">ID: {productData?.productID}</h5>
          <h5 className="my-1">Total Profit: {numeral(productData?.unitProfit * productData?.totalSales).format('(0.00 a)').toUpperCase()}</h5>
        </div>
      </div>
      <h3>{numeral(productData?.totalSales).format('(0.00 a)').toUpperCase()} total sales</h3>
      <Button style={linkStyle} onClick={handleModal} >Detailed Analysis</Button>
      <ProductAnalysis modalState={modalState} setModalState={setModalState} loadFlag={loadFlag}/>
    </div>
  );
};

export default ProductBox;
