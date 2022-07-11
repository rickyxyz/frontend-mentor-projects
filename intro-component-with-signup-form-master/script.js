const signupForm = document.forms['signup-form']

const validationOptions = [
    {
        attribute: 'required',
        isValid: input => input.value.trim() !== "",
        errorMessage: (input) => `${ input.name } cannot be empty`
    },
    {
        attribute: 'pattern',
        isValid: input => {
            const pattern = new RegExp(input.pattern);
            return pattern.test(input.value);
        },
        errorMessage: (input) => "Looks like this is not an email"
    }
];

signupForm.setAttribute('novalidate', '');

signupForm.addEventListener("submit", event => {
    event.preventDefault();
    const inputGroups = [...signupForm.querySelectorAll(".input-container")];
    inputGroups.forEach(inputGroup => {
        const input = inputGroup.querySelector("input");
        const errorContainer = inputGroup.querySelector("em");
        const errorIcon = inputGroup.querySelector("span");

        let inputError = false;
        for(const option of validationOptions) {
            if(input.hasAttribute(option.attribute) && !option.isValid(input)){
                errorContainer.textContent = option.errorMessage(input);
                errorContainer.classList.remove('hidden');
                errorIcon.classList.remove('hidden');
                input.classList.add('input_error');
                input.placeholder = "";
                inputError = true;
                break;
            }
        }
        if(!inputError) {
            errorContainer.textContent = "";
            errorContainer.classList.add('hidden');
            errorIcon.classList.add('hidden');
            input.classList.remove('input_error');
        }
    });
});

