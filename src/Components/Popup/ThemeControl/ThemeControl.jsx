import React, { useState } from "react";

const ThemeControl = props => {
  return (
    <form
      onSubmit={props.themeHandler}
      onChange={props.themeHandler}
      className="themeControl-container"
    >
      <div className="theme-control">
        <p className="theme-p">choose your theme:</p>
        <div className="theme-container">
          <div className="theme-div">
            <input
              type="radio"
              name="palette"
              className="theme theme-light"
              id="light"
              value="light"
              defaultChecked={props.theme.palette === "light"}
            />
            <label htmlFor="light">light</label>
          </div>
          <div className="theme-div">
            <input
              type="radio"
              name="palette"
              className="theme  theme-dim"
              id="dim"
              value="dim"
              defaultChecked={props.theme.palette === "dim"}
            />
            <label htmlFor="dim">dim</label>
          </div>
          <div className="theme-div">
            <input
              type="radio"
              name="palette"
              className="theme  theme-dark"
              id="dark"
              value="dark"
              defaultChecked={props.theme.palette === "dark"}
            />
            <label htmlFor="dark">dark</label>
          </div>
        </div>
      </div>
      <input
        onClick={props.popupHandler}
        onSubmit={props.popupHandler}
        type="submit"
        className="save-btn"
        value="save changes"
      />
      {/* <button type="submit" className="save-btn">
        save changes
      </button> */}
    </form>
  );
};

export default ThemeControl;
