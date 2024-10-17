const form = document.getElementById("form")
const firstName = document.getElementById("name")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    checkInputs()
})

function checkInputs(){
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const passwordValue = password.value

    if(firstNameValue === ""){
        setErrorFor(firstName, 'First Name cannot be empty')
    }else{
        setSuccesFor(firstName)
    }

    if(lastNameValue === ""){
        setErrorFor(lastName, 'Last Name cannot be empty')
    }else{
        setSuccesFor(lastName)
    }

    if(emailValue === ""){
        setErrorFor(email, 'Email cannot be empty')
    }else if(!checkEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }else{
        setSuccesFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, 'Password cannot be empty')
    }else if(passwordValue.length < 6){
        setErrorFor(password, 'Password cannot be less than 6 characters')
    }else{
        setSuccesFor(password)
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    
    small.innerText = message

    formControl.className = "form-control error"
}

function setSuccesFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}