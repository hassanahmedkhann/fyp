import React, { useEffect, useState } from "react";
import "./Products.css";
import searchIcon from "../../Images/searchicon.png";
import ProductBox from "./ProductBox";
import gif from "../../Images/loading.gif";
import productHeaderImage from "../../Images/productsPageHead.PNG";
import { Avatar, CircularProgress } from "@mui/material";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import { getProducts, getTopProduct } from "../../Api-Interaction/api-Interaction";
import { searchFunction } from "../../Util";
const Products = () => {
  const [scrollData, setScrollData] = useState(0);
  const [productItems, setProductItems] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [topProduct, setTopProduct] = useState();
  const [topDiv, setTopDiv] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ flag: false, status: 1, message: "" });


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

  useEffect(async () => {

    try {
      setOpen(true)
      let resultHandle = await getTopProduct();

      if (resultHandle?.success === true) {
        setTopProduct(resultHandle?.message)
        setOpen(false);
      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)
      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }

  }, []);


  useEffect(async () => {

    try {
      setOpen(true)
      let resultHandle = await getProducts();

      if (resultHandle?.success === true) {
        // console.log(resultHandle?.message)
        setProductItems(resultHandle?.message)
        setOpen(false);
      }
      else {
        setAlert({ flag: true, 'status': 2, message: resultHandle?.data.Error });
        setOpen(false)
      }

    }
    catch (err) {
      setOpen(false)
      console.log("Error! ", err)
    }

  }, []);


  const handleSearch = (input) => {
    setSearch(input)
    const matches = searchFunction(input, productItems)
    setSearchedProducts([...matches])
  }



  return (
    <div className="products-main ">
      <Notification alert={alert} setAlert={setAlert} />
      <Loader open={open} />
      <>
        <div style={{ paddingTop: "100px" }} className="d-flex justify-content-center">
          <h3 className="display-4" style={{ color: "#033A7D" }}>
            Product View
          </h3>
          {/* <img
            style={{ width: "100px", borderRadius: "30px" }} className="ms-3"
            src={productHeaderImage}
            alt="img"
          /> */}
        </div>
        <div className="my-4 w-100 d-flex justify-content-center">
          <h4 className=" mt-3 w-50 text-heading text-center">
            Top Products
          </h4>
        </div>


        <div className="best-product-container">
          <div className="best-product">
            <ProductBox
              productData={topProduct?.highestSales}
            />
          </div><div className="best-product">
            <ProductBox
              rating
              productData={topProduct?.topProduct}
            />
          </div>
        </div>

        <div className="my-4 w-100 d-flex justify-content-center">
          <h1 className="w-50 text-heading text-center">
            All Products
          </h1>
        </div>
        <div className="products-container">
          <div className="searchbar-container">
            <div className="searchbar">
              <img alt="search-icon" src={searchIcon} />
              <input
                type="text"
                placeholder="Search Product"
                className="w-100"
                onChange={(event) => handleSearch(event.target.value)}
              />
            </div>
          </div>

          <div className="product-list-container">
            <div className="product-captions-container">
              <p className="product-captions">Product ID</p>
              <p className="product-captions product-item-lg">Product</p>
              <p className="product-captions">Rating</p>
              <p className="product-captions">Price</p>
              <p className="product-captions">Unit Cost</p>
              <p className="product-captions">Unit Profit</p>
              <p className="product-captions">Total Sales</p>
            </div>



            {search.length < 1 ?
              productItems?.map((item, index) => (
                <div key={index} className="product-items-container">
                  <p className="product-items font-weight-light">{item?.productID}</p>
                  {/* <p className="product-items">{item?.category.toUpperCase()}</p> */}
                  <div className="product-items product-item-lg">
                    <Avatar alt="Product-Image" src={item.productImage} sx={{ width: 60, height: 60 }} />
                    <p className="ms-1">{item.productName}</p>
                  </div>
                  <p className="product-items">{item.productRating}</p>
                  <p className="product-items">{item.unitPrice}</p>
                  <p className="product-items">{`${item.unitCost}`}</p>
                  <p className="product-items">{`${item.unitProfit}`}</p>
                  <p className="product-items">{`${item.totalSales}`}</p>

                </div>
              )) :
              searchedProducts?.map((item, index) => (
                <div key={index} className="product-items-container">
                  <p className="product-items font-weight-light">{item?.productID}</p>
                  {/* <p className="product-items">{item?.category.toUpperCase()}</p> */}
                  <div className="product-items product-item-lg">
                    <Avatar alt="Product-Image" src={item.productImage} sx={{ width: 60, height: 60 }} />
                    <p className="ms-1">{item.productName}</p>
                  </div>
                  <p className="product-items">{item.productRating}</p>
                  <p className="product-items">{item.unitPrice}</p>
                  <p className="product-items">{`${item.unitCost}`}</p>
                  <p className="product-items">{`${item.unitProfit}`}</p>
                  <p className="product-items">{`${item.totalSales}`}</p>

                </div>
              ))}

          </div>
        </div>
      </>


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
