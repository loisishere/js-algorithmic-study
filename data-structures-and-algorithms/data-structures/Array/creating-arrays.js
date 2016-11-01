/**
 * Please note that the 'print' function in this book is for printing the page. It is best to use console.log() to view solutions.
 * It is possible to create a 'print' function but since it is a reserved word, it will cause errors
 */
//Creating arrays
//Array literal
var arr = [];
var arr1 = [1, 2, 3, 4, 5]
    //Using the Array constructor 
var arr = new Array();
var arr1 = new Array(1, 2, 3, 4, 5);

// Adding items to the array:
// Array literal
// Length is a property of the Array object; this returns '0' since there is nothing in the array object
console.log(arr.length);
//this returns '5'
console.log(arr1.length);

//Verify if an Array is an array:
var num = 3;
console.log(Array.isArray(arr)); //true
console.log(Array.isArray(num)); //false