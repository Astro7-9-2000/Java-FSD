let a = [90, 78, 56, 34, 23];
// console.log(a);
console.log(a[2]);
console.log("First element of an array is " + a[0]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

// Array Operations

const fruits = ["Banana", "Orange", "Apple", "Strawberry"];
console.log(fruits.length);

// At Method
console.log(fruits.at(2));
// pop method
fruits.pop(1);
console.log(fruits);
// push Method
fruits.push("Kiwi");
console.log(fruits);
// Shift method - The shift() method removes the first array element and "shifts" all other elements to a lower index.
fruits.shift();
console.log(fruits);
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
fruits.unshift("Kiwi");
console.log(fruits);
// concat function
const myGirls = ["Mary", "Gigi"];
const myBoys = ["Akshay", "Sunil", "Linus"];
const mypets = ["Dog", "rabbit", "Cat"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const myMembers = myGirls.concat(myBoys, mypets);
console.log(myMembers);

console.log(myMembers.length); // It is a property and not a method
console.log(typeof(myMembers));