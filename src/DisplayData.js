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
    //get id from props matching the images
    const id = parseInt(this.props.match.params.plantId)
    console.log(id)
    //get plant that matches user input from firebase
    const dbRef = firebase.database().ref(`/${id}`)
    dbRef.on('value', (result)=>{
    console.log(result.val())
    const dataFirebase = result.val();
    // console.log(plantFirebase.light)
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

  // favorite = () => {
  //   const dbRef = firebase.database().ref();
  //   const favPlant = this.state.selectedPlant
  //   console.log(favPlant)
  //   console.log(dbRef)
  //  const dbRef = firebase.database().ref();

  // this.setState({
  //   saveAsFavorite: favPlant
  //   })
  // }


  counterUp = () => {
    const id = this.state.selectedPlant.id;
    // console.log(favPlant)
    const dbRef = firebase.database().ref(`/${id}/rating`);
    console.log(dbRef)
    dbRef.once('value', (result)=> {
      const results = result.val()
      dbRef.set(results + 1)
      console.log(results)
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
          <p>{this.state.selectedPlant.water}</p>
        </div>
        <div className="breakLine"></div>

        <div className="iconContainer">
          <img className="icons" src="../assets/sun.png" alt="Sunlight" />
          <p>{this.state.selectedPlant.light}</p>
        </div>
        <div className="breakLine"></div>

        <div className="iconContainer">
          <img
            className="icons"
            src="../assets/repot.png"
            alt="Repotting tips"
          />
          <p>{this.state.selectedPlant.repotting}</p>
        </div>
        <div className="breakLine"></div>

        <div className="iconContainer">
          <img
            className="icons"
            src="../assets/moredeets.png"
            alt="Extra details"
          />
          <p>{this.state.selectedPlant.moreInfo}</p>
        </div>
        <div className="breakLine"></div>

        {/* <button onClick={this.counterUp}>Add this plant to favorites</button> */}
        <div className="likesContainer">
          <button className="likeButton" onClick={this.counterUp}>
            <i class="fas fa-heart"></i>
          </button>
          <p className="likesNumber">Likes:{this.state.selectedPlant.rating}</p>
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
