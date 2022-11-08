import { NavLink } from "react-router-dom";
import { useProductContext } from "../Contexts/ProductContext";
import { useEffect } from "react";
import ProductGridSection from "./ProductGridSection";

const FlashSaleSection3 = () => {
  const { featuredProducts, getFeaturedProducts } =
    useProductContext();

  useEffect(() => {
    getFeaturedProducts(4);
  }, []);


  return (
    <>
      <section className='flash-sale'>
        <div className='flash-grid-center'>
          <div className='flash-advert'>
            <h2>UP TO 70% OFF*</h2>
            <h4>Women's, Men's & Kids Winter Fashion</h4>
            <NavLink className='btn-theme btn-theme-white'>Flash Sale</NavLink>
          </div>
          <div className='product-grid-col'>
            <ProductGridSection items={featuredProducts} />
            <ProductGridSection items={featuredProducts} />
            <ProductGridSection items={featuredProducts} />
          </div>
        </div>
      </section>
    </>
  );
};
export default FlashSaleSection3;
