import React, { Component } from 'react';
import './App.css';

class Intro extends Component {


  render() {
    return (
      <div className="intro">
        <img className="introImg" src="./assets/dontLetFear.jpg" />
        <h4>Struggling to keep your plants alive?</h4>
        <h5>We can help!</h5>
        <p className="introText">
          Plantastic is database that contains some of the most popular house
          plants. Take a quick look through our gallery, once you find the plant
          you are interested on click on the image the get more deets about how
          to care for it!
        </p>
        <button onClick={this.props.toggleState}>Show me some plants!</button>
      </div>
    );
  }
}

export default Intro;