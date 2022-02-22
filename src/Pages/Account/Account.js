import React from "react";
import gif from "../../Images/loading.gif";
const Account = () => {
  return (
    <div>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <img style={{ width: "200px", height: "200px" }} src={gif} alt="gif" />
      </div>
    </div>
  );
};

export default Account;
