import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Notification = ({ alert, setAlert }) => {


  return <>
    <Snackbar anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }} style={{ width: "fit-content", height: "100px" }} open={alert.flag} autoHideDuration={3000} onClose={() => setAlert({ flag: false , status: alert.status, message: alert.message })}>
      <Alert style={{ fontSize: "17px", display: "flex", alignItems: "center"}} onClose={() => setAlert({ flag: false, status: 2 })} severity={`${alert.status === 1 ? 'success' : 'error'}`} sx={{ width: '100%' }}>
        {alert.message}
      </Alert>
    </Snackbar>
  </>;
};

export default Notification;
