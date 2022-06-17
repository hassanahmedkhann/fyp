import React, {  useState } from "react";
import "./Account.css"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, IconButton, InputLabel, TextField } from "@mui/material";
import Notification from "../../Utils/Notification"
import Loader from "../../Utils/Loader";
import { updateUser } from "../../Api-Interaction/api-Interaction";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { buttonSX } from "../../Util"

const Account = () => {

  const [showPassword, setShowPassword] = useState()

  const [open, setOpen] = useState(false)

  const [timerFlag, setTimerFlag] = useState(false)

  const navigate = useNavigate()

  const [alert, setAlert] = useState({
    flag: false,
    status: 1,
    message: ""
  })


  const [openModal, setOpenModal] = useState(false);

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/

  const user = JSON.parse(localStorage.getItem('user'));

  const [values, setValues] = useState({
    email: user?.email,
    companyName: user?.companyName,
    oldPassword: "",
    confirmPassword: '',
    password: '',
  });

  const [image, setImage] = useState({ preview: '', selected: user?.profileImage })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };




  //Modal Styles
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    maxWidth: 500,
    bgcolor: 'white',
    border: 'none',
    boxShadow: 24,
    borderRadius: '25px',
    p: 4,
  };


  //Form Styles
  const formStyle = {
    fontSize: "20px",
    marginBottom: "30px",
    width: "100%"
  }

  //Label Styles 
  const labelStyle = {
    marginBottom: "5px",
    width: "100%"
  }

  const handleUpload = (event) => {

  const uploadedImage = event.target.files[0]

  if ( !uploadedImage.type.includes('image') && !uploadedImage.type.includes('webp') ){
    setOpenModal(false)
    return setAlert({ flag: true, status: 2, message: "Selected file is not an image!" })
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(uploadedImage)
  fileReader.onload = () => {
      setImage({ preview: fileReader.result, selected: user?.profileImage })
      localStorage.setItem('image', JSON.stringify(fileReader.result))
    }

  }


  const handleImageSelection = () => {
    if (image.preview === '') return setAlert({ flag: true, 'status': 2, message: "No picture uploaded!" });
    setImage({ preview: '', selected: JSON.parse(localStorage.getItem("image")) })
    setOpenModal(false)
    localStorage.removeItem('image')
  }



  const handleForm = () => {


    //Empty Fields
    Object.keys(values).forEach((key) => {
      if (values[key] === null || values[key] === undefined || values[key] === "") {
        return setAlert({ flag: true, status: 2, message: "Can not have empty fields!" })
      }
    })

    //Passwords validation
    if (values.confirmPassword !== values.password) {
      return setAlert({ flag: true, status: 2, message: "Passwords do not match!" })
    }

    //Regex validation
    let val = regex.test(values.password)
    if (!val) {
      return setAlert({ flag: true, status: 2, message: "Min length should be 8 with 1 special character and 1 Capital letter" })
    }


    const accountData = {
      "email": values.email,
      "companyName": values.companyName,
      "oldPassword": values.oldPassword,
      "password": values.password,
      'profileImage': image?.selected?.length > 0 ? image?.selected : user?.profileImage
    }

    Object.keys(accountData).forEach((key)=>{
      if (accountData[key] == null || accountData[key] == '') delete accountData[key]
    })


    console.log(accountData)
    handleAPI(accountData)

  }

  const handleAPI = async (data) => {

    const user = JSON.parse(localStorage.getItem('user'));
    
    try {
      setOpen(true)
      let resultHandle = await updateUser(data, user._id);

      if (resultHandle?.success === true) {
        setOpen(false);
        setAlert({ flag: true, 'status': 1, message: resultHandle?.message.Success });
        localStorage.setItem('user', JSON.stringify(resultHandle?.message.User_Data))
        setTimerFlag(true)
        setTimeout(() => {
          setTimerFlag(false)
          navigate('/dashboard')
        }, 1000);
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



  return (
    <div className="account fadeUp">
      <Notification alert={alert} setAlert={setAlert} />
      <Loader open={open} />
      <div className="account-card">
        <div className="account-header mb-4 text-center pt-4 ps-4">
          <h2>Account Information</h2>
        </div>
        <div className="px-2 account-box container-fluid">
          <div style={{ display: "flex", justifyContent: "center" }} className="row">
            <div className="p-0 col-12 col-lg-6">
              <form className="account-text justify-content-center">
                <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Company Name</InputLabel>
                <TextField
                  fullWidth
                  sx={formStyle}
                  defaultValue={values.companyName}
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
                  defaultValue={values.email}
                  InputProps={{
                    readOnly: true,
                  }}
                  helperText="Can not change"
                />

                <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Old Password</InputLabel>
                <span className="d-flex align-items-center mb-3">
                  <TextField
                    helperText={"Note: Please enter yout old password!"}
                    variant="standard"
                    onChange={handleChange('oldPassword')}
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                  />
                  <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                </span>

                <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">New Password</InputLabel>
                <span className="d-flex align-items-center mb-3">
                  <TextField
                    helperText={values.password !== values.confirmPassword ? `Passwords do not match!` : "Note: Min length should be 8 with 1 special character and 1 Capital letter"}
                    variant="standard"
                    onChange={handleChange('password')}
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                  />
                  <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                </span>

                <InputLabel sx={labelStyle} htmlFor="standard-adornment-password">Confirm New Password</InputLabel>
                <span className="d-flex align-items-center mb-4">
                  <TextField
                    error={values.password === values.confirmPassword ? false : true}
                    helperText={values.password !== values.confirmPassword ? `Passwords do not match!` : "Note: Min length should be 8 with 1 special character and 1 Capital letter"}
                    variant="standard"
                    onChange={handleChange('confirmPassword')}
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                  />
                  <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
                </span>



              </form>
            </div>
            <div className="col-12 col-lg-6">
              <div className="account-text d-flex flex-column ps-3 align-items-center p-3">
                <InputLabel className="my-3" htmlFor="standard-adornment-password">Current Profile Picture</InputLabel>

                {/* <div className="account-image"><img src={sample} /><p onClick={handleOpen}>Change Profile Picture</p></div>   */}
                <div onClick={() => setOpenModal(true)} className="account-image"><Avatar className="account-avatar" sx={{ height: '300px', width: '300px' }} src={image?.selected} /><p>Change Profile Picture</p></div>
                <Modal
                  open={openModal}
                  onClose={() => setOpenModal(false)}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="d-flex flex-column align-items-center" sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Choose from Desktop/Computer
                    </Typography>
                    <input accept="image/*" className="my-3 account-file" type="file" onChange={(e) => handleUpload(e)} />
                    <Typography className="mt-3" variant="h5">Selected Image</Typography>
                    {/* <img src={sample} className="mt-4" style={{width: "300px", height: "300px", borderRadius: "20px"}}/> */}
                    <Avatar className="account-avatar" sx={{ height: '300px', width: '300px' }} src={image.preview.length > 0 ? image.preview : null} />
                    <button style={buttonSX} onClick={handleImageSelection} className="account-button mt-2 p-2">Select this Image</button>
                  </Box>
                </Modal>
              </div>
            </div>
            <button disabled={timerFlag} style={buttonSX} onClick={handleForm} className="account-button p-2">Save Changes</button>
          </div>


        </div>
      </div>
    </div >
  );
};

export default Account;



