// Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

/* 
variables:
  arr, newArr, num (outer), newNum, double, num (parameter)

primitive values:
  [1, 2, 3]
  0, 1 
  1
  1, 2, 2

objects:
  arr, double
*/ 