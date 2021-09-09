import React from "react";
import Logo from "./LogoBtn";

const Nav = () => {
  return (
    <nav className="Nav-bar">
      <ul className="ul">
        <li className="li li-logo">
          <div className="logo-btn">
            <Logo />
          </div>
        </li>
        <li className="li li-search">
          <form className="input-container">
            <input className="search-input" type="text" placeholder=" Search" />
          </form>
        </li>
        <li className="li li-item home-page">
          <a href="/" className="a-item">
            Home
          </a>
        </li>
        <li className="li li-item">
          <a href="/Categories" className="a-item">
            categories
          </a>
        </li>
        <li className="li li-item">
          <a href="#" className="a-item">
            <i className="fas fa-shopping-cart"></i>
          </a>
        </li>
        <li className="li li-profile">
          <div className="profile-btn">
            <a href="#">P</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
