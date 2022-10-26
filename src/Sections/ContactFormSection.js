import { useState } from "react"

const ContactFormSection = () => {

    /* useState for our inputs */
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})

    /* useState for error messages */
    const [formErrors, setFormErrors] = useState({})


    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexName = /^(?=.{2,50}$)[a-z]+(?:['-\s][a-z]+)*$/i








    const validate = (values) => {
        const errors = {}
        
        
        if(!values.name) {
            errors.name = 'You need to enter a name with at least 2 charachters'
        } 
        else if(!regexName.test(values.name)) {
            errors.name = 'Enter name without numbers or special characters'
        }
        if(!values.email) {
            errors.email = 'You need to enter a email'
        } 
        else if(!regexEmail.test(values.email)) {
            errors.email = 'You must enter a valid email adress (eg. name@domain.com ) '
        }

        if(!values.comment) {
            errors.comment = 'You need to enter a comment'
        }
        else if(values.comment.length < 20) {
            errors.comment = 'You need to enter at least 20 charachters'
        }

        return errors;
    }


    const handleChange = (e) => { //checks for events on the input and puts them in the form object
        const {id, value} = e.target

        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormErrors(validate(contactForm))
    }


    //validates name input onKeyUp
    const handleName = (e) => {
        e.preventDefault()
        setFormErrors(validateName(contactForm))
    }

        const validateName = (values) => {
        
        const errors = {}

        if(!regexName.test(values.name) || values.name == 0) {
            errors.name = 'Enter name with at least 2 charachters without numbers or special characters'
        }
        return errors
    
    }
    // validates email input onKeyUp
    const handleEmail = (e) => {
        e.preventDefault()
        setFormErrors(validateEmail(contactForm))
    }


    const validateEmail = (values) => {
        
        const errors = {}

        if(!regexEmail.test(values.email) || values.email == 0) {
            errors.email = 'You need to enter a valid email'
        }
        return errors
    
    }
    //validates comment to be at least 20 chars onKeyUp
    const handleComment = (e) => {
        e.preventDefault()
        setFormErrors(validateComment(contactForm))
    }


    const validateComment = (values) => {
        const requiredLength = 20;
        const charsLeft = requiredLength - values.comment.length
        const errors = {}

        if(charsLeft > 0 ) {
            errors.comment = `You need to enter at least ${charsLeft} more charachters`
        }
        return errors
    
    }





    return (
        <section className="contact-us container">
            <h3>Come in Contact with Us</h3>
            <form id="form" className="form-theme" onSubmit={handleSubmit} noValidate>
            <div className="d-grid-2">
                <div className="relative">
                <input className="" id="name" type="text" placeholder=" " onChange={handleChange} onKeyUp={handleName} value={contactForm.name}/>
                <label htmlFor="name">Your Name</label>
                <span className="error-msg">{formErrors.name}</span>
                </div>





                <div className="relative">
                <input id="email" type="email" placeholder=" " onChange={handleChange} onKeyUp={handleEmail} value={contactForm.email}/>
                <label htmlFor="email">Your Email</label>
                <span className="error-msg">{formErrors.email}</span>
                </div>
            </div>
            <div className="relative">
                <textarea name="comment" id="comment" className="" placeholder=" " onChange={handleChange} onKeyUp={handleComment} value={contactForm.comment}></textarea>
                <label htmlFor="comments">Comments</label>
                <span id="comments-error" className="error-msg">{formErrors.comment}</span>
            </div>
                <div className="relative">
                <button id="subButton" type="submit" className="btn-theme">Post Comments</button>
            <span className="error-msg-btn"></span></div> 

            </form>
        </section>
    )
}
export default ContactFormSection