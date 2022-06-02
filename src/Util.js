//Button styles
export const buttonSX = {
  backgroundColor: "white",
  border: "1px solid #F04D41",
  padding: "5px 5px",
  borderRadius: "25px",
  maxWidth: "300px",
  fontSize: "18px",
  transition: "0.3s",
  color: "#F25839"
}

 //Modal Styles
 export const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  bgcolor: 'white',
  border: 'none',
  boxShadow: 24,
  borderRadius: '25px',
  p: 4,
};

//Button styles 2
export const ButtonSX = {
  backgroundColor: "white",
  border: "1px solid #F04D41",
  // border: "1px solid #F4752C",
  padding: "5px 35px",
  borderRadius: "10px",
  maxWidth: "300px",
  fontSize: "18px",
  transition: "0.3s",
  color: "#F04D41",
  minWidth: "280px",
}

//Button styles 2
export const checkButton = {
  backgroundColor: "white",
  border: "1px solid #F04D41",
  padding: "5px 35px",
  borderRadius: "25px",
  maxWidth: "300px",
  fontSize: "15px",
  transition: "0.3s",
  color: "#F25839",
  minWidth: "280px",
}

//Button styles 3
export const BackButton = {
  backgroundColor: "white",
  border: "1px solid #F04D41",
  padding: "5px 35px",
  borderRadius: "25px",
  maxWidth: "300px",
  fontSize: "15px",
  transition: "0.3s",
  color: "#F04D41",
}


export const searchFunction = (searchKey, data) => {

  const records = []

  data.forEach((product) => {
    if (product.productName.toLowerCase().includes(searchKey.toLowerCase())) {
      records.push(product)
    }
  })
  return records
}

export const convertBase64 = (file) => {
  // return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      return fileReader.result;
    }
}

export const selectStyle = {
  border: "1px solid #F4752C !important",
  padding: "5px 10px !important",
  color: "#F4752C",
  marginBottom: "20px !important"
}

export const menuItemStyle = {
}