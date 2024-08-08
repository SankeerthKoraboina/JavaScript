//  forEach 

// callback functions --> functions which are passed as parameters



/* HOF -- Higher Order Functions
// can be expressed as arrow functions
// Functions taking another function as a parameter 
// or     returning another function 

Ex-- forEach--> Syntax
     
    arr.forEach(val)=>{
        console.log(val);
    }

    strings,array

*/
// 1.
const cities = ['hyderabad', 'bangalore', 'delhi'];

cities.forEach((i, index, cities) => {
    // console.log(i);
    console.log(i, index, cities);

})

// 2.

const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val * val);
})

//3.
// Use for of (for strings)
// or
// convert string to array
// const name = 'sankeerth';
// error
// name.forEach((i) => {
//     console.log(i);
// })