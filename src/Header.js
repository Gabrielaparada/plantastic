import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <header className="landingPage">
        <div className="textContainer wrapper">
          <h1 className="title">Plantastic</h1>
          <p className="titleDesc">
            A guide that will help you take better care of your plants
          </p>
        </div>
        <a href="#intro">
          <i aria-hidden="true" className="fas fa-chevron-down"></i>
        <span className="sr-only">Chevron pointing down to the next section of the page</span>
        </a>
      </header>
    );
  }

}

export default Header;