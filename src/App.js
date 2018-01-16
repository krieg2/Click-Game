import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {

  state = {
      score: 0,
      topScore: 0,
      status: ""
  };

  // Correct one clicked.
  handleScore = () => {
  
    this.setState({
      score: ++this.state.score,
      status: "correct"
    });
  };

  // Incorrect one clicked (more than once).
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
