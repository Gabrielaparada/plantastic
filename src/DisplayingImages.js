import React,{ Component } from 'react';
import images from './data'
import {Link} from 'react-router-dom'
import firebase from "./firebase";

class DisplayImages extends Component {

  constructor() {
    super();
    this.state = {
      images : [],
      sortedImages: [],
      showSorted: false
    };
  }

  componentDidMount() {
    //getting data from firebase to sort images by rating
    const dbRef = firebase.database().ref();
    dbRef.on("value", (result) => {
      const plants = result.val();
      const plantsRating = [];
      for (let key in plants) {
        plantsRating.push({
            rating :plants[key].rating, 
            id: plants[key].id
          });
      }
      //create an array with plant id sorted by rating  
      plantsRating.sort((plant1, plant2)=>{
        return plant2.rating - plant1.rating
      })

      //loop through plantsRating array and get id
      const ratedPlant = plantsRating.map((plant)=>{

      //filter through array and return images and matched id
      const foundImage = images.filter((image)=>{
          return image.id === plant.id
        })
        return foundImage[0]
      })
      //set array to state
      this.setState({
        sortedImages: ratedPlant
      })
      
    });
  }

//toggle function
  clickHandler = () => {
    this.setState({
      showSorted: true
    });
  }


  render() {
    const mappedArray = this.state.showSorted ? this.state.sortedImages : images;
      return (
        <section className="galleryContainer wrapper">
          <h2 className="plantGallery">Plant Gallery</h2>
          <div className="galleryButton">
            <button className="sortingButton" onClick={this.clickHandler}>Click here to sort gallery by rating</button>
          </div>

          <div className="images">
            {/*map through images array*/}
            {mappedArray.map((image, index) => {
              return (
                //route to plant content.
                <Link className="anchor" key={index} to={`/plant/${image.id}`}>
                  <p className="plantName">{image.name}</p>
                  <img
                    className="plantImage"
                    id={image.id}
                    src={`${process.env.PUBLIC_URL}/${image.imageUrl}`}
                    alt={image.name}
                  />
                </Link>
              );
            })}
          </div>
        </section>
      );
    }
  }


export default DisplayImages;

