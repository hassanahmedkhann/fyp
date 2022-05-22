import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import "./ManageProducts.css"
import { ButtonSX, buttonSX, modalStyle, BackButton } from '../../Util';
import { Avatar, Button, MenuItem, Modal, Select, Typography } from '@mui/material';
import Notification from '../../Utils/Notification';
import Loader from '../../Utils/Loader';
import { addNewProduct, deleteProduct, getProduct, updateProduct } from '../../Api-Interaction/api-Interaction';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const UpdateProduct = (props) => {

    const categories = ['Footwear', 'Casual Clothing', 'Formal Clothing', 'Jwellery', 'Accessories', 'Sports']
    const [alert, setAlert] = useState({ flag: false, status: 1, message: "" });
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState('')
    const navigate = useNavigate()
    const [productData, setProductData] = useState()
    const [searchedProduct, setSearchedProduct] = useState(0)
    const [existFlag, setExistFlag] = useState(false)
    const [openModal, setOpenModal] = useState(false);






    const [formValues, setFormValues] = useState({
        productName: 0,
        productID: '',
        unitPrice: 0,
        unitCost: 0,
        unitProfit: 0,
        productCategory: '',
        productImage: '',
    })

    const handleChange = (prop) => (event) => {
        setFormValues({ ...formValues, [prop]: event.target.value });
    };

    const handleSearch = async () => {

        if (searchedProduct === 0 || searchedProduct === '') return setAlert({ flag: true, 'status': 2, message: "Please enter a product ID" });
        if (isNaN(searchedProduct)) return setAlert({ flag: true, 'status': 2, message: "Product ID needs to be a number" });



        try {
            setOpen(true)

            let resultHandle = await getProduct(searchedProduct);

            if (resultHandle?.success === true) {
                // console.log(resultHandle?.message)
                setOpen(false);
                setProductData(resultHandle?.message)
                setAlert({ flag: true, 'status': 1, message: "Product Exists!" });
                setExistFlag(true)
                if (props.choice === 3) setOpenModal(true)
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

    }

    const handleUpload = (event) => {

        const uploadedImage = event.target.files[0]

        if (!uploadedImage.type.includes('image') && !uploadedImage.type.includes('webp')) {
            //   return setAlert({ flag: true, status: 2, message: "Selected file is not an image!" })
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage)
        fileReader.onload = () => {
            setImage(fileReader.result)
        }

    }

    const handleSubmit = () => {

        const data = {
            productName: formValues?.productName || productData?.productName,
            productID: formValues?.productID || productData?.productID,
            unitPrice: formValues?.unitPrice || productData?.unitPrice,
            unitCost: formValues?.unitCost || productData?.unitCost,
            unitProfit: (formValues?.unitPrice - formValues?.unitCost) || productData?.unitProfit,
            productCategory: formValues?.productCategory || productData?.productCategory,
            productImage: image.length > 0 ? image : productData?.productImage,
            totalSales: 0,
            productRating: 0,
            totalProfit: 0,
            totalEarning: 0,
            totalCosting: 0
        }

        let validationFlag = false

        // console.log(data)

        if (data.productCost > data.productPrice) {
            setAlert({ flag: true, 'status': 2, message: "Product cost can not be greater than product cost!" });
            validationFlag = true
        }
        if (data.unitCost === 0) {
            setAlert({ flag: true, 'status': 2, message: "Values can not be 0!" });
            validationFlag = true
        }
        if (data.unitPrice === 0) {
            setAlert({ flag: true, 'status': 2, message: "Values can not be 0!" });
            validationFlag = true
        }

        Object.keys(data).forEach((key) => {
            if (data[key] === '' || data[key] === null) {
                setAlert({ flag: true, 'status': 2, message: "Can not have empty fields!" });
                validationFlag = true
            }
            if (data[key] < 0) {
                setAlert({ flag: true, 'status': 2, message: "Can not have negative values!" });
                validationFlag = true
            }
        })



        if (validationFlag) return

        handleAPI(data)

    }

    const handleChoice = async () => {
        try {
            setOpen(true)

            let resultHandle = await deleteProduct(productData?.productID);

            if (resultHandle?.success === true) {
                setOpen(false);
                setOpenModal(false)
                setAlert({ flag: true, 'status': 1, message: resultHandle?.message.Success });
                setTimeout(() => {
                    navigate('/products')
                }, 1000);
            }
            else {
                console.log(resultHandle)
                setAlert({ flag: true, 'status': 2, message: resultHandle?.data });
                setOpen(false)
            }

        }
        catch (err) {
            setOpen(false)
            console.log("Error! ", err)
        }
    }

    const handleCancel = () => {
        window.location.reload()
        setOpenModal(false)
    }


    const handleAPI = async (data) => {


        try {
            setOpen(true)

            let resultHandle = await updateProduct(data?.productID, data);

            if (resultHandle?.success === true) {
                setOpen(false);
                // console.log(resultHandle?.message)
                window.location.reload()
                setAlert({ flag: true, 'status': 1, message: resultHandle?.message.Success });

            }
            else {
                console.log(resultHandle)
                setAlert({ flag: true, 'status': 2, message: resultHandle?.data });
                setOpen(false)
            }

        }
        catch (err) {
            setOpen(false)
            console.log("Error! ", err)
        }

    }

    const handleClose = () => {
        setOpenModal(true)
    }

    return (
        <div className='manage-products fadeUp'>
            <Grid>
               { !existFlag && <div className='w-100 ms-4 d-flex justify-content-start'>
                    <Button style={{ marginTop: "50px" }} onClick={() => window.location.reload()} className="account-button" sx={BackButton}><ArrowBackIosIcon /> Back</Button>
                </div>}
                {props.choice === 1 && <h2  className={`mb-2 ms-4 text-left mt-3 ${existFlag && 'margin'}`}>Edit/Update a product</h2>}
                {props.choice === 3 && <h2  className={`mb-2 ms-4 text-left mt-3 ${existFlag && 'margin'}`}>Search the product</h2>}

                {!existFlag && <div className='my-4'>
                    <input required onChange={(event) => setSearchedProduct(event.target.value)} style={{ width: "fit-content" }} className="manage-products-input ms-4" placeholder="Enter product ID" type="text" />
                    <Button onClick={handleSearch} sx={ButtonSX} className="mt-2 ms-2 account-button">Check for availability</Button>
                </div>
                }
            </Grid>
            <Modal
                // backdrop="static"
                // onHide={() => window.location.reload()}
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="d-flex flex-column align-items-center" sx={modalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Are you sure you want to delete the following product ?
                    </Typography>
                    <div className="deleteProductModal">
                        <Avatar sx={{ height: '70px', width: '70px' }} src={productData?.productImage} />
                        <p>{productData?.productName}</p>
                    </div>
                    <div className="d-flex justify-content-evenly mt-4">
                        <button onClick={handleChoice} className="ms-2 btn-1">Yes</button>
                        <button onClick={handleCancel} className="ms-2 btn-2">No</button>
                    </div>
                </Box>
            </Modal>

            {(existFlag && props.choice !== 3) && <Grid container className='manage-products-container'>
                <div className='w-100 ms-4 d-flex justify-content-start'>
                    <Button onClick={() => window.location.reload()} className="account-button" sx={BackButton}><ArrowBackIosIcon /> Back</Button>
                </div>

                <Grid className='text-center mt-3 w-100'>
                    <h4>Product details</h4>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <div className="manage-card-container">
                        <label className="manage-products-labels">Product Name</label>
                        <input className="manage-products-input" value={formValues?.productName.length >= 0 ? formValues?.productName : productData?.productName} onChange={handleChange('productName')} type="text" />
                    </div>
                    <div className="manage-card-container ">
                        <label className="manage-products-labels">Product ID</label>
                        <input disabled value={productData?.productID} className="manage-products-input" placeholder="Type here.." onChange={handleChange('productID')} type="text" />
                    </div><div className="manage-card-container ">
                        <label className="manage-products-labels">Product Price</label>
                        <input value={formValues?.unitPrice.length >= 0 ? formValues?.unitPrice : productData?.unitPrice} className="manage-products-input" placeholder="Type here.." onChange={handleChange('unitPrice')} type="text" />
                    </div>
                    <div className="manage-card-container ">
                        <label className="manage-products-labels">Product Profit</label>
                        <input disabled value={formValues?.unitPrice.length >= 0 || formValues?.unitCost.length >= 0 ? (formValues?.unitPrice - formValues.unitCost) : productData?.unitProfit} className="manage-products-input" placeholder="Type here.." onChange={handleChange('unitProfit')} type="text" />
                    </div>
                    <div className="manage-card-container ">
                        <label className="manage-products-labels">Product Cost</label>
                        <input value={formValues?.unitCost.length >= 0 ? formValues?.unitCost : productData?.unitCost} className="manage-products-input" placeholder="Type here.." onChange={handleChange('unitCost')} type="text" />
                    </div>
                    <div className="manage-card-container ">
                        <label className="manage-products-labels">Product Category</label>
                        <Select
                            className='manage-products-input'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formValues?.productCategory === '' ? productData?.productCategory : formValues?.productCategory}
                            label="Timeline"
                            onChange={handleChange('productCategory')}
                        >
                            {categories.map((category, index) => (
                                <MenuItem key={index} value={category}>{category}</MenuItem>
                            ))
                            }
                        </Select>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>

                    <div className="manage-card-container ">
                        <label className="manage-products-labels">Product Image</label>
                        <input onChange={(event) => handleUpload(event)} type="file" className="manage-products-input" placeholder="Type here.." />
                    </div>
                    <div style={{ flexDirection: "column" }} className="manage-card-container">
                        <label style={{ fontSize: "22px" }} className="manage-products-labels w-100 text-center my-2">Current Image</label>
                        <Avatar sx={{ height: '300px', width: '300px' }} src={image || productData?.productImage} />
                    </div>


                </Grid>
                <Grid className='text-center mt-3 w-100'>
                    <button onClick={handleSubmit} className='account-button' style={buttonSX}>Save changes</button>
                </Grid>
            </Grid>}
            <Notification alert={alert} setAlert={setAlert} />
            <Loader open={open} />
        </div>
    )
}

export default UpdateProduct
