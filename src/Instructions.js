import React, { Component } from 'react';
import './App.css';


class Intro extends Component {


  render() {
    return (
      <main className="intro wrapper">
        <h4>Struggling to keep your plants alive?</h4>
        <h5>We can help!</h5>
        <p className="introText">
          Plantastic is database built with love for all the plant lovers out
          there, whether you are a novice or a plant snob this is for you.
        </p>
        <p className="introText">
          We've compiled a list of some of the most popular house plants along
          with good tips to keep your plant babies happy.
          Take a quick look
          through our gallery, once you find the plant you are interested in
          click on the image to get more deets.
        </p>
        <p className="introText last">We are working on growing the list.</p>
      </main>
    );
  }
}

export default Intro;