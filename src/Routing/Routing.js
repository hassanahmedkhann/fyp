import React from "react";
import { BrowserRouter as Router, Routes,Route, Redirect } from "react-router-dom";
import Login from "../Components/Authentication/Login";
import MainAnalytics from "../Components/MainUI/MainAnalytics";
import MainCampaign from "../Components/MainUI/MainCampaign";
import MainPipeline from "../Components/MainUI/MainPipeline";
import MainProducts from "../Components/MainUI/MainProducts";
import MainUI from '../Components/MainUI/MainUI'
import MainAccount from "../Components/MainUI/MainAccount"
import MainClusterPage from "../Components/MainUI/MainClusterPage";
import MainManageProducts from "../Components/MainUI/MainManageProducts";
import MainContact from "../Components/MainUI/MainContact";
import ReceiveOTP from "../Components/Authentication/ReceiveOTP";
import SendOTP from "../Components/Authentication/SendOTP";
import CreateNewPassword from "../Components/Authentication/CreateNewPassword";
const Routing = () => {
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/account" element={<MainAccount/>}/>
        <Route exact path="/dashboard" element={<MainUI/>}/>
        <Route exact path="/analytics" element={<MainAnalytics/>}/>
        <Route exact path="/pipeline" element={<MainPipeline/>}/>
        <Route exact path="/products" element={<MainProducts/>}/>
        <Route exact path="/campaign" element={<MainCampaign/>}/>
        <Route exact path="/cluster-page" element={<MainClusterPage/>}/>
        <Route exact path="/manage-products" element={<MainManageProducts/>}/>
        <Route exact path="/contact-team" element={<MainContact/>}/>
        <Route exact path="/forgot-1" element={<ReceiveOTP/>}/>
        <Route exact path="/forgot-2" element={<SendOTP/>}/>
        <Route exact path="/forgot-3" element={<CreateNewPassword/>}/>

    </Routes>
</Router>
  )
};

export default Routing;
