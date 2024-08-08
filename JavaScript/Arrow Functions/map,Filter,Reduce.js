// Map Filter Reduce Methods are used in arrays

/*
1.  Map method creates new array and perform for each element in array
ex -- square,double,remainder

2. Filter method is used to filter the array by removing some elements based on condition
ex -- filter out even elements,filter out names with length 5,based on remainder,>100


3. Reduce Method is used when there is one value from the given array
ex-- sum of array,average,product,largest numberS


*/

// 1.Map

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((val) => {

//     return val * val;
// })

// console.log(newArr);


// const a = [1, 2, 3];

// const b = a.map((val) => {

//     return val * val * val;
// })

// console.log(b);


// 2.Filter

// const arr = [1, 3, 4, 5, 6, 8, 45, 41, 33, 22, 11, 78, 66, 55, 44, 32];
// const arr = [1, 3, 45, 66, 89, 12, 13, 41, 43, 24];

// const newArr = arr.filter((val) => {
//     return val % 3 == 0;
// })

// console.log(newArr);

// 3. Reduce

const price = [21, 34, 5, 678, 93, 342, 121];
const total = 0;

const totalPrice = price.reduce((total, i) => {

    return total + i;
})

console.log(totalPrice);