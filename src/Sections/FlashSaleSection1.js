import { NavLink } from "react-router-dom"
import ProductCard from "../Components/ProductCard"

const FlashSaleSection1 = () => {
  return (
    <>
    <section className="flash-sale container">
        <div className="flash-grid">
            <div className="flash-advert">
                <h2>2 FOR $29.00</h2>
                <NavLink className="btn-theme btn-theme-white">Flash Sale</NavLink>
            </div>
            <div className="product-grid">
                {/* <div className="product-card">
                    <div className="product-img"></div>
                    <span>Category</span>
                    <h3>Mordern Black Blouse</h3>
                    <span className="ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="new-price">$29.00</span>
                </div> */}
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            </div>
        </div>
    </section>
    </>
  )
}
export default FlashSaleSection1