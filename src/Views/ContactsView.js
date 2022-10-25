import { NavLink } from "react-router-dom"
import { FooterSection } from "../Sections/FooterSection"
import MainMenuSection from "../Sections/MainMenuSection"
import mapImg from "../Assets/images/map2.svg"
import BreadcrumbSection from "../Sections/BreadcrumbSection"

const ContactsView = () => {
  /* window title  */
  window.top.document.title = 'Contacts | Fixxo';

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Contacts" />

      <iframe className="map google-map"
      title="google-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d857.0984240248613!2d15.214954675796243!3d59.27391598348483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e28e532c05%3A0xafa950e40634bfcb!2s%C3%96rebro%20Slott!5e0!3m2!1ssv!2sse!4v1666713168765!5m2!1ssv!2sse"
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <section className="contact-us container">
        <h3>Come in Contact with Us</h3>
        <form
          id="form"
          className="form-theme"
          onSubmit="onSubmit(event)"
          noValidate
        >
          <div className="d-grid-2">
            <div className="relative">
              <input
                id="name"
                type="text"
                placeholder=" "
                onKeyUp="validateName()"
              />
              <label for="name">Your Name</label>
              <span id="name-error" className="error-msg"></span>
            </div>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder=" "
                onkeyup="validateEmail()"
              />
              <label for="email">Your Email</label>
              <span id="email-error" className="error-msg"></span>
            </div>
          </div>
          <div className="relative">
            <textarea
              name=""
              id="comments"
              placeholder=" "
              onkeyup="validateComments()"
            ></textarea>
            <label for="comments">Comments</label>
            <span id="comments-error" className="error-msg"></span>
          </div>

          <button
            id="subButton"
            type="submit"
            className="btn-theme"
            onclick="return validateForm()"
          >
            Post Comments
          </button>
          <span id="submit-error" className="error-msg-btn"></span>
        </form>
      </section>
      <FooterSection />
    </>
  );
}
export default ContactsView