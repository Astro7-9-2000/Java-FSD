// typeof operator used to identify the type of variable or data 

let k = 10;
let name = "Krutika";
let marks = 82.9;

// console.log(typeof (k));
// console.log(typeof (name));
// console.log(typeof (marks));

/* To convert the value from 1 datatype to another in javascript we need to use parseInt , 
String() , Boolean() , parseFloat , Number()*/

let sub1marks = 19.2;
console.log(parseInt(sub1marks));

let age = 23.6;
console.log(typeof (age));
console.log(parseFloat(age));
console.log(typeof (age));

let count = "90";
console.log(typeof (count)); // parseInt converts string to Integer
count = (parseInt(count));
console.log(count);
console.log(typeof (count));

name = parseInt(name);  // returns NaN - Not a number.
console.log(name);
console.log(typeof (name));
