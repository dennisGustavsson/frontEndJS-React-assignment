import React from 'react'
import logo from '../Assets/images/logo.svg'
const Navbar = () => {
  return (
    <nav className="__navbar">
      <div className="container">
        <img src={logo}/>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <div>userIcons</div>
      </div>
    </nav>
  )
}

export default Navbar