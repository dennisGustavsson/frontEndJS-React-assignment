import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import MenuIcon from "../Components/MenuIcon"

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="main-menu">
        <div className="container">
          <h1> <NavLink className="logo" to="/" end>Fixxo.</NavLink></h1>
          <ul className={`menu-links ${ showMenu ? "d-flex" : ""}`}>
              <li><NavLink className="menu-link" to="/" end>Home</NavLink></li>
              <li><NavLink className="menu-link" to="/categories" end>Categories</NavLink></li>
              <li><NavLink className="menu-link" to="/products" end>Products</NavLink></li>
              <li><NavLink className="menu-link" to="/contacts" end>Contacts</NavLink></li>
          </ul>
          <div className="main-menu-icons">
              <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
              <MenuIcon hideMobile="true" link="/compare" icon="fa-regular fa-code-compare"/>
              <MenuIcon hideMobile="true" quantity={3} link="/wishlist" icon="fa-regular fa-heart"/>
              <MenuIcon quantity={1}  link="/shoppingcart" icon="fa-regular fa-shopping-bag"/>

              <button onClick={toggleMenu} className="d-lg-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
          </div>
        </div>
    </nav>
  )
}
export default MainMenuSection