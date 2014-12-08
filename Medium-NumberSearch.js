// given a string containing numbers and at least one letter
// returns the sum of the individual integers in the string divided by the number of letters

// Thoughts:
// My initial idea for this function remained the same throughout. However I found an issue
// in how to tell if the given string was a string of a number.
// I googled and found that people recommended !isNaN(char) to find if the given value is a number.
// However this also gave a false positive for spaces, so I needed to include that conditional
// in the first if statement.

// I re-used my isAlpha function from my helper functions file.
function NumberSearch(str) { 

  var sum = 0,
      countLetters = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) &&
        str[i] !== ' ') {
      sum += parseInt(str[i]);
    }
    else if (isAlpha(str[i])) {
      countLetters++;
    }
  }
  
  return Math.round(sum / countLetters);
}
   
function isAlpha(char){
  var charNum = char.charCodeAt();
  if ((charNum >= 65 && charNum <= 90) ||
      (charNum >= 97 && charNum <= 122)){
    return true;
  }
  else{
    return false;
  }
}

// console.log(NumberSearch("H6ell4o!"));
// // -> 2
// console.log(NumberSearch("B2a5n9ana tr9e5e"));
// // -> 3
