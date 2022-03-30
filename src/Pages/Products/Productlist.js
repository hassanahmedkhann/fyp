import React, { useEffect, useState } from "react";
import "./Productlist.css"
import { CircularProgress } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { getProducts } from "../../Api-Interaction/api-Interaction";
import Loader from "../../Utils/Loader";
import Notification from "../../Utils/Notification";
const Productlist = () => {

  const [productItems, setProductItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({ flag: false, status: 1, message: "" });





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

  return (<>
    {
      open ? <CircularProgress color="inherit" /> :
        <div className="productlist p-4">
          <Notification alert={alert} setAlert={setAlert} />
          <div className="d-flex justify-content-between">
            <h3 className="mt-3">Products List (Total {productItems?.length})</h3><p className="icon-div" style={{ backgroundColor: "#F4752C" }}><FormatListBulletedIcon style={{ fontSize: "40px", color: "white" }} /></p>
          </div>
          <div className="productlist-items d-flex flex-column">
            {
              productItems.map((product, index) => (
                <h5 key={index} className="my-2 productItem mx-1">{product?.productName}</h5>
              ))
            }
          </div>

        </div>
    }
  </>)
};

export default Productlist;
