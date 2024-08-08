let prom = new Promise((resolve, reject) => {
    let x = 2;

    if (x == 5) {
        console.log("great");
        resolve("You Used then");
    } else {
        reject("Not Good");
    }


})

prom.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})