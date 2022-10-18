import { NavLink } from "react-router-dom"
import MenuIcon from "../Components/MenuIcon"

const MainMenuSection = () => {
  return (
    <nav className="__main-menu">
        <div className="container">
        <NavLink to="/"><h1 className="__logo"> Fixxo.</h1></NavLink>
        <ul className="__menu-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/categories">Categories</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        <div class="__main-menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
            <MenuIcon link="/compare" icon="fa-regular fa-code-compare"/>
            <MenuIcon link="/wishlist" icon="fa-regular fa-heart"/>
            <MenuIcon link="/shoppingcart" icon="fa-regular fa-shopping-bag"/>
        </div>
        </div>
    </nav>
  )
}
export default MainMenuSection