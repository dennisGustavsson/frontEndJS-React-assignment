import { NavLink } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import ProductGridSection from "./ProductGridSection"

const FlashSaleSection1 = () => {
  return (
    <>
    <section className="flash-sale container">
        <div className="flash-grid">
            <div className="flash-advert">
                <h2>2 FOR $29.00</h2>
                <NavLink className="btn-theme btn-theme-white">Flash Sale</NavLink>
            </div>
        </div>
    </section>
    </>
  )
}
export default FlashSaleSection1