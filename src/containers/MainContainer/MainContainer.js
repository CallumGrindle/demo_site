import React from 'react';
import Nav from '../../components/Nav/Nav.js'
import Carousel from '../../components/carousel/carousel.js'
import './MainContainer.css'

const MainContainer = (props) => {
  return (
    <section>
      <Nav />
      <Carousel className='carousel'/>
    </section>
  )
}

export default MainContainer;
