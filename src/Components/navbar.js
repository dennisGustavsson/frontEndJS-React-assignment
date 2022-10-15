import React from 'react'
import logo from '../Assets/images/logo.svg'
const Navbar = () => {
  return (
    <nav className="__navbar">
      <div className="container">
        <a href="#"><h1 className="__logo"> Fixxo.</h1></a>
        <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">Products</a></li>
            <li><a href="/contacts.html">Contacts</a></li>
        </ul>
        <div class="__nav-icons">
            <a href=""><i className="fa-regular fa-magnifying-glass"></i></a>
            <a href=""><i className="fa-regular fa-code-compare"></i></a>
            <a href=""><i className="fa-regular fa-heart"></i></a>
            <a href=""><i className="fa-regular fa-shopping-bag"></i></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar