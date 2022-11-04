import { useContext } from "react"
import ProductGridSection from "../Sections/ProductGridSection"
import FlashSaleSection1 from "../Sections/FlashSaleSection1"
import FlashSaleSection2 from "../Sections/FlashSaleSection2"
import FlashSaleSection3 from "../Sections/FlashSaleSection3"
import { FooterSection } from "../Sections/FooterSection"
import Jumbotron1Section from "../Sections/Jumbotron1Section"
import Jumbotron2Section from "../Sections/Jumbotron2Section"
import MainMenuSection from "../Sections/MainMenuSection"
import OurSpecialitySection from "../Sections/OurSpecialitySection"
import ServiceSection from "../Sections/ServiceSection"
import ShowcaseSection from "../Sections/ShowcaseSection"
import { ProductContext } from "../Contexts/Context"


const HomeView = () => {

  const productContext = useContext(ProductContext)

    /* window title  */
    window.top.document.title = 'Home | Fixxo';



  return (
    <>
    <MainMenuSection/>
    <ShowcaseSection/>
    <Jumbotron1Section/>
    <ProductGridSection title="Featured Products" items={productContext.featuredProducts}/>
    <Jumbotron2Section/>
    <OurSpecialitySection/>
    <FlashSaleSection1/>
    <ProductGridSection title="Top Products" items={productContext.featuredProducts}/>
    <FlashSaleSection2/>
    <FlashSaleSection3/>
    <ServiceSection/>
    <FooterSection/>
    </>
  )
}
export default HomeView