const charactersList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&/\?";
const output = document.querySelector(".output");
const btnGenerate = document.querySelector(".btn_generate");
const message = document.querySelector(".info");
let temporary = "";


window.addEventListener("DOMContentLoaded", () => {
    document.form.output.value = "";
    let inputLenght = document.querySelector(".input_length").value = 8; 
});


        //generate random password
function generatePassword(passLength) {
    temporary = "";
    for (let i = 0; i < passLength; i++) {
        temporary += charactersList.charAt(Math.floor(Math.random() * charactersList.length));
    }
    return temporary;
};


        // copy the password
function copyClipBrd() {
    if (document.form.output.value == "") {
        message.innerHTML = "<p class='warning'>Generate a password first.</p>";
    } else {
        output.select();
        document.execCommand("Copy");
        message.innerHTML = "<p class='success'>Password copied.</p>";
    }
};

    // display random password on click
btnGenerate.addEventListener("click", () => {
    let inputLenght = document.querySelector(".input_length").value;
    
    if (inputLenght > 25 || inputLenght < 6) {
        const popup = document.querySelector(".popup_container");
        popup.classList.add("show");
        message.innerHTML = "";
        document.form.output.value = "";
        setTimeout(() => {
            popup.classList.remove("show");
        }, 4000);
    } else {
        document.form.output.value = generatePassword(inputLenght);
        message.innerHTML = "Click on the black area to copy the password.";
    }
});

// copy the pwd on click
output.addEventListener("click", copyClipBrd);