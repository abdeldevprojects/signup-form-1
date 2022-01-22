const form = document.getElementById("form")
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");





form.addEventListener("submit", e => {
    e.preventDefault();

    checkInput()
})

function checkInput() {
    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if(firstNameValue === "") {
        setErrorFor(firstName, "First Name cannot be blank")
    } else {
        setSuccessFor(firstName)
    }

    if(lastNameValue === "") {
        setErrorFor(lastName, "Last Name cannot be blank")
    } else {
        setSuccessFor(lastName)
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be blank")
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, "Email is not valid")
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be blank")
    } else {
        setSuccessFor(password)
    }
}

function setErrorFor(input, message) {
    const formControl  = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message

    formControl.className = "form-control error"
}

function setSuccessFor(input) {
    const formControl  = input.parentElement;

    formControl.className = "form-control success"
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

}
