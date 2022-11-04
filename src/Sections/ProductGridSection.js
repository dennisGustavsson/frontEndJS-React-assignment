import { useContext } from "react"
import ProductCard from "../Components/ProductCard"
import { ProductContext} from "../Contexts/Context"


const ProductGridSection = ({title, items = []}) => {
  const productContext = useContext(ProductContext)


  return (
    <section className="product-grid">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">  
          
          {
          items.map( products => <ProductCard key={products.articleNumber} item={products} /> )
          }

        </div>

      </div>
    </section>
  )
}
export default ProductGridSection
