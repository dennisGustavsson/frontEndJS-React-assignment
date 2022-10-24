import { NavLink } from "react-router-dom";
import tempImg from '../Assets/images/product-img.jpg';

const ProductCard = ({item}) => {
  return (
    <>
    <div className="col">
        <div className="product-card">
            <div className="product-img">
                <img src={item.img} alt={item.name} />
                <div className="card-menu">
                    <button href="" className="menu-icon" to="/wishlist"><i className="fa-regular fa-heart"></i></button>
                    <button href="" className="menu-icon" to="/compare"><i className="fa-regular fa-code-compare"></i></button>
                    <button href="" className="menu-icon" to="shoppingcart"><i className="fa-regular fa-shopping-bag"></i></button>
                </div>
                <NavLink to="/products/id" className="btn-theme">Quick view</NavLink>
            </div>

            <div className="product-info">
                <div className="category-title">{item.category}</div>
                <h4>{item.productName}</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="old-price"></div>
                <div className="new-price">{item.price}</div>
            </div>
        </div>
    </div>
    </>
  )
}
export default ProductCard