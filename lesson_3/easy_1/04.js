// Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized.

let munsterDescription = "the Munsters are CREEPY and Spooky";// => The munsters are creepy and spooky.

function titleCase(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

titleCase(munsterDescription);

console.log(titleCase(munsterDescription));

// method
munsterDescription.charAt(0).toUpperCase() + munsterDescription.substring(1).toLowerCase();