import React, { Component } from "react";
import "./Status.css";

class Status extends Component {

  state = {
      status: "",
      message: "Click an image to begin!"
  };

  handleAnimation = (event) => {

    this.setState({
      status: ""
    });
  };

  componentDidMount () {
 
    const element = this.refs.statusDiv;
    element.addEventListener("animationend", this.handleAnimation);
  }

  componentWillReceiveProps(nextProps){

    let messageText = "";
    if(nextProps.status === "correct"){
      messageText = "You guessed correctly!";
    } else if(nextProps.status === "incorrect"){
      messageText = "You guessed incorrectly!";
    }

	this.setState( (prevState, props) => {
	  return {status: props.status, message: messageText};
	});  	
  }

  render() {

    return ( <div ref="statusDiv" className={`nav-item text-center my-auto col col-4 ${this.state.status}`} >{this.state.message}</div> );
  }
}

export default Status;