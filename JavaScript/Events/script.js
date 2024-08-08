let btn = document.getElementById("btn");
let boxElement = document.querySelector(".box");
//let btn = document.getElementsByClassName("btn")[1]; // not working

btn.addEventListener("click", () => {

    // alert("You Clicked Button");

    boxElement.innerHTML = "You Changed Content";


})

btn.addEventListener("contextmenu", () => {

    // Also Dont Write entire code here use functions

    changeContent(boxElement);
    // boxElement.innerHTML = "Submit"

})

function changeContent(boxElement) {
    boxElement.innerHTML = "Submit";
}

// Also there are Keyboard Events