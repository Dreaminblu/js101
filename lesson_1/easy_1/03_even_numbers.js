// Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for loop
for (let num = 1; num < 100; num += 1) {
  if (num % 2 === 1) {
    continue;
  }
  console.log(num);
}

// while loop
let num = 2;
while (num < 100) {
  console.log(num);
  num += 2;
}