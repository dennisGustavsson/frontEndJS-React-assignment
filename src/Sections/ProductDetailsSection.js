import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getNameToUpper } from '../Assets/Scripts/getNameToUpper'
import ExternalLinkIcon from "../Components/ExternalLinkIcon"

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
                <span>SKU: 12345670 BRAND: The Northland</span>
                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <span>$35.00</span>
                <p>Discovered had get considered projection who favourable. 
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
                    </div>
                    <NavLink to="" className="btn-theme">ADD TO CART</NavLink>
                  </form>
                  <div className="shareSocialMedia">
                    <h4>Share: </h4>    
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-instagram"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-twitter"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-google"/>
                    </div>
                    <div className="icon-circle">
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-linkedin"/>
                    </div>
                        
                  </div>

                </div>
              </div>  
            </div>
          </div>

        </div>
    </>
  )
}
export default ProductDetailsSection