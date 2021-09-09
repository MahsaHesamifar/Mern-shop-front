import React from "react";
import Popup from "../Popup/Popup";

const Toolbar = props => {
  // const [popupName, setpopupName] = useState("+");
  return (
    <div className="toolbar-container">
      <div className="toolbar-item edit-btn">
        <span className="edit-label">edit: </span>
        <div className="toggle">
          <input type="checkbox" />
        </div>
        {/* <button className="toolbar-btn edit-btn">O</button> */}
      </div>
      <div className="toolbar-item  theme-btn">
        {/* <Popup /> */}
        <Popup
          popup="theme"
          theme={props.theme}
          themeHandler={props.themeHandler}
        />
      </div>

      <div className="toolbar-item addProduct-btn">
        <Popup popup="addProduct" />
      </div>
      {/* <div className="toolbar-item addLogo-btn">
        <Popup popup="addLogo" />
      </div> */}
    </div>
  );
};

export default Toolbar;
