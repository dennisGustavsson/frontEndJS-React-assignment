import { NavLink } from "react-router-dom";

const ProductCard = ({item}) => {

    const addToWishlist = (e) => {
        console.log(`added to wishlist`);
    }
    const addToCompare = (e) => {
        console.log('added compare');
    }
    const addToCart = (e) => {
        console.log('added to shopping cart');
    }

  return (
    <>
    <div className="col">
        <div className="product-card">
            <div className="product-img">
                <img src={item.imageName} alt={item.name} />
                <div className="card-menu">
                    <button onClick={addToWishlist} className="menu-icon" to="/wishlist"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="menu-icon" to="/compare"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="menu-icon" to="shoppingcart"><i className="fa-regular fa-shopping-bag"></i></button>
                </div>
                <NavLink to={`/products/${item.articleNumber.toLowerCase().replace(/\s/g, "-")}`} className="btn-theme">Quick view</NavLink>
            </div>

            <div className="product-info">
                <div className="category-title">{item.category}</div>
                <h4>{item.name}</h4>
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