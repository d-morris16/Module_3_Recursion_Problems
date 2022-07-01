//Write a JavaScript function to calculate the factorial of a number

/*
Step 1: Create a funtion that accepts a number as a parameter.
Step 2: Use an if statement for the base condition to stop the recursion.
Step 3: Use the else statement to continue the loop and lower the number passed in 
by 1.
*/

function factorialCalculator(number) {
   if (number === 0) {
     return 1;
   }
  
  else {
    return number * factorialCalculator(number - 1);
  }
}

console.log(factorialCalculator(6));