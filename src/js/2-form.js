
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

let formData = { email: "", message: "" };



function handleInput(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
     console.log(event);
      
}
form.addEventListener("input", handleInput);

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email;
        form.elements.message.value = formData.message;
    }


function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return ;        
    }
       
    console.log(formData);
    
localStorage.removeItem(STORAGE_KEY);
formData = { email: "", message: "" };
form.reset();
}

form.addEventListener("submit", handleSubmit)