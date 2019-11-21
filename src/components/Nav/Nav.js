import React, {Component} from 'react';
import './Nav.css'

const Nav = (props) => {
  return (
    <nav className='nav'>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <li>About</li>
        <li>Shop</li>
      </ul>
    </nav>
  )
}

export default Nav;