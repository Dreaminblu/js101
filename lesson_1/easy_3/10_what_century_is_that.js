// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
function century(year) {
  let centuryNum = Math.ceil(year / 100);

  let suffix = "th";
  // 11, 12, and, 13 does not follow this rule
  if (centuryNum % 100 < 11 || centuryNum % 100 > 13) {
    if (centuryNum % 10 === 1) suffix = "st";
    else if (centuryNum % 10 === 2) suffix = "nd";
    else if (centuryNum % 10 === 3) suffix = "rd";
  }

  return centuryNum + suffix;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"