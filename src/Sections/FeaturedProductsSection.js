import { NavLink } from "react-router-dom"

const FeaturedProductsSection = () => {
  return (
    <section className="featured-product container">
    <h2 className="section-title">Featured Product</h2>
    <div className="product-grid">

        <div className="product-card">
            <div className="product-img">
                <button className="btn-theme">Quick view</button>
            </div>
            <div className="product-bg"></div>
            <div className="card-menu">
                <NavLink href="" className="__menu-icon" to="/wishlist"><i class="fa-regular fa-heart"></i></NavLink>
                <NavLink href="" className="__menu-icon" to="/compare"><i class="fa-regular fa-code-compare"></i></NavLink>
                <NavLink href="" className="__menu-icon" to="shoppingcart"><i class="fa-regular fa-shopping-bag"></i></NavLink>
            </div>
            <div className="product-info">
                <span>Category</span>
                <NavLink className="__category-link" to="/products" ><h4>Modern Black Blouse</h4></NavLink>
                <span className="rating">
                    <a href=""><i class="fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-solid fa-star"></i></a>
                    <a href=""><i class="fa-solid fa-star"></i></a>
                </span>
                <br/>
                <span class="old-price">$35.00</span>
                <span class="new-price">$30.00</span>
            </div>
        </div>

    </div>
</section>
  )
}
export default FeaturedProductsSection