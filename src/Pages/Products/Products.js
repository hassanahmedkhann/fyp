import React, { useEffect, useState } from "react";
import "./Products.css";
import searchIcon from "../../Images/searchicon.png";
import ProductBox from "./ProductBox";
import gif from "../../Images/loading.gif";
import productHeaderImage from "../../Images/productsPageHead.PNG";
import { Avatar, CircularProgress } from "@mui/material";
const Products = () => {
  const [scrollData, setScrollData] = useState(0);
  const [productItems, setProductItems] = useState([]);
  const [topDiv, setTopDiv] = useState("");

  useEffect(() => {
    setTopDiv(document.querySelector(".app"));
    window.addEventListener("scroll", () => {
      setScrollData(window.scrollY);
    });
  }, [scrollData]);

  const handleBackTop = (e) => {
    e.preventDefault();
    topDiv.scrollIntoView();
  };

  useEffect(() => {
    const getData = async () => {
      const productData = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );
      setProductItems(productData);
    };
    return getData();
  }, []);

  const shortString = (text) => {
    if (text.length > 10) {
      return text.substr(0, 20).toUpperCase();
    } else return text.toUpperCase();
  };
  return (
    <div className="products-main bor">
      {productItems.length > 0 && (
        <>
          <div style={{paddingTop: "100px"}} className="d-flex justify-content-center">
            <h1 className="display-2" style={{ color: "#033A7D"  }}>
              Products
            </h1>
            <img
              style={{ width: "100px" , borderRadius: "30px"}} className="ms-3"
              src={productHeaderImage}
              alt="img"
            />
          </div>
          <div className="my-4 w-100 d-flex justify-content-center productTopText">
            <h1 className=" mt-3 w-50 text-heading text-center">
              Top Products
            </h1>
          </div>

          <div className="best-product-container">
            <div className="best-product">
              <ProductBox
                img={productItems[3]?.image}
                desc={productItems[3]?.title}
              />
            </div>
            <div className="best-product">
              <ProductBox
                img={productItems[7]?.image}
                rating={productItems[3]?.rating.rate}
                desc={productItems[7]?.title}
              />
            </div>
          </div>
          {/* <div className="my-4 w-100 d-flex justify-content-center">
            <h1 className="w-50 text-heading btn-animated-pop btn-animated">
              All Products
            </h1>
          </div> */}
          <div className="products-container">
            <div className="searchbar-container">
              <div className="searchbar">
                <img alt="search-icon" src={searchIcon} />
                <input
                  type="text"
                  placeholder="Search Product"
                  className="w-100"
                />
              </div>
            </div>

            <div className="product-list-container">
              <div className="product-captions-container">
                <p className="product-captions">Product ID</p>
                <p className="product-captions">Category</p>
                <p className="product-captions product-item-lg">Product</p>
                <p className="product-captions">Rating</p>
                <p className="product-captions">Price</p>
                <p className="product-captions">Total Sales</p>
              </div>
              {productItems?.map((item, index) => (
                <div key={index} className="product-items-container">
                  <p className="product-items font-weight-light">#{item.id}</p>
                  <p className="product-items">{item.category.toUpperCase()}</p>
                  <div className="product-items product-item-lg">
                    <Avatar alt="Product-Image" src={item.image} sx={{ width: 60, height:60  }}/>
                    <p> {shortString(item.title)}</p>
                  </div>
                  <p className="product-items">{item.rating.rate}</p>
                  <p className="product-items">{item.price}</p>
                  <p className="product-items">{`${item.price + 1000}`}</p>
                </div>
              ))}
              {/* { productItems.map((item,index)=> (
            <div key={index} className="product-items">
              <p className="product-items"></p>
              <p className="product-items"></p>
              <p className="product-items"></p>
              <p className="product-items"></p>
              <p className="product-items"></p>
              <p className="product-items"></p>
            </div>
          ))
          } */}
            </div>
          </div>
        </>
      )}
      {productItems.length < 1 && (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          {/* <img
            style={{ width: "200px", height: "200px" }}
            src={gif}
            alt="gif"
          /> */}
          <CircularProgress sx={{color: "rgb(242, 88, 57)"}} />
        </div>
      )}
      <span
        onClick={handleBackTop}
        className={`col-12 back-top ${scrollData < 900 && "d-none"} `}
      >
        <svg
          id="Iconly_Bulk_Arrow_-_Right_Circle"
          data-name="Iconly/Bulk/Arrow - Right Circle"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <g
            id="Arrow_-_Right_Circle"
            data-name="Arrow - Right Circle"
            transform="translate(2 22) rotate(-90)"
          >
            <path
              id="Fill_1"
              data-name="Fill 1"
              d="M20,10A10,10,0,1,1,10,0,10.011,10.011,0,0,1,20,10"
              transform="translate(0 0)"
              opacity="0.4"
            />
            <path
              id="Fill_4"
              data-name="Fill 4"
              d="M8.443.749a.747.747,0,0,1-.219.529L4.754,4.765a.752.752,0,0,1-1.063,0L.219,1.278A.75.75,0,0,1,1.282.22l2.94,2.953L7.162.22A.75.75,0,0,1,8.443.749"
              transform="translate(5.778 7.808)"
            />
          </g>
        </svg>
      </span>
    </div>
  );
};

export default Products;
