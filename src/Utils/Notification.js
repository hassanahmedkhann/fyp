import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Notification = ({ alert, setAlert }) => {


  return <>
    <Snackbar open={alert.flag} autoHideDuration={3000} onClose={() => setAlert({ flag: false, status: 2 })}>
      <Alert onClose={() => setAlert({ flag: false, status: 2 })} severity={`${alert.status === 1 ? 'success' : 'error'}`} sx={{ width: '100%' }}>
        {alert.message}
      </Alert>
    </Snackbar>
  </>;
};

export default Notification;
