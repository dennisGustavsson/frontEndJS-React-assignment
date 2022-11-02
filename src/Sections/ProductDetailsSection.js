import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getNameToUpper } from '../Assets/Scripts/getNameToUpper'
import ExternalLinkIcon from "../Components/ExternalLinkIcon"
import TabsMenu from "../Components/TabsMenu"
import ProductGridSection from "../Sections/ProductGridSection"
const ProductDetailsSection = () => {


    const params = useParams()

  return (
    <>
    <div className="product">
          <div className="container">
            <div className="product-body">
              <div className="product-img"></div>
              <div className="product-info">
                <h1>{getNameToUpper(params.name.replace(/-/g, " "))}</h1>
                <span className="articleNr">SKU: 12345670 BRAND: The Northland</span>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span className="price">$35.00</span>
                <p className="details">Discovered had get considered projection who favourable. 
                  Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. 
                  Use off agreeable law unwilling sir deficient curiosity instantly. (read more) 
                </p>
                <div className="product-form">
                  <form>
                    <div className="choose-size">
                      <h4>Size: </h4>
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off"/>
                        <label className="btn btn-secondary" for="option1">S</label>

                        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off"/>
                        <label className="btn btn-secondary" for="option2">M</label>

                        <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off"/>
                        <label className="btn btn-secondary" for="option3">L</label>

                        <input type="radio" className="btn-check" name="options" id="option4" autoComplete="off"/>
                        <label className="btn btn-secondary" for="option4">XL</label>
                    </div>
                    <div className="choose-color">
                      <h4>Color: </h4>
                    </div>
                    <div className="quantity">
                      <h4>Qty: </h4>
                      <div className="qtyCounter">
                        <button className="add">-</button><span className="output">?</span><button className="sub">+</button>
                      </div>
                      <NavLink to="" className="btn-theme">ADD TO CART</NavLink>
                    </div>
                   
                  </form>
                  <div className="shareSocialMedia">
                    <h4>Share: </h4>    
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin"/>
                    </div> 
                  </div>

                </div>

              </div>  
            </div>
            <TabsMenu />

            <div className="product-grid">
                {/* <ProductGridSection /> */}
            </div>
        </div>

    </div>
    </>
  )
}
export default ProductDetailsSection