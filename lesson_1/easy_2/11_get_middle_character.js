// Write a function that takes a non-empty string argument and returns the middle character(s) of the string.
// If the string has an odd length, you should return exactly one character.
// If the string has an even length, you should return exactly two characters.

function centerOf (str) {
  let middle = Math.floor(str.length /2);
  
  if (str.length % 2 === 0) {
    return str.slice(middle - 1, middle + 1);
  } else {
    return str.slice(middle, middle + 1);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
