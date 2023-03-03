import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import "./ManageProducts.css";
import { BackButton, ButtonSX, buttonSX, selectStyle } from "../../Util";
import { Avatar, Button, MenuItem, Select } from "@mui/material";
import Notification from "../../Utils/Notification";
import Loader from "../../Utils/Loader";
import { addNewProduct } from "../../Api-Interaction/api-Interaction";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import productDefault from "../../Images/product.jpg";
const ManageProducts = () => {
  const categories = [
    "Footwear",
    "Casual Clothing",
    "Formal Clothing",
    "Jwellery",
    "Accessories",
    "Sports",
  ];
  const [alert, setAlert] = useState({ flag: false, status: 1, message: "" });
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const productID = JSON.parse(localStorage.getItem("productID"));
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    productName: "",
    productID: productID + 1,
    unitPrice: 0,
    unitCost: 0,
    unitProfit: 0,
    productCategory: categories[0],
    productImage: "",
  });

  const handleChange = (prop) => (event) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleUpload = (event) => {
    const uploadedImage = event.target.files[0];

    if (
      !uploadedImage.type.includes("image") &&
      !uploadedImage.type.includes("webp")
    ) {
      //   return setAlert({ flag: true, status: 2, message: "Selected file is not an image!" })
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedImage);
    fileReader.onload = () => {
      setImage(fileReader.result);
    };
  };

  const handleSubmit = () => {
    const data = {
      productName: formValues.productName,
      productID: formValues.productID,
      unitPrice: formValues.unitPrice,
      unitCost: parseInt(formValues.unitCost),
      unitProfit: formValues.unitPrice - formValues.unitCost,
      productCategory: formValues.productCategory,
      productImage: image,
      totalSales: 0,
      productRating: 0,
      totalProfit: 0,
      totalEarning: 0,
      totalCosting: 0,
    };

    let validationFlag = false;

    // console.log(data)

    if (data.productCost > data.productPrice) {
      setAlert({
        flag: true,
        status: 2,
        message: "Product cost can not be greater than product cost!",
      });
      validationFlag = true;
    }
    if (data.unitCost === 0) {
      setAlert({ flag: true, status: 2, message: "Values can not be 0!" });
      validationFlag = true;
    }
    if (data.unitPrice === 0) {
      setAlert({ flag: true, status: 2, message: "Values can not be 0!" });
      validationFlag = true;
    }

    Object.keys(data).forEach((key) => {
      if (data[key] === "" || data[key] === null) {
        setAlert({
          flag: true,
          status: 2,
          message: "Can not have empty fields!",
        });
        validationFlag = true;
      }
      if (data[key] < 0) {
        setAlert({
          flag: true,
          status: 2,
          message: "Can not have negative values!",
        });
        validationFlag = true;
      }
    });

    if (validationFlag) return;

    return setAlert({
      flag: true,
      status: 1,
      message: "This is static button. API is disconnected!",
    });

    handleAPI(data);
  };

  const handleAPI = async (data) => {
    try {
      setOpen(true);

      let resultHandle = await addNewProduct(data);

      if (resultHandle?.success === true) {
        setOpen(false);
        // console.log(resultHandle?.message)
        window.location.reload();
        setAlert({ flag: true, status: 1, message: resultHandle?.message });
        localStorage.setItem("productID", JSON.stringify(data.productID));
      } else {
        setAlert({ flag: true, status: 2, message: resultHandle?.data.Error });
        setOpen(false);
      }
    } catch (err) {
      setOpen(false);
      console.log("Error! ", err);
    }
  };

  return (
    <div className="manage-products fadeUp">
      <Grid style={{ marginTop: "70px" }}>
        <h2 className="mb-2 ms-4 text-left">Add a product</h2>
      </Grid>

      <Grid container className="manage-products-container mb-4">
        <div className="w-100 ms-4 d-flex justify-content-start">
          <Button
            onClick={() => window.location.reload()}
            className="account-button"
            sx={BackButton}
          >
            <ArrowBackIosIcon /> Back
          </Button>
        </div>
        <Grid className="text-center mt-3 w-100">
          <h4>Enter product details</h4>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <div className="manage-card-container">
            <label className="manage-products-labels">Product Name</label>
            <input
              className="manage-products-input"
              placeholder="Type here.."
              onChange={handleChange("productName")}
              type="text"
            />
          </div>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product ID</label>
            <input
              disabled
              value={561}
              className="manage-products-input"
              placeholder="Type here.."
              onChange={handleChange("productID")}
              type="text"
            />
          </div>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product Price</label>
            <input
              className="manage-products-input"
              placeholder="Type here.."
              onChange={handleChange("unitPrice")}
              type="text"
            />
          </div>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product Profit</label>
            <input
              disabled
              value={formValues.unitPrice - formValues.unitCost}
              className="manage-products-input"
              placeholder="Type here.."
              onChange={handleChange("unitProfit")}
              type="text"
            />
          </div>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product Cost</label>
            <input
              className="manage-products-input"
              placeholder="Type here.."
              onChange={handleChange("unitCost")}
              type="text"
            />
          </div>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product Category</label>
            <Select
              sx={selectStyle}
              className="manage-products-input"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValues.productCategory}
              label="Timeline"
              onChange={handleChange("productImage")}
            >
              {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="manage-card-container ">
            <label className="manage-products-labels">Product Image</label>
            <input
              onChange={(event) => handleUpload(event)}
              type="file"
              className="manage-products-input"
              placeholder="Type here.."
            />
          </div>
          <div
            style={{ flexDirection: "column" }}
            className="manage-card-container"
          >
            <label
              style={{ fontSize: "22px" }}
              className="manage-products-labels w-100 text-center my-2"
            >
              Selected Image
            </label>
            <Avatar
              className="product-avatar"
              sx={{
                height: "300px",
                width: "300px",
                border: "3px solid whitesmoke",
              }}
              src={image.length > 0 ? image : productDefault}
            />
          </div>
        </Grid>
        <Grid className="text-center mt-3 w-100">
          <button
            disabled
            onClick={handleSubmit}
            className="account-button py-2 px-4"
            style={buttonSX}
          >
            Save and Add
          </button>
        </Grid>
      </Grid>
      <Notification alert={alert} setAlert={setAlert} />
      <Loader open={open} />
    </div>
  );
};

export default ManageProducts;
