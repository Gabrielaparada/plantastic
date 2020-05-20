import React, { Component } from 'react';
import Header from './Header'
import Intro from './Instructions'
import DisplayImages from './DisplayingImages'
import './App.css';
import Footer from './Footer'


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro />
        <DisplayImages />
        <Footer/>
      </div>
    );
  }
}

export default App;
