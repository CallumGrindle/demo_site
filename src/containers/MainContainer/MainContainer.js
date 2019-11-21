import React from 'react';
import Nav from '../../components/Nav/Nav.js'
import Carousel from '../../components/carousel/carousel.js'
import Content from '../ContentContainer/Content.js'
import './MainContainer.css'

const MainContainer = (props) => {
  return (
    <section>
      <Nav />
      <Carousel className='carousel'/>
      <Content />
    </section>
  )
}

export default MainContainer;
