formData = { email: "", mesage: "" }

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input");
const textArea = form.querySelector("textArea");
const button = form.querySelector("button");

form.addEventListener("input", => {
    this.email = event.target.value.email;
    this.mesage = event.target.value.mesage;
})