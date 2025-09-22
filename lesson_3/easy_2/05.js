/* 
Question:
  given the array of numbers, remove the number at index 2

Examples:
  [1, 2, 3, 4, 5] => [1, 2, 4, 5]

Function call:
  removeIndex2()
  removeIndexTwo()

Psedocode:
  mutate orignial array
    use .splice()

  create new array
    use .filter()
*/

let numbers = [1, 2, 3, 4, 5];

function removeIndex2(numbers) {
  numbers.splice(2 ,1);
  return numbers;
}

console.log(removeIndex2(numbers));

function removeIndexTwo(numbers) {
  return numbers.filter((_, index) => index !== 2);
}

let newNumbers = removeIndexTwo(numbers);

console.log(newNumbers);
