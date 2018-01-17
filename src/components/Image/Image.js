import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Image.css";

class Image extends Component {

  constructor(props) {

    super(props);
    this.state = {};
  }

  // This must be done to keep the videos playing
  // after shuffling them around.
  componentDidUpdate(nextProps) {

     const node = ReactDOM.findDOMNode(this);
     if(node.readyState > 1){
       try{
         node.load();
         node.play();
       } catch(error) {
         console.log(error);
       }
     }
   }

  // Renders a video tag with a Bootstrap class and
  // onClick handler provided from Main.
  // Class img-thumbnail is also customized.
  render(){
  
    return(   
        <video className="img-thumbnail" onClick={this.props.handleImgClick}
               autoPlay="true" loop="true" playsInline="true" name={this.props.url}>
          <source src={this.props.url+'.mp4'} type="video/mp4" />
          <img alt="" className="" src={this.props.url+'.webp'} />
        </video>);
  }
}

export default Image;
