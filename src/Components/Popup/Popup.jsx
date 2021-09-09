import React, { useState } from "react";
import AddLogoControl from "./AddLogoControl/AddLogoControl";
import AddProductControl from "./AddProductControl/AddProductControl";
import ThemeControl from "./ThemeControl/ThemeControl";

const Popup = props => {
  const [showPopup, setShowPopup] = useState(false);

  const popupHandler = () => {
    setShowPopup(!showPopup);
  };

  // to prevent scrolling when the popup appears
  if (showPopup) {
    document.body.classList.add("active-modal");
  } else {
    console.log(showPopup);
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <button onClick={popupHandler} className="showPopup-btn">
        {props.popup === "addLogo" ? <div className="add-logo-btn">+</div> : ""}
        {props.popup === "theme" ? (
          <div className="toolbar-btn-container">
            <span className="toolbar-icon">
              <i className="fas fa-palette"></i>
            </span>
            <span>select theme</span>
          </div>
        ) : (
          ""
        )}
        {props.popup === "addProduct" ? (
          <div className="toolbar-btn-container">
            <span className="toolbar-icon ">+</span>

            <span>add product</span>
          </div>
        ) : (
          ""
        )}
      </button>
      <div className="popup-container">
        {showPopup && (
          // this part happens if the value of "showPopup" is true
          <div className="popup">
            <div onClick={popupHandler} className="overlay"></div>

            <div className="popup-content">
              <div className="control-box">
                <h2 className="title">
                  {props.popup === "addLogo" ? "Add Logo >" : ""}
                  {props.popup === "theme" ? "Theme >" : ""}
                  {props.popup === "addProduct" ? "Add Product >" : ""}
                </h2>
                <button className="close-btn" onClick={popupHandler}>
                  <i className="fas fa-times"></i>
                </button>
                {props.popup === "addLogo" ? <AddLogoControl /> : ""}
                {props.popup === "theme" ? (
                  <ThemeControl
                    themeHandler={props.themeHandler}
                    popupHandler={popupHandler}
                    theme={props.theme}
                  />
                ) : (
                  ""
                )}
                {props.popup === "addProduct" ? <AddProductControl /> : ""}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Popup;
