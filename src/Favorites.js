import React, { Component } from 'react';
import firebase from "./firebase";


class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      img: '',
      rating: 0,
      id: 0
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (result) => {
      const plants = result.val();
      // console.log(plants)
      const plantsRating = [];
      const plantsId = [];
      for (let key in plants) {
        plantsId.push(plants[key].id);
        plantsRating.push(plants[key].rating);
      }
      console.log(
        plantsRating.sort(function (a, b) {
          return b - a;
        })
      );
    });
  }

  render() {
    return (
      <div className="favList">
        <button>click</button>
      </div>
    );
  }
}

export default Favorites;
