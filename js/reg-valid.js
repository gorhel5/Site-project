const form = document.querySelector('.form-block');
const formsInputs =  document.querySelectorAll('.input');
const inputEmail = document.querySelector('.inp-email');
const inputPassword = document.querySelector('.inp-password');

function validateEmail(email) {
    return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi.test(email.toString());
}

function validatePassword(password) {
    return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g.test(password.toString());
}


form.onsubmit = function() {
    let emailVal = inputEmail.value;
    let passVal = inputPassword.value;
    let emptyInputs = Array.from(formsInputs).filter(input => input.value === '');
    

    formsInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {
        console.log('not filled');
        return false;
    }

    if (!validateEmail(emailVal)) {
        alert('email not valid');
        inputEmail.classList.add('error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    if (!validatePassword(passVal)) {
        alert('pass not valid');
        inputPassword.classList.add('error');
        return false;
    } else {
        inputPassword.classList.remove('error');
    }
    alert ('Успешная регестрация');

}