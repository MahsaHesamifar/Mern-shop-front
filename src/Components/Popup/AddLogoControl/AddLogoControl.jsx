import React from "react";

const AddLogoControl = () => {
  return (
    <form className="addLogoControl-container">
      <div className="addLogo-control">
        <p className="addLogo-p">Add your website Logo: </p>
        <div className="upload-container">
          <input type="file" className="upload-input" src="" alt="" />
        </div>
      </div>
      <button className="save-btn">save changes</button>
    </form>
  );
};

export default AddLogoControl;
