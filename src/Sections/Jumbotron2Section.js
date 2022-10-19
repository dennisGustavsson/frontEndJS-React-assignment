import pamelaImg from '../Assets/images/img-3.svg'
import consciousImg from '../Assets/images/img-4.svg'
const Jumbotron2Section = () => {
  return (
    <section class="jumbotron container">
        <div class="jumbo-content pamela">
            <img src={pamelaImg} alt=""/>
            <div class="jumbo-text">
                <h2>Pamela Reif's
                    Top Picks</h2>
                <button class="btn-theme">Shop now</button>
            </div>
        </div>
        <div class="jumbo-content conscious">
            <img src={consciousImg} alt=""/>
            <div class="jumbo-text">
                <h2>Let's Be <br/>
                    Conscious</h2>
                <button class="btn-theme">Flash sale</button>
            </div>
        </div>
    </section>
  )
}
export default Jumbotron2Section