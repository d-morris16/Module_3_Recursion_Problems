//Write a JavaScript function to compute the sum of an array of integers.


/*
Step 1: Define an array of integers. 
Step 2: Define a function that takes in an array as a parameter. 
Step 3: Set a base condition for the function to stop looping through itself when the
length of the array is 1.
Step 4: Pop() the last element in the array and add the value to the function.
*/


const arrayOfIntegers = [6, 16, 96, 97, 9, 4];

function arraySum(array) {
  if (array.length === 1) {
    
    return array[0];
  }
  else {
    return array.pop() + arraySum(array);
  }
}

console.log(arraySum(arrayOfIntegers));