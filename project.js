
function handleSubmit(event){
event.preventDefault();
    if(clientName.value.length > 0 && email.value.length > 2){
            alert("Welcome! We'll contact you within 24 hours")
        } else {alert ("Something is not right. Please check the form")}
}

let clientName = document.querySelector("#name");
let email = document.querySelector("#email");

let subscribeButton = document.querySelector("form");
subscribeButton.addEventListener("submit", handleSubmit);