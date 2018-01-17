import React, { Component } from "react";
import Image from "../Image";
import "./Main.css";

class Main extends Component {

    // Clicky Photo URLS come from the Giphy API (200px width size).
    // Store the clicked URLs in an array for game logic to use.
    // There are 2 possible values for status: blank and shake.
    state = {
      clickyPhotos: ["https://media.giphy.com/media/l2QEgAHt1gPBLIfp6/200w",
                     "https://media.giphy.com/media/3oFzmmRkQiiE7rDrsQ/200w",
                     "https://media.giphy.com/media/wJNGA01o1Zxp6/200w",
                     "https://media.giphy.com/media/3o7aCXPFJevWPrWSru/200w",
                     "https://media.giphy.com/media/l44Q7lmy0QVQVbIm4/200w",
                     "https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/200w",
                     "https://media.giphy.com/media/XBlty0CRVhxeM/200w",
                     "https://media.giphy.com/media/2MmlCYRzGZwkg/200w",
                     "https://media.giphy.com/media/l0IyaInBwoLwPbWLu/200w",
                     "https://media.giphy.com/media/l396O8kn1qbPcb4ha/200w",
                     "https://media.giphy.com/media/l0O9zareSGZoeC7gk/200w",
                     "https://media.giphy.com/media/xUOxeZc41DVT2l9laU/200w"],
      alreadyClicked: [],
      status: ""
    };

    // Removes the shake class after the animation is complete.
    handleAnimation = (event) => {

      this.setState({
        status: ""
      });
    };

    // Adds the animationend event listener, the handleAnimation function.
    componentDidMount () {
 
      const element = this.refs.mainDiv;
      element.addEventListener("animationend", this.handleAnimation);
    }

    handleImgClick = (event) => {

      event.preventDefault();

      const key = event.target.attributes.getNamedItem("name").value;

      if(this.state.alreadyClicked.includes(key)){

        this.props.handleReset();
        this.setState({alreadyClicked: [], status: "shake"});
      } else{

        this.props.handleScore();
        let newArray = this.state.alreadyClicked;
        newArray.push(key);
      }

      let array = this.state.clickyPhotos;

      for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }

      let newState = {
        clickyPhotos: array
      };

      this.setState(newState);
    };

    renderImgDivs = () => {

      let results = [];

      for(let i=0; i < this.state.clickyPhotos.length; i++){

        let url = this.state.clickyPhotos[i];
        results.push(
          <div className="col col-6 col-lg-3" key={url}>
          <Image handleImgClick={this.handleImgClick} url={url} />
          </div>
        );
      }

      return results;
    };

    render() {

      return(
            <main ref="mainDiv" className={`main container ${this.state.status}`}>
              <div className="row">
                {this.renderImgDivs()}
              </div>
            </main>);
    }
}

export default Main;