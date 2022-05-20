//Button styles
export const buttonSX = {
  backgroundColor: "white",
  border: "1px solid #F04D41",
  padding: "5px 35px",
  borderRadius: "25px",
  maxWidth: "300px",
  fontSize: "20px",
  transition: "0.3s",
  color: "#F04D41"
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