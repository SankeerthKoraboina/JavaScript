let boxes = document.getElementsByClassName("box");
boxes[0].style.backgroundcolor = "blue";

console.log(boxes);

// OR

document.getElementsByClassName("box")[0].style.backgroundcolor = "blue";


let box = document.getElementById("green");
box.style.color = "green";

document.getElementsByTagName("div").style.color = "aqua";

document.querySelector(".box").style.color = "green";
//Selects first element

// Does nt work
document.querySelectorAll(".box").style.color = "green";


document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "green";
})