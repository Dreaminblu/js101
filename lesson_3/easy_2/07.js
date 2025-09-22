let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// create a new array containing only Barney's name and number
[ 'Barney', 2 ]

let barneyEntry = Object.entries(flintstones).find(([key, value]) => key === "Barney");
let barneyEntry2 = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(barneyEntry);
console.log(barneyEntry2);