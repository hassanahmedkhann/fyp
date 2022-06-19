import { Box, Button, CircularProgress, Fade, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import { getProductAnalysis } from "../../Api-Interaction/api-Interaction"
import React, { useEffect, useState } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import numeral from "numeral";
import CancelIcon from '@mui/icons-material/Cancel';
import { CancelOutlined } from "@mui/icons-material";

const ProductAnalysis = ({ modalState, setModalState, loadFlag }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "fit-content",
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 4,
        borderRadius: "10px"
    };

    const [open, setOpen] = useState(false);
    const [productData, setProductData] = useState();
    const [chartData, setChartData] = useState([{ name: "All Sales", sold: JSON.parse(localStorage.getItem('totalPurchases')) }]);






    useEffect(async () => {

        if (modalState.open) {
            try {
                setOpen(true)
                let resultHandle = await getProductAnalysis(modalState.product.productID);

                if (resultHandle?.success === true) {
                    // console.log(resultHandle?.message)
                    setProductData(resultHandle?.message)
                    chartData.push({ name: "Product Sales", sold: resultHandle?.message?.totalSold })
                    setChartData(chartData)
                    setOpen(false);
                }
                else {
                    setOpen(false)
                }

            }
            catch (err) {
                setOpen(false)
                console.log("Error! ", err)
            }
        }



    }, [loadFlag]);


    const handleClose = () => {
        setChartData([{ name: "All Sales", sold: JSON.parse(localStorage.getItem('totalPurchases')) }])
        setModalState({ open: false, product: null })
    }



    const COLORS = ['#F25839','gray']


    return <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalState.open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
    >
        <Fade in={modalState.open}>
            <Box sx={style}>
                {!open ?
                    <div>
                        <h4 className="w-100 d-flex justify-content-end p-1"><CancelIcon onClick={handleClose} sx={{ fontSize: "35px", color: "red", cursor: "pointer" }} /></h4>
                        <h1>Product Analysis</h1>
                        <div className="productAnalysisText d-flex">
                            <div>
                                <p>Product: {productData?.product?.productName}</p>
                                <p>ID: {productData?.product?.productID}</p>
                                <p>Category: {productData?.product?.productCategory}</p>
                                <p>Rating: {productData?.product?.productRating}</p>
                                <p>Unit Cost: {productData?.product?.unitCost}</p>
                            </div>
                            <div >
                                <p>Unit Price: {numeral(productData?.product?.unitPrice).format('($ 0.000 a)')}</p>
                                <p>Unit Profit: {numeral(productData?.product?.unitProfit).format('($ 0.000 a)')}</p>
                                <p>Total Units Sold: {numeral(productData?.totalSold).format('(0.000 a)')}</p>
                                <p>Total Profit Generated: {numeral(productData?.totalSold * productData?.product?.unitProfit).format('($ 0.000 a)').toUpperCase()}</p>
                                <p>Total Earnings Generated: {numeral(productData?.totalSold * productData?.product?.unitPrice).format('($ 0.000 a)').toUpperCase()}</p>
                            </div>
                            <PieChart width={350} height={350}>
                                <Tooltip />
                                <Pie data={chartData} dataKey="sold" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#F4752C" />     
                            </PieChart>
                        </div>
                    </div>
                    :
                    <div className="d-flex w-100 align-items-center">
                        <div className="me-4">Loading</div> <CircularProgress />
                    </div>
                }
            </Box>
        </Fade>
    </Modal>

};

export default ProductAnalysis;
