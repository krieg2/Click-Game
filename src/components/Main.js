import React, { Component } from "react";
import Image from "./Image";
import '../styles.css';

class Main extends Component {

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
      alreadyClicked: []
    };

    handleImgClick = (event) => {

      event.preventDefault();

      const key = event.target.attributes.getNamedItem("name").value;

      if(this.state.alreadyClicked.includes(key)){

        this.props.handleReset();
        this.setState({alreadyClicked: []});
      } else{

        this.props.handleScore();
        let newArray = this.state.alreadyClicked;
        newArray.push(key);
        this.setState({alreadyClicked: newArray});
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
        results.push(<Image key={url} handleImgClick={this.handleImgClick} url={url} />);
      }

      return results;
    };

    render() {

      return(
            <main className="container">
              {this.renderImgDivs()}
            </main>);
    }
}

export default Main;