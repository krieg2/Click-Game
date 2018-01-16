import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../styles.css';

class Image extends Component {

  constructor(props) {

    super(props);
    this.state = {};
  }

  componentDidUpdate(nextProps) {

     const node = ReactDOM.findDOMNode(this);
     node.load();
     node.play();
   }

  render(){
  
    return(   
        <video className="img-thumbnail" onClick={this.props.handleImgClick}
               autoPlay="true" loop="true" playsinline="true" name={this.props.url}>
          <source src={this.props.url+'.mp4'} type="video/mp4" />
          <img alt="" className="" src={this.props.url+'.webp'} />
        </video>);
  }
}

export default Image;
