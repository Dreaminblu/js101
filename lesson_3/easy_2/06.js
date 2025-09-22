/*
Question:
  Create a new array that contains all of the above values in a un-nested format

Examples:
  ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]] => 
  ["Fred", "Wilma", "Barney", "Betty", "Bambam", "Perbbles"] 

Function call:

Psedocode:
  use .flat()

  use .concat()

  use .reduce()
*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let flatFlinstones = flintstones.flat();
console.log(flatFlinstones);

let newFlintstones = [].concat(...flintstones);
console.log(newFlintstones);

let result = flintstones.reduce((acc, val) => {
  return acc.concat(val);
}, []);
console.log(result);