import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {

  // There are 3 possible status values.
  // Blank, correct, and incorrect.
  state = {
      score: 0,
      topScore: 0,
      status: ""
  };

  // Correct one clicked. Increment current score.
  handleScore = () => {
  
    let score = this.state.score + 1;
    this.setState({
      score: score,
      status: "correct"
    });
  };

  // Incorrect one clicked (more than once).
  // Preserve the top score but reset current score.
  handleReset = () => {

    let newState = {
      score: 0,
      status: "incorrect"
    };
    if(this.state.score > this.state.topScore){
      newState.topScore = this.state.score;
    }
    this.setState(newState);
  };

  // The page is divided into 4 sections:
  // Navbar, Header, Main, and Footer.
  render() {

    return(
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} status={this.state.status} />
        <Header />
        <Main handleScore={this.handleScore} handleReset={this.handleReset} />
        <Footer />
      </div>
    );
  }
}

export default App;
