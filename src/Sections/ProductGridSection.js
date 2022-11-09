import ProductCard from "../Components/ProductCard";
import { useProductContext } from "../Contexts/ProductContext";

const ProductGridSection = ({ title, items = [] }) => {
  // const { featuredProducts, products } = useProductContext();
  return (
    <section className='grid-section'>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='product-grid'>
          {items.map((product) => (
            <ProductCard key={product.articleNumber} item={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProductGridSection;
