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
        <i aria-hidden="true" className="fas fa-chevron-down"></i>
        <span class="sr-only">Chevron pointing down</span>
        <span></span>
      </header>
    );
  }

}

export default Header;