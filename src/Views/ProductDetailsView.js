import { useParams } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import BreadcrumbSection from "../Sections/BreadcrumbSection"
import ProductDetailsSection from "../Sections/ProductDetailsSection"
import { getNameToUpper } from "../Assets/Scripts/getNameToUpper"
import { useProductContext } from "../Contexts/ProductContext"
import { useEffect } from "react"

const ProductDetailsView = () => {
    const { id } = useParams()
    const { product, getProduct } = useProductContext();

      useEffect(() => {
        getProduct(id);
      }, []);


 

      // /* window title  */
      // window.top.document.title = `${getNameToUpper(product.name.replace(/-/g, " "))} | Fixxo`;

    

  return (
    <>
      <MainMenuSection />
      <div className='miniAd'>
        <div className='container'>
          <span>Get 25% OFF at the Fixxo Selection - Shop Now!</span>
        </div>
      </div>
      {/* <BreadcrumbSection currentPage={getNameToUpper(product.name)} /> */}
      <BreadcrumbSection currentPage={product.name} />
      <ProductDetailsSection item={product} />
      <FooterSection />
    </>
  );
}
export default ProductDetailsView