const errorIcon = document.querySelector(".email-form__error-icon");
const errorText = document.querySelector(".email-form__error-text");
const inputContainer = document.querySelector(".email-form__input-container");
const emailForm = document.querySelector(".email-form");
const emailInput = document.querySelector(".email-form__input");

emailForm.addEventListener("submit", e => {
    e.preventDefault();
    let email = emailInput.value;

    if(!email) {
        errorIcon.classList.remove("error_hidden");
        errorText.classList.remove("error_hidden");
        inputContainer.classList.add("error_border");
    }
    else {
        errorIcon.classList.add("error_hidden");
        errorText.classList.add("error_hidden");
        inputContainer.classList.remove("error_border");
    }

});
