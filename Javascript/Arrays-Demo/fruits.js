let fruits = ["Apple", "Orange", "Pinapple", "Strawberry", "Kiwi", "Guava"];
// console.log(fruits[4]);
// // for (let i = 0; i <= 5; i++)
// {ṇ
//     // console.log(fruits);
//     console.log(fruits[i]);
// }

// Foreach loop
// fruits.forEach(f => console.log(f));

// in ForEach loop a virtual for loop keeps running and f takes the value of the whole array.
let animals = ["Tiger", "Leopard", "Fox", "Horse", "Cat", "Giraffe", "Dog"];
// animals.forEach(a => console.log(a));

// Search the element
let animals_endswithY = animals.find(a => a.endsWith("x"));
// console.log(animals_endswithY);
console.log(animals_endswithY);

console.log(animals.filter(a => a.endsWith("g")));
console.log(animals.filter(a => a.startsWith("L")));

// Join function
let newfruits = fruits.join("##");
console.log(newfruits);


