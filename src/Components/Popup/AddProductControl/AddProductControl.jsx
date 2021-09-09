import React from "react";

const AddProductControl = () => {
  return (
    <div className="addProduct-container">
      <form action="">
        <fieldset className="fieldset">
          <div className="input-container">
            <label htmlFor="" className="label">
              Title
            </label>
            <input
              type="text"
              className="input-box input-title"
              name=""
              id=""
            />
          </div>
          <div className="input-container">
            <label htmlFor="" className="label">
              Category
            </label>
            <select name="" className="input-box input-category" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="" className="label">
              Description
            </label>
            <input type="text" className="input-box input-description" />
          </div>
          <div className="input-container">
            <label htmlFor="" className="label">
              Add Photo
            </label>
            <input type="file" className="input-photo" src="" alt="" />
          </div>
        </fieldset>
        <div className="save-btn-container">
          <input type="submit" className="save-btn" value="save changes" />
        </div>
      </form>
    </div>
  );
};

export default AddProductControl;
