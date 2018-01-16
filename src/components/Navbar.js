import React from "react";
import Status from "./Status";
import '../styles.css';

const Navbar = (props) => {

  return(
    <nav className="navbar fixed-top navbar-expand navbar-dark">
      <ul className="navbar-nav">
        <li className="brand nav-item text-center my-auto">
        <a href="/">Clicky Game</a>
        </li>
        <Status status={props.status}/>
        <li className="nav-item text-center my-auto">Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
};

export default Navbar;