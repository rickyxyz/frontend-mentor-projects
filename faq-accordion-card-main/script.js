const itemHeader = document.getElementsByClassName("accordion-item__header");

for (i = 0; i < itemHeader.length; i++) {
    itemHeader[i].addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("accordion-item__content_hidden");
        content.classList.toggle("accordion-item__content");
        this.classList.toggle("accordion-item__header_active");
    });
}
