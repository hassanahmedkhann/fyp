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
    </Routes>
</Router>
  )
};

export default Routing;
