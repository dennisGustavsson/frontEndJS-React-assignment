import ProductCard from "../Components/ProductCard";
import { useProductContext } from "../Contexts/ProductContext";

const ProductGridSection = ({ title, items = [] }) => {
  // const { featuredProducts, products } = useProductContext();
  return (
    <section className='product-grid'>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
          {items.map((product) => (
            <ProductCard key={product.articleNumber} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductGridSection;
