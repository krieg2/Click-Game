import React, { Component } from "react";
import '../styles.css';

class Image extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url != this.props.url) {
        this.refs[this.props['data-id']].firstChild.src = this.props.url;
        this.refs[this.props['data-id']].load()
    }
  };
  render(){
    return(   
        <video className="img-thumbnail" onClick={this.props.handleImgClick} autoplay="autoplay" loop="loop" ref={this.props['data-id']}>
          <source src={this.props.url+'.mp4'} type="video/mp4" />
          <img alt="" className="" src={this.props.url+'.webp'} />
        </video>);
  };
}

export default Image;
