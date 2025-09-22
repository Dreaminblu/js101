// Write three different ways to remove all of the elements from the following array:
// let numbers = [1, 2, 3, 4];

// #1
let numbers = [1, 2, 3, 4];
numbers.length = 0;

console.log(numbers);

// #2
let numbers2 = [1, 2, 3, 4];
numbers2.splice(0, numbers2.length);

console.log(numbers2);

// #3
let numbers3 = [1, 2, 3 , 4];
numbers3 = [];

console.log(numbers3);

// Extra
let numbers4 = [1, 2, 3, 4];

while (numbers4.length){
  numbers4.pop();
}

console.log(numbers4);