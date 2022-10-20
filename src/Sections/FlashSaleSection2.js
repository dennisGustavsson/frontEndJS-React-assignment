import { NavLink } from "react-router-dom"

const FlashSaleSection2 = () => {
  return (
    <>
    <section className="flash-sale container">
        <div className="flash-grid reverse-grid">
            <div className="flash-advert">
                <h2>2 FOR $49.00</h2>
                <NavLink className="btn-theme btn-theme-white">Flash Sale</NavLink>
            </div>
            <div className="product-grid grid-end">
                <div className="product-card">
                    <div className="product-img"></div>
                    <span>Category</span>
                    <h3>Mordern Black Blouse</h3>
                    <span className="ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="new-price">$49.00</span>
                </div>
                <div className="product-card">
                    <div className="product-img"></div>
                    <span>Category</span>
                    <h3>Mordern Black Blouse</h3>
                    <span className="ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="new-price">$49.00</span>
                </div>
                <div className="product-card">
                    <div className="product-img"></div>
                    <span>Category</span>
                    <h3>Mordern Black Blouse</h3>
                    <span className="ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="new-price">$49.00</span>
                </div>
                <div className="product-card">
                    <div className="product-img"></div>
                    <span>Category</span>
                    <h3>Mordern Black Blouse</h3>
                    <span className="ratings">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    </span>
                    <span className="new-price">$49.00</span>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}
export default FlashSaleSection2