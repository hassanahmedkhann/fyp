import React, { useEffect, useState } from "react";
import "./Products.css";
import searchIcon from "../../Images/searchicon.png";
import ProductBox from "./ProductBox";
const Products = () => {
  const [productItems, setProductItems] = useState([]);

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
  console.log(productItems[0]);
  return (
    <div className="products-main">
      {productItems.length > 0 && (
        <>
          <div className="my-4 w-100 d-flex justify-content-center">
            <h1 className="text-heading btn-animated-pop btn-animated">
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
          <div className="my-4 w-100 d-flex justify-content-center">
            <h1 className="text-heading btn-animated-pop btn-animated">
              All Products
            </h1>
          </div>
          <div className="products-container">
            <div className="searchbar-container">
              <div className="searchbar">
                <img alt="search-icon" src={searchIcon} />
                <input type="text" placeholder="Search Product" />
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
                    <img alt="Product-Image" src={item.image} />
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
        <h1 style={{ height: "100vh" }}>Loading Products..</h1>
      )}
    </div>
  );
};

export default Products;
