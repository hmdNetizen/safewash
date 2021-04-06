import React from "react";
import logo from "../../assets/logo.png";

const tabs = [
  { id: 0, title: "Home" },
  { id: 1, title: "About Us" },
  { id: 2, title: "Become a Distributor" },
  { id: 3, title: "Contact Us" },
];

const Navigation = () => {
  return (
    <div className="navigation">
      <a href="#!">
        <img src={logo} alt="Brand Logo" className="navigation__logo" />
      </a>
      <div className="navigation__menu">
        <span className="navigation__menuIcon" />
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {tabs.map((tab) => (
            <li className="navigation__listItem" key={tab.id}>
              <a href="#!" className="navigation__link">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
