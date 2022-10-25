import { NavLink } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import mapImg from "../Assets/images/map2.svg"

const ContactsView = () => {
  return (
    <>
    <MainMenuSection/>
    <header className="head-contacts">
        <div className="container">
            <div className="breadcrumb">
                <ul>
                    <li>
                        <NavLink to="/"><i className="fa-solid fa-house"></i></NavLink>
                    </li>
                    <li>
                        <NavLink href="/contacts.html"> Contacts</NavLink>
                    </li>
                </ul>
                 
            </div>
        </div>
    </header>


    <div className="map">
        <img src={mapImg} alt="map over stockholm"/>
    </div>

    <section className="contact-us container">
            <h3>Come in Contact with Us</h3>
                <form id="form" className="form-theme" onsubmit="onSubmit(event)" noValidate>
                    <div className="d-grid-2">
                        <div className="relative">
                            <input id="name" type="text" placeholder=" " onkeyup="validateName()"/>
                            <label for="name">Your Name</label>
                            <span id="name-error" className="error-msg"></span>
                        </div>
                        <div className="relative">
                            <input id="email" type="email" placeholder=" " onkeyup="validateEmail()"/>
                            <label for="email">Your Email</label>
                            <span id="email-error" className="error-msg"></span>
                        </div>
                    </div>
                        <div className="relative">
                            <textarea name="" id="comments" placeholder=" " onkeyup="validateComments()"></textarea>
                            <label for="comments">Comments</label>
                            <span id="comments-error" className="error-msg"></span>
                        </div>
                       

                    <button id="subButton" type="submit" className="btn-theme" onclick="return validateForm()">Post Comments</button>
                    <span id="submit-error" className="error-msg-btn"></span>
                </form>
    </section>
    <FooterSection/>
    </>
  )
}
export default ContactsView