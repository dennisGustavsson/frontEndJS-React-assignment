import { useParams } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"

const ProductDetailsView = () => {

    const params = useParams()

  return (
    <>
    <MainMenuSection/>
        <div className="container">
            <h1>{params.name}</h1>
        </div>
    <FooterSection/>
    </>
  )
}
export default ProductDetailsView