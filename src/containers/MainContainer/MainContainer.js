import React from 'react';
import Nav from '../../components/Nav/Nav.js'
import About from '../About/About.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Carousel from '../../components/carousel/carousel.js'
import Home from '../../components/Home/Home.js'
import Content from '../ContentContainer/Content.js'
import './MainContainer.css'

const MainContainer = (props) => {
  return (
    <Router>
      <Nav />
      <Carousel className='carousel'/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
    </Router>
  )
}

export default MainContainer;
