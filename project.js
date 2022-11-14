
function handleSubmit(event){
event.preventDefault();
let clientName = document.querySelector("#name");
let email = document.querySelector("#email");
    if(clientName.value.length > 0 && email.value.length > 2){
            alert(`Welcome, ${clientName.value}! We'll contact you within 24 hours`)
        } else {alert ("Something is not right. Please check the form")}
}

let subscribeButton = document.querySelector("form");
subscribeButton.addEventListener("submit", handleSubmit);