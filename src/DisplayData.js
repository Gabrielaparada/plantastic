import React, { Component} from 'react';
import firebase from './firebase'


class Plants extends Component {

  constructor(){
    super()
    this.state={
      plants: [],
      selectedPlant: {}
    }
  }

  componentDidMount(){
    const id = parseInt(this.props.match.params.plantId)
    console.log(id)
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
        name: dataFirebase.name
      }
    console.log(selectedPlant)
    this.setState({
      selectedPlant: selectedPlant
    })
    })
    }
    

  // componentDidMountToBeDeleted(){
  //   const dbRef = firebase.database().ref()
  //   dbRef.on('value', (result)=> {
  //     //1 store data coming from firebase on a a variable
  //     const data = result.val()
  //     //2 transform object into an array
  //     //3 create empty array to hold data
  //     const plantsArray = [];
  //     for(let key in data){
  //       // //destructuring
  //       // const {light, water, moreInfo, repotting, id } = data[key]
  //       plantsArray.push({ 
  //         id: data[key].id, 
  //         light: data[key].light, 
  //         water: data[key].water,
  //         repotting: data[key].repotting,
  //         moreInfo: data[key].moreInfo,
  //         name: data[key].name})
  //     }
  //     //4 use data to update state
  //     this.setState({
  //       plants: plantsArray
  //     })
      
  //   })
  // }

  
  render(){
    // console.log(this.props.match.params.plantId)
    return(
      <div className="plantInfoContainer">
        <h1>{this.state.selectedPlant.name}</h1>
        {/* <p>{props.getPlant[0].water}</p>
        <p>{props.getPlant[0].light}</p>
        <p>{props.getPlant[0].repotting}</p>
        <p>{props.getPlant[0].moreInfo}</p>  */}
      </div>
    )
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
