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
  
    this.setState( (prevState) => {
      return {
        score: prevState.score + 1,
        status: "correct"
      };
    });
  };

  // Incorrect one clicked (more than once).
  // Preserve the top score but reset current score.
  handleReset = (won) => {

    let status = "incorrect";
    if(won){
      status = "";
    }
    let newState = {
      score: 0,
      status: status
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
        <Main handleScore={this.handleScore} handleReset={this.handleReset}
              score={this.state.score} status={this.state.status} />
        <Footer />
      </div>
    );
  }
}

export default App;
