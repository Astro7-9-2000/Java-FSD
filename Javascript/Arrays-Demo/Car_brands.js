let Car_Brands = ["Lamborghini", "Tesla", "BMW", "Mercedez", "Honda", "Maruti", "Ferrari" , "Porsche" , "Bentlay" , "Rolls Royce"];
console.log(Car_Brands);
console.log(Car_Brands.forEach(c => console.log(c)));
// Push method
Car_Brands.push("Audi");
console.log(Car_Brands);
// Pop method
Car_Brands.pop("Audi");
console.log(Car_Brands);
// Shift method
Car_Brands.shift();
console.log(Car_Brands);
// Unshift Method
Car_Brands.unshift("Rolls Royce");
console.log(Car_Brands);
// At method
console.log(Car_Brands.at(1));
// length function
console.log(Car_Brands.length);
// delete function - creates an empty hole in the array.
delete Car_Brands[5];
console.log(Car_Brands);

// for each loop
Car_Brands.forEach(c => console.log(c));

    

