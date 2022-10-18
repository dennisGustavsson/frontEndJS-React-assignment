import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
const NotFoundView = () => {
  return (
    <>
    <MainMenuSection/>
    <div className="__notfound">
    <h1>404 - Page not found!</h1>
    </div>
    <FooterSection/>
    </>
  )
}
export default NotFoundView