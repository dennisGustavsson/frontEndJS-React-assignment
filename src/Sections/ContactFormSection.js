import { useState } from "react"

const ContactFormSection = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComment] = useState('');
    const [errors, setErrors] = useState({});  
    const [submit, setSubmitted] = useState(false);
    const [submitFailed, setFailedSubmitted] = useState(false);

    //regex for name and email inputs
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexName = /^(?=.{2,50}$)[a-z]+(?:['-\s][a-z]+)*$/i;

    //handles the inputs and sets the value to each variable
    const handleChange = (e) => {
        const {id, value} = e.target
        
        switch(id) {
            case 'name':
                setName(value) //sets the value of name
                break;
            case 'email': 
                setEmail(value)
                break;
            case 'comments':
                setComment(value)
                break;
        }
        //sets the errors in the object onChange
        setErrors({...errors, [id]: validation(e)})
    }

    //function that takes event and a form variable
    const validation = (e, form = null) => {
        if(e.type === 'submit') {
            const errors = {}
            errors.name = validateName(form.name)
            errors.email = validateEmail(form.email)
            errors.comments = validateComment(form.comments)
            return errors
        }
        else {
            const {id, value} = e.target
            switch(id) {
                case 'name':
                    return validateName(value)
                case 'email':
                    return validateEmail(value)
                case 'comments':
                    return validateComment(value)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFailedSubmitted(false)
        setSubmitted(false)
        setErrors(validation(e, {name, email, comments})) //sets the errors from valitation form

        if(errors.name === null && errors.email === null && errors.comments === null) {

            //makes a json object of our form
            let json = JSON.stringify({name, email, comments})

            setName('')
            setEmail('')
            setComment('')
            setErrors({})

            fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })

            .then(response => {
                if (response.status === 200) {
                    setSubmitted(true)
                    setFailedSubmitted(false)
                }
                else {
                    setSubmitted(false)
                    setFailedSubmitted(true)
                }
            })
            
        } 
        else {
            setSubmitted(false)

        }
    }


    //-------------------------------------validators for each input -----------------------------------------------

    const validateName = (value) => {
        if(!value) {
            return 'Name is required'
        }
        else if(!regexName.test(value)) {
            return 'Enter a name with at least 2 charachters without number or special charachters'
        }
        else {

            return null //errors value is epmty
        }
    }

    const validateEmail = (value) => {
        if(!value) { //if no value entered
            return 'An email is required'
        }
        else if(!regexEmail.test(value)) { // if value dont meets regex rules
            return 'Enter a valid email (eg. email@adress.com'
        }
        else {
            return null //errors value is epmty
        }
    }

    const validateComment = (value) => {
        let charsReq = 20
        let charsleft = charsReq - value.length
        if(!value) { //if no value entered
            return 'An comment is required'
        }
        else if(value.length < 20) { // if value dont meets regex rules
            return `You need to enter at least ${charsleft} more charachters`
        }
        else {
            return null //errors value is epmty
        }
    }




    return (
        <section className="contact-us container">
            {
                submit ?
                 (<div className="submitted"> <h3>Thank you!</h3> Your comment is posted and we will review it as soon as possible.</div>)
                : 
                (<></>)
            }

            {
                submitFailed ?
                 (<div className="submit-failed"> <h3>Sorry</h3> Your comment couldn't be posted at this moment. Please try again later.</div>)
                : 
                (<></>)
            }

            <h3>Come in Contact with Us</h3>
            <form id="form" className="form-theme" onSubmit={handleSubmit} noValidate>
            <div className="d-grid-2">
                <div className="relative">
                <input className={errors.name ? 'error-border' : ''} id="name" type="text" placeholder=" " onChange={handleChange} value={name}/>
                <label htmlFor="name">Your Name</label>
                <span className="error-msg">{errors.name}</span>
                </div>
                <div className="relative">
                <input className={errors.email ? 'error-border' : ''} id="email" type="email" placeholder=" " onChange={handleChange} value={email}/>
                <label htmlFor="email">Your Email</label>
                <span className="error-msg">{errors.email}</span>
                </div>
            </div>
            <div className="relative">
                <textarea name="comments" id="comments" className={errors.comments ? 'error-border' : ''} placeholder=" " onChange={handleChange}  value={comments}></textarea>
                <label htmlFor="comments">Comments</label>
                <span id="comments-error" className="error-msg">{errors.comments}</span>
            </div>
                <div className="relative">
                <button id="subButton" type="submit" className="btn-theme">Post Comments</button>
            <span className="error-msg-btn"></span></div> 

            </form>
        </section>
    )
}
export default ContactFormSection