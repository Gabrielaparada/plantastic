import React, { Component } from 'react';
import firebase from './firebase';
import Header from './Header'
import DisplayImages from './DisplayingImages'
import Plants from './DisplayData'

import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state={
      plants: []
    }
  }


  componentDidMount(){
    const dbRef = firebase.database().ref()
    dbRef.on('value', (result)=> {
      //store data coming from firebase on a a variable
      const data = result.val()
      //transform object into an array
      //create empty array to hold data
      const plantsArray = [];
      for(let key in data){
        //destructuring
        const {light, water, moreInfo, repotting, id } = data[key]
        plantsArray.push({
          plantId: id,
          light: light,
          water: water,
          moreInfo: moreInfo,
          repotting: repotting
        })
      }
      //use data to update state
      this.setState({
        plants: plantsArray
      })
    })
  }

  handleImageClick = (e) => {
    console.log(e.target.getAttribute('id'))
    const clickedImage = e.target.getAttribute('id')
    console.log(this.props.light)
    
    // this.setState({
    //   plants: selectedPlant
      
    // })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DisplayImages handleImageClick={this.handleImageClick}/>
        <Plants plants={this.props.plantId}/>
      </div>
    );
  }
}

export default App;
