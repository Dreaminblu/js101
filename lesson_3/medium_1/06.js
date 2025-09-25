// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// How can you reliably test if a value is NaN?

console.log(Number.isNaN(nanArray[0]));