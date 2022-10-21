import { NavLink } from "react-router-dom"

const ProductCard = () => {
  return (
    <>
        <div className="product-card">
            <div className="product-img">
                <NavLink to="/products/id" className="btn-theme">Quick view</NavLink>
            </div>
            <div className="card-menu">
                <button href="" className="menu-icon" to="/wishlist"><i className="fa-regular fa-heart"></i></button>
                <button href="" className="menu-icon" to="/compare"><i className="fa-regular fa-code-compare"></i></button>
                <button href="" className="menu-icon" to="shoppingcart"><i className="fa-regular fa-shopping-bag"></i></button>
            </div>
            <div className="product-info">
                <div className="category-title">Category</div>
                <h4>Modern Black Blouse</h4>
                <div className="rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <br/>
                <div className="old-price">$35.00</div>
                <div className="new-price">$30.00</div>
            </div>
        </div>
    </>
  )
}
export default ProductCard