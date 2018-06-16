import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';
import img1 from './images/header/01_edit1.jpg'; 
import img2 from './images/header/02.png'; 
import img3 from './images/header/03_edit.jpg'; 
import img4 from './images/header/04_edit.jpg'; 
import img5 from './images/header/05_edit.jpg'; 
import img6 from './images/header/06_edit.jpg'; 
import img7 from './images/header/07_edit.jpg'; 
import img8 from './images/header/08_edit.jpg'; 
import img9 from './images/header/09_edit.jpg';
import img10 from './images/header/10_edit.jpg'; 

class Slideshow extends React.Component {

    constructor(){
        super();
        this.state={
            showThumbnails: false,
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,
            showGalleryPlayButton: false,
            showNav: false
        };
    };
 
  render() {
 
    const images = [
      {
        original: img1
      },
      {
        original: img2
      },
      {
        original: img3
      },
      {
        original: img4
      },
      {
        original: img5
      },
      {
        original: img6
      },
      {
        original: img7
      },
      {
        original: img8
      },
      {
        original: img9
      },
      {
        original: img10
      }
    ]
 
    return (
      <div className='row'>
        <div className='col-md-12'>
            
            <ImageGallery 
            items={images} 
            showNav={this.state.showNav}
            />

        </div>
      </div>
    );
  }
 
}

export default Slideshow;