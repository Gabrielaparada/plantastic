import React, { Component} from 'react';
import firebase from './firebase'

class Plants extends Component {
  constructor(){
    super()
    this.state={
      plants: [],
      selectedPlant: {},
    }
  }

  componentDidMount(){
    document.body.scrollTop = 0;
    //get id from props matching the images
    const id = parseInt(this.props.match.params.plantId)
  
    //get plant that matches user input from firebase
    const dbRef = firebase.database().ref(`/${id}`)
    dbRef.on('value', (result)=>{
    const dataFirebase = result.val();
    const selectedPlant = {
        light: dataFirebase.light,
        water: dataFirebase.water,
        moreInfo: dataFirebase.moreInfo,
        repotting: dataFirebase.repotting,
        name: dataFirebase.name,
        id: dataFirebase.id,
        rating: dataFirebase.rating
      }
    this.setState({
      selectedPlant: selectedPlant
    })
    })
    }

  //counter up function for likes displayed on plant's info page.
  counterUp = () => {
    const id = this.state.selectedPlant.id;
    const dbRef = firebase.database().ref(`/${id}/rating`);
    dbRef.once('value', (result)=> {
      const results = result.val()
      dbRef.set(results + 1)
    })    
  }

  render(){
    return (
      <section className="plantInfoContainer">
        <h1 className="plantTitle">{this.state.selectedPlant.name}</h1>

        <div className="iconContainer">
          <img
            className="icons"
            src="../assets/water.png"
            alt="Water schedule"
          />
          <p className="information">{this.state.selectedPlant.water}</p>
        </div>

        <div className="breakLine"></div>

        <div className="iconContainer">
          <img className="icons" src="../assets/sun.png" alt="Sunlight" />
          <p className="information">{this.state.selectedPlant.light}</p>
        </div>

        <div className="breakLine"></div>

        <div className="iconContainer">
          <img
            className="icons"
            src="../assets/repot.png"
            alt="Repotting tips"
          />
          <p className="information">{this.state.selectedPlant.repotting}</p>
        </div>

        <div className="breakLine"></div>

        <div className="iconContainer">
          <img
            className="icons"
            src="../assets/moredeets.png"
            alt="Extra details"
          />
          <p className="information">{this.state.selectedPlant.moreInfo}</p>
        </div>

        <div className="breakLine"></div>

        <div>
          <p className="like">
            If you enjoyed this, give it a <span role="img" aria-label="Heart Icon">♥️</span>
          </p>
          <div className="likesContainer">
            <button className="likeButton" onClick={this.counterUp}>
              <i className="fas fa-heart"></i>
            </button>
            <p className="likesNumber">
              Likes:{this.state.selectedPlant.rating}
            </p>
          </div>
          <p className="iconsCred">Icons by IYIKON, Noun Project</p>
        </div>
      </section>
    );
  }
}

export default Plants;








  // handleImageClick = (e) => {
  //   //get id from image clicked
  //   const clickedImage = parseInt(e.target.getAttribute('id'))
  //   console.log(clickedImage, "clicked image")
  //   //get id from plant that matches the clicked image
  //   const getPlant = this.state.plants.filter((plant)=>{
  //     const plantId = plant.id
  //     return plantId === clickedImage;    
  //   })
  //   console.log(getPlant)
  //   this.setState({
  //     selectedPlant: getPlant 
  //   })
  // }
