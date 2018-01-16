import React, { Component } from 'react';
import '../styles.css';

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
    const elm = this.refs.button;
    elm.addEventListener("animationend", this.handleAnimation);
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

    return ( <li ref='button' className={`nav-item text-center my-auto ${this.state.status}`} >{this.state.message}</li> );
  }
}

export default Status;