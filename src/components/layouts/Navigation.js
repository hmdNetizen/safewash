import React from "react";
import logo from "../../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="Brand Logo" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__listItem">
          <a href="#!" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__listItem">
          <a href="#!" className="nav__link">
            About Us
          </a>
        </li>
        <li className="nav__listItem">
          <a href="#!" className="nav__link">
            Become a Distributor
          </a>
        </li>
        <li className="nav__listItem">
          <a href="#!" className="nav__link">
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
