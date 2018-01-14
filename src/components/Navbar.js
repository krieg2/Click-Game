import React from "react";
import '../styles.css';

const Navbar = () =>
  <nav className="navbar fixed-top navbar-expand navbar-dark">
    <ul className="navbar-nav">
      <li className="brand nav-item text-center my-auto">
        <a href="/">Clicky Game</a>
       </li>
       <li className="nav-item text-center my-auto">You guessed correctly!</li>
       <li className="nav-item text-center my-auto">Score: 12 | Top Score: 12</li>
    </ul>
  </nav>;

export default Navbar;