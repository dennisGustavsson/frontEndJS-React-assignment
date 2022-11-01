import { useParams } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import BreadcrumbSection from "../Sections/BreadcrumbSection"
import ProductDetailsSection from "../Sections/ProductDetailsSection"
import { getNameToUpper } from "../Assets/Scripts/getNameToUpper"
const ProductDetailsView = ({}) => {


  const params = useParams()

      /* window title  */
      window.top.document.title = `${getNameToUpper(params.name.replace(/-/g, " "))} | Fixxo`;

    

  return (
    <>
    
    <MainMenuSection/>
    <div className="miniAd">
      <div className="container">
        <span>Get 25% OFF at the Fixxo Selection - Shop Now!</span>
      </div>
    </div>
    <BreadcrumbSection currentPage={ getNameToUpper(params.name.replace(/-/g, " ")) }/>
    <ProductDetailsSection/>
    <FooterSection/>
    </>
  )
}
export default ProductDetailsView