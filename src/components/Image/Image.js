import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Image.css";

class Image extends Component {

  constructor(props) {

    super(props);
    this.state = {
      url: props.url
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("set false");
    const node = ReactDOM.findDOMNode(this);
    node.pause();
    this.setState({url: nextProps.url},
      this.handlePlay);
  }

  // This must be done to keep the videos playing
  // after shuffling them around.
  handlePlay = () => {

    const node = ReactDOM.findDOMNode(this);
    try{
      node.play();
    } catch(error) {
      console.log(error);
    }
  };

  // Renders a video tag with a Bootstrap class and
  // onClick handler provided from Main.
  // Class img-thumbnail is also customized.
  render(){
  
    return(   
        <video className="img-thumbnail"
               onClick={this.props.handleImgClick}
               autoPlay="true" loop="true" playsInline="true" name={this.state.url}>
          <source src={this.state.url+'.mp4'} type="video/mp4" />
          <img alt="" className="" src={this.state.url+'.webp'} />
        </video>);
  }
}

export default Image;
