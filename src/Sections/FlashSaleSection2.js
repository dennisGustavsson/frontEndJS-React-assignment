import { NavLink } from "react-router-dom"
import ProductCard from "../Components/ProductCard"
import ProductGridSection from "./ProductGridSection"
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";

const FlashSaleSection2 = () => {
    const { featuredProducts, getFeaturedProducts, products, getProducts } =
      useProductContext();

    useEffect(() => {
      getFeaturedProducts(4);
    }, []);

    useEffect(() => {
      getProducts();
    }, []);
  return (
    <>
      <section className='flash-sale container'>
        <div className='flash-grid reverse-grid'>
          <ProductGridSection items={featuredProducts} />
          <div className='flash-advert'>
            <h2>2 FOR $49.00</h2>
            <NavLink className='btn-theme btn-theme-white'>Flash Sale</NavLink>
          </div>
          <div className='product-grid grid-end'></div>
        </div>
      </section>
    </>
  );
}
export default FlashSaleSection2