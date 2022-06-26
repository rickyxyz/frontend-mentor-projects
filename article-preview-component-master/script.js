const popup = document.getElementById("popup");
const button = document.getElementById("button_share");

button.addEventListener("click", (event)=>{
    popup.classList.toggle("share-section_visible");
    button.classList.toggle("button_active");
})