import React from 'react';
import {images} from '../../Images/images.js'
import {Gallery, GalleryImage} from 'react-gesture-gallery'
import './carousel.css'

const Carousel = (props) => {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (index === 4) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [index]);

  const imageNodes = images.map(image => {
    return (
      <GalleryImage src={image}
      key={image}
      objectFit='cover'/>
    )
  });

  const requestChange = index => {
      setIndex(index);
    };

  return (
    <Gallery
      style={{
        background: 'black',
        height: '90vh'
      }}
      index={index}
      onRequestChange={requestChange}
    >
      {imageNodes}
    </Gallery>
  )
}

export default Carousel;
