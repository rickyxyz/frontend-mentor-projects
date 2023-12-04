const form = document.querySelector("#form");
const input = document.querySelector("#email");
const error = document.querySelector("#error");
const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailPattern.test(String(input.value).toLowerCase())) {
    error.classList.add("error-hidden");
    input.classList.remove("input-invalid");
  } else {
    error.classList.remove("error-hidden");
    input.classList.add("input-invalid");
  }
});
