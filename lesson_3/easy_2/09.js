/*
Question:
  center the following title above the 40 character wide table with spaces

Psuedocode: 
  set table width = 40
  get title length
  calculate leftover spaces = table width - title length
  find left padding = leftover spaces / 2
    round the number
  add left padding 
*/

let title = "Flintstone Family Members"; 

let tableWidth = 40;
let padding = Math.floor((tableWidth - title.length) / 2);

title.padStart(padding + title.length);
