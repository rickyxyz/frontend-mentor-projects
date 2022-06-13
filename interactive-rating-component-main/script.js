const ratingForm = document.getElementsByClassName("rating-form")[0];
const cardBefore = document.getElementById("content_before");
const cardAfter = document.getElementById("content_after");
const ratingResult = document.getElementById("rating_result");

ratingForm.addEventListener("submit", (eventSubmit) => {
    eventSubmit.preventDefault();

    const formData = new FormData(ratingForm);
    const rating = formData.get("rating");

    // console.log(`🎉 ${rating}`);
    cardBefore.classList.toggle("card_hidden");
    cardAfter.classList.toggle("card_hidden");

    ratingResult.innerHTML = `You selected ${rating} out of 5`;
});
