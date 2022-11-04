import { useContext } from "react";
import { ProductContext } from "../Contexts/Context";
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import ProductGridSection from "../Sections/ProductGridSection";

const ProductsView = ({title}) => {
  const productContext = useContext(ProductContext)

      /* window title  */
      window.top.document.title = 'Product | Fixxo';

  return (
    <>
    <MainMenuSection/>
    <ProductGridSection title='Products' items={productContext.allProducts} />
    <FooterSection/>
    </>
  )
}
export default ProductsView