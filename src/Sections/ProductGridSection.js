import ProductCard from "../Components/ProductCard"

const ProductGridSection = ({title, products}) => {

  return (
    <section className="product-grid">
      <div className="container">
        <h2 className="section-title">{title}</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">  

          {products.map(product => <ProductCard key={product.id} item={product}/> )}

        </div>

      </div>
    </section>
  )
}
export default ProductGridSection
