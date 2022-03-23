import React, { useEffect, useState } from "react";
import "./Productlist.css"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
const Productlist = () => {

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

  return <div className="productlist p-4">
    <div className="d-flex justify-content-between">
      <h3 className="mt-3">Products List </h3><p className="icon-div" style={{ backgroundColor: "#F4752C" }}><FormatListBulletedIcon style={{ fontSize: "40px", color: "white" }} /></p>
    </div>
    <div className="productlist-items d-flex flex-column">
      {
        productItems.slice(1, 20).map((product, index) => (
          <h5 key={index} className="my-2 productItem mx-1">{product.title}</h5>
        ))
      }
    </div>

  </div>;
};

export default Productlist;
