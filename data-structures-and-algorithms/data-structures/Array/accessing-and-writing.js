/**
 * Difference between 'i++' and '++i'
 * 
 * POSTFIX:
 * var i = 0;
 * var j = i++;
 * console.log(i,j) >> i = 1, j = 0
 * If used postfix, with operator after operand (for example, x++), then it returns the value before incrementing.
 * 
 * PREFIX:
 * var i = 0;
 * var j = ++i;
 * console.log(i,j) >> i = 1, j = 1
 * If used prefix with operator before operand (for example, ++x), then it returns the value after incrementing.
 */

//When creating variables, using a comma instead of a semi-colon allows you to add multiple variables using 1 'var' keyword
var num = [],
    i = 0;

//Add elements to an empty array using the for loop
for (; i < 100; ++i) {
    num[i] = i + 1;
}

//Accessing an element in an array. Use the index by:
console.log(num[0]); // Outputs '1' since '1' is at the very beginning of the array
console.log(num[99]); // Outputs '100' since '100' is at the very end of the array