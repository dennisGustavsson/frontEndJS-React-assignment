import { NavLink } from "react-router-dom"

const FlashSaleSection3 = () => {
  return (
    <>
    <section className="flash-sale container">
        <div className="flash-grid-center">
            <div className="flash-advert">
                <h2>UP TO 70% OFF*</h2>
                <h4>Women's, Men's & Kids Winter Fashion</h4>
                <NavLink className="btn-theme btn-theme-white">Flash Sale</NavLink>
            </div>
            <div className="product-grid">
                {/* <div className="product-card">
                    <div className="product-img"></div>
                    <div className="product info">
                        <div className="category-title">Category</div>
                        <h3>Mordern Black Blouse</h3>
                        <div className="ratings">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        </div>
                        <span className="new-price">$29.00</span>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
    </>
  )
}
export default FlashSaleSection3