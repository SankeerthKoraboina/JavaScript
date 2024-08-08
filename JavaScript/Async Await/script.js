// Use async for a function to return a promise
// Use await for a function to wait for the promise
// return new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("done");
//     }, 3500);
// });



async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("done");
        }, 3500)
        console.log("data waited");

    });

}





async function printDetails() {

    console.log(1);
    console.log(2);
    console.log(3);
    // let data = await fetchData(); // waits and returns promise and then executes below code 
    let data = fetchData(); // doesnt wait it runs the remaining code in background the function only is pending and below code 
    console.log(data);

    console.log(4);
    console.log(5);

}

printDetails();