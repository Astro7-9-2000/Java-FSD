let brands = ["Apple", "Samsung", "Google", "Microsoft", "Intel", "HP"];
brands.forEach(b => console.log(b));
let Ibrands = brands.filter(b => (b.startsWith("I")) || (b.endsWith("le")));
console.log(Ibrands);

// Map function - Used to map the elements 
let brands_uppercase = brands.map(b => b.toUpperCase());
console.log(brands_uppercase);
let brands_lowercase = brands.map(b => b.toLowerCase());
console.log(brands_lowercase);

// Sort method
let sorted_brands = brands.sort();
console.log(sorted_brands);

// let age_array = [230, 65, 175, 278, 112, 825];
// let sorted_age = age_array.sort();
// console.log(sorted_age);

//  Spread Operator -> ... old array name -> is used to access the old array 
// We can add the new elements in an old array by using the spread operator.
let More_brands = [...brands, "Infosys", "LTI", "Amazon", "Alibaba", "SpaceX"];
console.log(More_brands);


