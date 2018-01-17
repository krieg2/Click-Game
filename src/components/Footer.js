import React from "react";
import "../styles.css";
import logo from "../logo.svg";

const Footer = () =>
  <footer className="footer">
  Clicky Game!
    <div className="logoDiv">
      <img alt="react" src={logo} />
    </div>
  </footer>;

export default Footer;