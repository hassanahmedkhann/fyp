import React, { useState } from "react";
import sample from "../../Images/sample.jpg"
import "./Account.css"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Avatar, IconButton, Input, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { fontStyle } from "@mui/system";

const Account = () => {

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  //Modal Styles
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,

  };


  //Form Styles
  const formStyle={
    fontSize: "20px",
    marginBottom: "30px"
  }

  //Label Styles 
  const labelStyle = {
    marginBottom: "5px",
  }


  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  return (
    <div className="account fadeUp ">
      <div className="account-card">
      <div className="account-header mb-4 text-center pt-4 ps-4">
      <h2>Account Information</h2>
      </div>
      <div className="ps-4 account-box container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
          <form className="account-text justify-content-center">
      {/* <label>Organization Name:</label>
      <input placeholder="Hassan Ahmed Khan ( Can not change )" disabled type='text' />
      <label>Email: </label>
      <input placeholder="hassan.ahmed@gmail.com ( Can not change )" disabled disabled type='email' />
      <label>Password: </label>
      <input type="password"/>
      <label>Confirm Password: </label>
      <input type="password"/>
      <button className="mt-4">Save Changes</button> */}
        <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Name</InputLabel>
        <TextField
          id="outlined-read-only-input"
          fullWidth
          sx={formStyle}
          defaultValue="Hassan Ahmed Khan"
          variant="standard"
          InputProps={{
            readOnly: true,
          }}
          helperText="Can not change"
        />
        <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Email</InputLabel>
         <TextField
          fullWidth
          sx={formStyle}
          id="outlined-read-only-input"
          variant="standard"
          type='email'
          defaultValue="hassanahmed@origin8.com"
          InputProps={{
            readOnly: true,
          }}
          helperText="Can not change"
        />

        <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
            fullWidth
            sx={formStyle}
            variant="standard"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            // value='dummypassword'
            helperText="Min Length should be 8 with 1 special character and 1 Capital letter"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Confirm Password</InputLabel>
        <Input
            fullWidth
            sx={formStyle}
            margin="normal"
            variant="standard"
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            // value='dummypassword'
            helperText="Min Length should be 8 with 1 special character and 1 Capital letter"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />

      </form>
          </div>
          <div className="col-12 col-lg-6">
          <div className="account-text d-flex flex-column ps-3 align-items-center p-3">
      <InputLabel className="my-3" htmlFor="standard-adornment-password">Current Profile Picture</InputLabel>

      {/* <div className="account-image"><img src={sample} /><p onClick={handleOpen}>Change Profile Picture</p></div>   */}
      <div onClick={handleOpen} className="account-image"><Avatar className="account-avatar" sx={{height: '300px', width: '300px'}} src={sample} /><p>Change Profile Picture</p></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box className="d-flex flex-column align-items-center" sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Choose from Desktop/Computer
      </Typography>
      <input  className="my-3 account-file" type="file"/>
      <Typography className="mt-3" variant="h5">Selected Image</Typography>
      {/* <img src={sample} className="mt-4" style={{width: "300px", height: "300px", borderRadius: "20px"}}/> */}
      <Avatar sx={{height: '300px', width: '300px'}} src={sample}/>
      </Box>
      </Modal>
      </div>
          </div>
          <button className="account-button">Save Changes</button>      
        </div>
      
      
      {/* <input type="file" className="account-file" /> */}
      </div>
    </div>
    </div>
  );
};

export default Account;



