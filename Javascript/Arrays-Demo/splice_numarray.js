// The splice() method is used to modify the existing array by removing elements using position and inserting new elements on the given position
let original_arr = [11, 33, 55, 77, 99];
original_arr.splice(1, 2 , 22 , 66);
console.log(original_arr);
original_arr.splice(2, 1, 0);
console.log(original_arr);