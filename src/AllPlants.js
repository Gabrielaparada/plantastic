import React, { Component } from 'react';
import Header from './Header'
import Intro from './Instructions'
import DisplayImages from './DisplayingImages'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  toggleState = () =>{
    console.log("hola")
    this.setState({
      show:true
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Intro toggleState={this.toggleState} />
        <DisplayImages show={this.state.show} />
      </div>
    );
  }
}

export default App;
