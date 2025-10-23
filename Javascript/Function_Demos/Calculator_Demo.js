
// Higher Order Function
function calculator(a, b, operation)
{
    return operation(a,b)
}

// Regular functions-normal functions
function sum(x, y)
{
    return x + y;
}

function Difference(x, y)
{
    return y - x;
}

function Product(x, y)
{
    return x * y;
}

function Quotient(x, y)
{
    return x / y;
}

console.log(calculator(12, 4, sum));
console.log(calculator(12, 3 , Quotient));
console.log(calculator(5, 2, Product));
console.log(calculator(12, 13, Difference));

