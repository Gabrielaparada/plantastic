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
    const dbRef = firebase.database().ref();
    dbRef.on("value", (result) => {
      const plants = result.val();
      const plantsRating = [];
      // const plantsId = [];
      for (let key in plants) {
        // plantsId.push(plants[key].id);
        plantsRating.push({
            rating :plants[key].rating, 
            id: plants[key].id
          });
      }
      //create an array with plant id sorted by rating DONE 
      plantsRating.sort((plant1, plant2)=>{
        return plant2.rating - plant1.rating
      })
      console.log(plantsRating)

      //loop through array and match images with id 
      const ratedPlant = plantsRating.map((plant)=>{
  

      const foundImage = images.filter((image)=>{
          return image.id === plant.id
        })
        return foundImage[0]
      })

      this.setState({
        sortedImages: ratedPlant
      })
      
    });
  }
  
  clickHandler = () => {
    this.setState({
      showSorted: true
    });
  }



  render() {
    const mappedArray = this.state.showSorted ? this.state.sortedImages : images;
    // {
      return (
        <div>
          <button onClick={this.clickHandler}> Hi</button>
          <div className="clearfix images wrapper">
            {mappedArray.map((image, index, id) => {
              console.log(image)
              return (
                //add link to plant/id
                <Link className="anchor" key={index} to={`/plant/${image.id}`}>
                  <p className="plantName">{image.name}</p>
                  <img
                    className="plantImage"
                    id={image.id}
                    src={image.imageUrl}
                    alt={image.name}
                  />
                </Link>
              );
            })}
          </div>
          // }
        </div>
      );
    }
  }
// }

export default DisplayImages;

