import React, { Component } from 'react';
import Header from './Header'
import Intro from './Instructions'
import DisplayImages from './DisplayingImages'




import './App.css';

class App extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <Header />
        <Intro/>
        <DisplayImages/>
      </div>
    );
  }
}

export default App;
