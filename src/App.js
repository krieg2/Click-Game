import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
