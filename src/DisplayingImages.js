import React,{ Component } from 'react';
import images from './data'

class DisplayImages extends Component {

  
  render(){
    return (
      <div>
        {
          images.map((image, index)=>{
            return (
              <img key={index} id={image.id} onClick={this.props.handleImageClick} src={image.imageUrl} alt={image.name}/>
            )
          })
        }
      </div>
    )
  }
}

export default DisplayImages;

