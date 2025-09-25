/*
Question:
  return a new string that swaps the cases of all the letters

Examples: 
  "The Munsters are creepy and spooky."; => `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

Function call: 
  swapCases();

Pseudocode:
#1
  create empty var called letters
    split the str to character and store it in letters
  use for loop to go through each character in letters
    if character is uppercase
      return it to lowercase
    else 
      return it to uppercase
   return all the letters joined

#2
  split string into an array of individual characters
  map over each character in the array
    if character is uppercase
      convert it to lowercase
    else
      convert it to uppercase
  join all characters
  return final string 
*/

let munsterDescription = "The Munsters are creepy and spooky."

// function swapCases(str) {
//   let letters = str.split("");
  
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === letters[i].toUpperCase()) {
//       letters[i] = letters[i].toLowerCase();
//     } else {
//       letters[i] = letters[i].toUpperCase();
//     }
//   }
//   return letters.join("");
// }

function swapCases(str) {
  return str.split("")
            .map(char => 
              char === char.toUpperCase()
                ? char.toLowerCase() 
                : char.toUpperCase()
  )
  .join("");
}


console.log(swapCases(munsterDescription));