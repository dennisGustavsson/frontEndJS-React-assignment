import FeaturedProductsSection from "../Sections/FeaturedProductsSection"
import { FooterSection } from "../Sections/FooterSection"
import Jumbotron1Section from "../Sections/Jumbotron1Section"
import MainMenuSection from "../Sections/MainMenuSection"
import ShowcaseSection from "../Sections/ShowcaseSection"

const HomeView = () => {
  return (
    <>
    <MainMenuSection/>
    <ShowcaseSection/>
    <Jumbotron1Section/>
    <FeaturedProductsSection/>
    <FooterSection/>
    </>
  )
}
export default HomeView