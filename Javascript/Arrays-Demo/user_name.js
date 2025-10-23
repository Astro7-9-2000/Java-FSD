let names = ["Mahesh", "Suresh", "Ramesh", "Umesh", "Rakesh", "Tiya", "Jiya", "Riya"];
console.log(names.includes("Riya"));
console.log(names.includes("riya"));

// Replace method

let message = "Good Morning Everyone!!";
console.log("Before replace(): " +message);
let new_message = message.replace("Everyone", "Learners");
console.log(+new_message);

// Splits at each occurence of separator
const text = "JS is fun and learning it is exciting";
let words = text.split(" ");
console.log(words);