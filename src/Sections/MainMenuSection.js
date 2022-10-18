import { NavLink } from "react-router-dom"
import MenuIcon from "../Components/MenuIcon"

const MainMenuSection = () => {
  return (
    <nav className="__main-menu">
        <div className="container">
        <h1> <NavLink className="__logo" to="/" end>Fixxo.</NavLink></h1>
        <ul className="__menu-links">
            <li><NavLink className="__menu-link" to="/" end>Home</NavLink></li>
            <li><NavLink className="__menu-link" to="/categories" end>Categories</NavLink></li>
            <li><NavLink className="__menu-link" to="/products" end>Products</NavLink></li>
            <li><NavLink className="__menu-link" to="/contacts" end>Contacts</NavLink></li>
        </ul>
        <div class="__main-menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
            <MenuIcon link="/compare" icon="fa-regular fa-code-compare"/>
            <MenuIcon quantity={3} link="/wishlist" icon="fa-regular fa-heart"/>
            <MenuIcon quantity={1}  link="/shoppingcart" icon="fa-regular fa-shopping-bag"/>
        </div>
        </div>
    </nav>
  )
}
export default MainMenuSection