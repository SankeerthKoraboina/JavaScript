// Since clicking child element means clicking container element also

// To stop executing container events Use -- stopPropogation() function


let child = document.querySelector(".child");
let container = document.querySelector(".container");


child.addEventListener("click", (e) => {

    alert("You clicked Child");
    e.stopPropagation();

})


container.addEventListener("click", () => {

    alert("You clicked Container");

})