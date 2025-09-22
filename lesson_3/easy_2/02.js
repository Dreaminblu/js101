/*
Question:
  Reverse array in descending orfer without mutating the original array using .reverse(), .sort(), and .forEach() 

Examples:
  let numbers = [1, 2, 3, 4, 5];

  numbers.reverse() => [5, 4, 3, 2, 1]
  numbers.sort() => [5, 4, 3, 2, 1]
  numbers.forEach() => [5, 4, 3, 2, 1]

Function call:
  reversedeArray();
  sortedArray();
  reversedArray2();

Pseudocode:
  reverse & sort:
    make a copy using .slice() or spread syntax
    use method .reverse(), .sort()

  forEach:
    create an empty array
    use .forEach() 
      use .unshift()
    return the array
*/ 

let numbers = [1, 2, 3, 4, 5];

function reversedArray(arr) {
   return arr.slice().reverse();
}

reversedArray(numbers);

function sortedArray(arr) {
  return [...arr].sort((num1, num2) => num2 - num1);
}

sortedArray(numbers);

function reversedArray2(arr) {
  let reverse = [];

  arr.forEach((number) => {
    reverse.unshift(number);
  });

  return reverse;
}

reversedArray2(numbers);
