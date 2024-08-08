/* Arrow Functions - Modern Js
1. are concise and readable
2. performance benfits, efficiency
3. used in callbacks, event handlers
4. used for small functions
5. no need of curly braces for single line code

In arrow function, function name is used for function call and also
as variable which stores function definition.

Ex-- 
1
function call - sum(2,4);
variable      - console.log(sum);// prints function definition

2

function call - greet();
variable      - console.log(greet); // prints function definition

*/



// 1. Function Returning a Value

// const sum = (a, b) => {

//     return a + b;
// }
// const val = sum(1, 1);
// console.log(val);

// 2. Function Printing a Value


const greet = () => {
    console.log("Welcome to my page");
}

console.log(greet);
greet();


// const print = () => {
//     console.log("Hello, Hi");
// }

// console.log(print);
// print();