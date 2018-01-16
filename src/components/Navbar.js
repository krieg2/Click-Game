import React from "react";
import Status from "./Status";
import '../styles.css';

const Navbar = (props) => {

  return(
    <nav className="navbar fixed-top navbar-expand navbar-dark container-fluid">
      <div className="row w-100">
        <div className="brand nav-item text-center my-auto col col-4">
          <a href="/">Clicky Game</a>
        </div>
        <Status status={props.status}/>
        <div className="nav-item text-center my-auto col col-4">Score: {props.score} | Top Score: {props.topScore}</div>
      </div>
    </nav>
  );
};

export default Navbar;