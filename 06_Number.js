//Two ways to  declare Number data type

const num = 25
const num2 = new Number(25);
console.log(num)
console.log(typeof(num))  
console.log(num2)
console.log(typeof(num2)) 

// Import maths of number datatype

const num3 = 100.3678
console.log(num3.toString())
console.log(num3.toFixed(2))
/* Note : The toPrecision() method formats a number to a specified length.
A decimal point and nulls are added (if needed), to create the specified length.*/
console.log(num.toPrecision(5)) 


const hundred =1000000

console.log(hundred.toLocaleString("en-IN"))