import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
const ProductsView = () => {

      /* window title  */
      window.top.document.title = 'Product | Fixxo';

  return (
    <>
    <MainMenuSection/>
    <FooterSection/>
    </>
  )
}
export default ProductsView