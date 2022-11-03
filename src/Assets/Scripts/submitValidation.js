export const submitData = async (data) => {


    const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })

        if(res.status === 200) {
            
            return true
        } 
        else {
           return false
        }


}

    //regex for name and email inputs
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^(?=.{2,50}$)[a-z]+(?:['-\s][a-z]+)*$/i;



//function that takes event and a form variable
export const validation = (e, form = null) => {
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




const validateName = (value) => {
    if(!value) {
        return 'Name is required'
    }
    else if(!regexName.test(value)) {
        return 'Enter a name without special charachters'
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