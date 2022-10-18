import { NavLink } from "react-router-dom"

const MenuIcon = ({link, icon}) => {
  return (
    <NavLink className="__menu-icon" to={link}>
        <i className={icon}></i>
    </NavLink>
  )
}
export default MenuIcon