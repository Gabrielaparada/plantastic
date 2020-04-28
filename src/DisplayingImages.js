import React,{ Component } from 'react';
import images from './data'
import {Link} from 'react-router-dom'

class DisplayImages extends Component {

  
  render(){
    return (
      <div>
        {
          images.map((image, index)=>{
            return (
              //add link to plant/id
              <Link key={index} to={`/plant/${image.id}`}>
                <img id={image.id} src={image.imageUrl} alt={image.name} />
              </Link>
            );
          })
        }
      </div>
    )
  }
}

export default DisplayImages;

