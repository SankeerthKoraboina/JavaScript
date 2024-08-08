// Loops

// for,while,do while

// for (let i = 1; i <= 5; i++)
//     console.log('Hi Sankeerth', i);


// for-of , for-in

//for-of used for strings,arrays
// for in used for objects --> key value pairs

// let city = "Hyderabad";

// for (let val of city) // iterator
//     console.log(val);

let student = {
    name: 'sankeerth',
    age: 20,
    cgpa: 7.5,
    hobby: 'youtube'
};

for (let key in student)
    console.log('key =', key, 'value =', student[key]); // student.key doesnt work dont use student['key']



for (let i = 1; i <= 5; i++) {
    console.log(i);
}