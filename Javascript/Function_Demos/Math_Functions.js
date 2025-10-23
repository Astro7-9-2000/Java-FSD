console.log(Math.PI);
console.log(Math.abs(-2));
console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));
console.log(Math.ceil(-4.9));
console.log(Math.ceil(-4.2));
console.log(Math.round(4.2));

console.log(Math.pow(3, 2));
console.log(Math.sqrt(8));
console.log(Math.E);  // Returns Euler's number
console.log(Math.trunc(2.5)); // Returns the integer part 
console.log(Math.sign(-4));   // Returns -1 if number is negative or else positive
console.log(Math.sign(0));
console.log(Math.sign(4));

console.log(Math.min(2, 4, 5, 8, 15));
console.log(Math.max(4, 5, 8, 74, 2));
console.log(Math.random()); // returns a random number between 0 and 1:

// Logarithmic Functions

console.log(Math.log(1));
console.log(Math.log(2));
console.log(Math.log(3));

console.log(Math.log2(8)); // Math.log2(x) returns the base 2 logarithm of x.
console.log(Math.log10(1000));
console.log(Math.LN10);  // returns the natural logarithm of 10



// Dice Rolling function

function getdice_roll_count(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("On dice no.is : " + getdice_roll_count(1, 6));






