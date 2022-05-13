import "./Products.css";
import React from "react";
import { width } from "@mui/system";

const ProductBoxSkeleton = () => {


    const productContainerStyle = {
        height: "550px",
        width: "400px",
        borderRadius: "20px",
        padding: "10px",
        backgroundColor: "whitesmoke"
    }

    const innerProductStyle = {
        height: "300px",
        width: "100%",
        backgroundColor: "lightgrey",
        borderRadius: "20px",
    }

    const innerTextStyle = {
        height: "40px",
        width: "100%",
        backgroundColor: "lightgray",
        margin: "10px 0px",
        borderRadius: "20px",
        marginTop: "20px"
    }

    return (
        <div style={productContainerStyle} className="d-flex flex-column">
            <div style={innerProductStyle}></div>
            <div style={innerTextStyle}></div>
            <div style={innerTextStyle}></div>
            <div style={innerTextStyle}></div>
        </div>
    );
};

export default ProductBoxSkeleton;
