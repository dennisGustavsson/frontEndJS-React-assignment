import { NavLink } from "react-router-dom"
import ProductCard from "../Components/ProductCard"

const FeaturedProductsSection = ({title}) => {
  return (
    <section className="featured-product">
        <h2 className="section-title">{title}</h2>
        <div className="product-grid">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </section>
  )
}
export default FeaturedProductsSection