// Write a function that takes a string argument and 
// returns a new string that contains the value of the original string 
// with all consecutive duplicate characters collapsed into a single character.

function crunch(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let lastChar = result[result.length - 1];

    if(currentChar !== lastChar) {
      result += currentChar;
    }
  }

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""