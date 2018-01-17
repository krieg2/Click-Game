import React from "react";
import "./Footer.css";
import logo from "../../logo.svg";

// Footer with React.js logo.
const Footer = () =>
  <footer className="footer">
  Clicky Game!
    <div className="logoDiv">
      <img alt="react" src={logo} />
    </div>
  </footer>;

export default Footer;