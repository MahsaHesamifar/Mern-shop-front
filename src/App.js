import React, { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Toolbar from "./Components/Toolbar/Toolbar";
import "./Styles/App.scss";

const App = () => {
  const [theme, setTheme] = useState({
    palette: "light",
  });
  const { palette } = theme;
  const themeHandler = event => {
    const { name, value } = event.target;
    setTheme(prevState => ({ ...prevState, [name]: value }));
    // console.log("theme", theme);
  };

  return (
    <div className="app-container palette" data-theme-palette={palette}>
      <div className="box-shadow">
        <Nav />
        <Toolbar themeHandler={themeHandler} theme={theme} />
      </div>

      <div className="pages">
        <Home />
      </div>
    </div>
  );
};

export default App;
