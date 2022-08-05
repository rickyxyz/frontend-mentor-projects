const form = document.forms["email-form"];

const validationOptions = [
    {
        attribute: "required",
        isValid: (input) => input.value.trim() !== "",
        errorMessage: "Whoops! It looks like you forgot to add your email",
    },
    {
        attribute: "pattern",
        isValid: (input) => {
            const pattern = new RegExp(input.pattern);
            return pattern.test(input.value);
        },
        errorMessage: "Please provide a valid email address",
    },
];

form.setAttribute("novalidate", "");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.forms["email-form"].elements["email"];
    const error = document.getElementsByClassName("email-form__error")[0];

    let inputError = false;
    for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
            error.textContent = option.errorMessage;
            error.classList.remove("hidden");
            input.classList.add("input_error");
            inputError = true;
            break;
        }
    }
    if (!inputError) {
        errorContainer.textContent = "";
        errorContainer.classList.add("hidden");
        errorIcon.classList.add("hidden");
        input.classList.remove("input_error");
    }
});
