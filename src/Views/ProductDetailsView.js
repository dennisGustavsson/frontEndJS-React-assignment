import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import BreadcrumbSection from "../Sections/BreadcrumbSection"

const ProductDetailsView = ({}) => {


      //first letter and first letter after whitespace to upper
      const getNameToUpper = (name) => {
        const firstLetterUpper = name
        .toLowerCase() //makes all letters lowercase
        .split(' ') //splits all words where there is a whitespace, and puts all words in a array
        .map(word => { //maps trough the array 
            return word.charAt(0).toUpperCase() + word.slice(1); //takes first char of all words in array and makes uppercase
        })
        .join(' ') //joins every word from the array and puts a whitespace between them
        return firstLetterUpper
    }
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
                    <input type="radio" className="btn-check" name="options" id="option1" autocomplete="off"/>
                    <label className="btn btn-secondary" for="option1">S</label>

                    <input type="radio" className="btn-check" name="options" id="option2" autocomplete="off"/>
                    <label className="btn btn-secondary" for="option2">M</label>

                    <input type="radio" className="btn-check" name="options" id="option3" autocomplete="off"/>
                    <label className="btn btn-secondary" for="option3">L</label>

                    <input type="radio" className="btn-check" name="options" id="option4" autocomplete="off"/>
                    <label className="btn btn-secondary" for="option4">XL</label>
                    </div>
                    <div className="choose-color">
                      <h4>Color: </h4>
                    </div>
                    <div className="quantity">
                      <h4>Qty: </h4>
                    </div>

                  </form>
                  <div className="shareSocialMedia">
                    <h4>Share: </h4>
                    <NavLink to="" className="btn-theme">ADD TO CART</NavLink>
                  </div>
                </div>
              </div>  
            </div>
          </div>

        </div>
    <FooterSection/>
    </>
  )
}
export default ProductDetailsView