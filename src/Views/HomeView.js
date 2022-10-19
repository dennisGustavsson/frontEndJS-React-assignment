import FeaturedProductsSection from "../Sections/FeaturedProductsSection"
import { FooterSection } from "../Sections/FooterSection"
import Jumbotron1Section from "../Sections/Jumbotron1Section"
import Jumbotron2Section from "../Sections/Jumbotron2Section"
import MainMenuSection from "../Sections/MainMenuSection"
import OurSpecialitySection from "../Sections/OurSpecialitySection"
import ServiceSection from "../Sections/ServiceSection"
import ShowcaseSection from "../Sections/ShowcaseSection"

const HomeView = () => {
  return (
    <>
    <MainMenuSection/>
    <ShowcaseSection/>
    <Jumbotron1Section/>
    <FeaturedProductsSection/>
    <Jumbotron2Section/>
    <OurSpecialitySection/>
    <ServiceSection/>
    <FooterSection/>
    </>
  )
}
export default HomeView