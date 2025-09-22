/*
Question:
  determine if the number is included in the array

Examples:
  let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

  let number1 = 8; => false
  let number2 = 95; => true

Function call:
  numberChecker();

Pseudocode:
  use method .includes

  iterate through the array
    check to see if the number matches up the given number
    return true if found
  if not found, return false
*/

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
let number1 = 8;
let number2 = 95; 

numbers.includes(number1);
numbers.includes(number2);

function numberChecker(arr, number) {
  for (let i = 0; i < arr.length; i++) {
    if( arr[i] === number) {
      return true;
    }
  }
  return false;
}

console.log(numberChecker(numbers, number1));
console.log(numberChecker(numbers, number2));