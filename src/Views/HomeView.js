import React, { useState } from "react"
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

const HomeView = () => {

    /* window title  */
    window.top.document.title = 'Home | Fixxo';

    /* temporary product api.. ish */
    const [featuredProducts, setFeaturedProducts] = useState([

      { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$43.99", rating: 5, img: "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: 2, name: "Something else", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/2093252/pexels-photo-2093252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$23.99", rating: 5, img: "https://images.pexels.com/photos/4052678/pexels-photo-4052678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  
  
    ])
    const [topProducts, setTopProducts] = useState([

      { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$43.99", rating: 5, img: "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600" },
      { id: 2, name: "Something else", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/2093252/pexels-photo-2093252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$20.00", rating: 5, img: "https://images.pexels.com/photos/3941855/pexels-photo-3941855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ])

  return (
    <>
    <MainMenuSection/>
    <ShowcaseSection/>
    <Jumbotron1Section/>
    <ProductGridSection title="Featured Products" products={featuredProducts}/>
    <Jumbotron2Section/>
    <OurSpecialitySection/>
    <FlashSaleSection1/>
    <ProductGridSection title="Top Produducts" products={topProducts}/>
{/*     <FlashSaleSection2/> */}
{/*     <FlashSaleSection3/> */}
    <ServiceSection/>
    <FooterSection/>
    </>
  )
}
export default HomeView