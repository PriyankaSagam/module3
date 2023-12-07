// imports go on the top
// import fs and then the module we created, days-of-week
// const fs = require('fs');
let daysOfWeek = require('./days-of-week');
// console.log(daysOfWeek);
// this works when we are only exporting the array
// console.log(daysOfWeek[0]);

// once we have the method and the weekdays array
let day = daysOfWeek.getWeekday(5);
console.log(day);

// defining my function called multiply
// const multiply = (a, b) => a*b;
// why didn't we need to type return?
// because when there's only one line, there is an 
// IMPLICIT return
// you are used to seeing this:
// const multiply = (a, b)  => {
//     return a*b;
// }

// invoking my multiply function, and setting n to the value that is returned
// let n = multiply(5, 8);

// output the answer
// console.log(n);

// use writeFile, which I learned from the documentation will either create a new file
// or overwrite the existing file
// fs.writeFile('./hello.txt', 'What is here overwrites what is in the file!', function() {
//     console.log('done creating file');
// })