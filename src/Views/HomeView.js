import FeaturedProductsSection from "../Sections/FeaturedProductsSection"
import { FooterSection } from "../Sections/FooterSection"
import Jumbotron1Section from "../Sections/Jumbotron1Section"
import MainMenuSection from "../Sections/MainMenuSection"
import OurSpecialitySection from "../Sections/OurSpecialitySection"
import ShowcaseSection from "../Sections/ShowcaseSection"

const HomeView = () => {
  return (
    <>
    <MainMenuSection/>
    <ShowcaseSection/>
    <Jumbotron1Section/>
    <FeaturedProductsSection/>
    <OurSpecialitySection/>
    <FooterSection/>
    </>
  )
}
export default HomeView