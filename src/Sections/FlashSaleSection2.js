import { NavLink } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import ProductGridSection from "./ProductGridSection"

const FlashSaleSection2 = (products) => {
  return (
    <>
    <section className="flash-sale container">
        <div className="flash-grid reverse-grid">
            <div className="flash-advert">
                <h2>2 FOR $49.00</h2>
                <NavLink className="btn-theme btn-theme-white">Flash Sale</NavLink>
            </div>
            <div className="product-grid grid-end">

            </div>
        </div>
    </section>
    </>
  )
}
export default FlashSaleSection2