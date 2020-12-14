let form = document.getElementById('form');
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function showError(inputElementId, errorElementId, errorMessage) {
    let errorElement = document.getElementById(errorElementId);
    let inputEmail = document.getElementById(inputElementId);
    inputEmail.classList.add('error-state');
    errorElement.classList.add('visible');

    errorElement.innerHTML = errorMessage;
}

function hideError(inputElementId, errorElementId) {
    let errorElement = document.getElementById(errorElementId);
    let inputEmail = document.getElementById(inputElementId);
    errorElement.classList.remove('visible');
    inputEmail.classList.remove('error-state');
}

form.addEventListener('submit', (event) => {
    if (form.email.value == "") {
        showError("input-email", "email-error", "Whoops! It looks like you forgot to add your email");
        event.preventDefault();
    } else if (!emailRegExp.test(form.email.value)) {
        showError("input-email", "email-error", "Please provide a valid email address");
        event.preventDefault();
    } else {
        hideError("input-email", "email-error");
    }
})


