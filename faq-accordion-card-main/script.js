const itemHeaders = document.getElementsByClassName("accordion-item__header");

function hide(header){
    const content = header.nextElementSibling;
    content.classList.add("accordion-item__content_hidden");
    content.classList.remove("accordion-item__content_visible");
    header.classList.remove("accordion-item__header_active");
}

function toggle(header){
    const content = header.nextElementSibling;
    content.classList.toggle("accordion-item__content_hidden");
    content.classList.toggle("accordion-item__content_visible");
    header.classList.toggle("accordion-item__header_active");
} 

for (i = 0; i < itemHeaders.length; i++) {
    itemHeaders[i].addEventListener("click", function () {
        if(this.classList.contains("accordion-item__header_active")){
            toggle(this);
        }
        else{
            const activeHeader = document.querySelector(".accordion-item__header_active");
            if(activeHeader){
                hide(activeHeader);
            }
            toggle(this);
        }
    });
}
