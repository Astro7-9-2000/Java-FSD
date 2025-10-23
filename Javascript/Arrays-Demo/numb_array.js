let numbers = [10, 20, 30, 40, 50];
console.log("array in reverse order" +numbers.reverse());

// To sort the array elements
console.log(numbers.sort());

let array1 = [1, 2, 3, 4];
let array2 = [9, 8, 6, 5];
let joined_array = array1.concat(array2);
console.log("The array1 join with array2 = " + joined_array);

// 2D array - matrices (Rows * Columns)

let matrix = [
    [1,2,3] , [4,5,6] , [7,8,9]
]

console.log(matrix[1][1]);
console.log(matrix[2][0]);
console.log(matrix[1][0]);
console.log(matrix[0][1]);

console.log(matrix);

for (i = 0; i < matrix.length; i++)
{
    for (j = 0; j < matrix.length; j++)
    {
        console.log(matrix[i][j]);
    }
}

// Jagged Array - A Jagged array is a multidimensional array where each row can have a different number of columns
let Jarray = [
    [1, 2], [3, 4, 5], [6, 7, 8]
]

// To convert 2D array to 1D array use flat() method
let one_dimensional_array = Jarray.flat();
console.log(one_dimensional_array);





