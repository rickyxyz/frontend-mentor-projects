const ratingForm = document.getElementsByClassName("rating-form")[0];

ratingForm.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();

    const formData = new FormData(ratingForm);
    const rating = formData.get("rating");
});
