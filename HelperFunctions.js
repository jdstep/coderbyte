// returns true if the letter is a vowel
function IsVowel(letter) {
  var char = letter.toUpperCase();
  if (char === 'A' ||
      char === 'E' ||
      char === 'I' ||
      char === 'O' ||
      char === 'U' ){
      return true;
      }
      else{
      return false;
      }
}

// returns true if the given letter is upper case
function isUpper(letter){
  var charNum = letter.charCodeAt();
  if (charNum >= 65 && charNum <= 90){
    return true;
  }
  else{
    return false;
  }
}

// returns true if the given letter is lower case
function isLower(letter){
  var charNum = letter.charCodeAt();
  if (charNum >= 97 && charNum <= 122){
    return true;
  }
  else{
    return false;
  }
}

// returns true if the given character is in the alphabet
function IsAlpha(char){
  var charNum = char.charCodeAt();
  if ((charNum >= 65 && charNum <= 90) ||
      (charNum >= 97 && charNum <= 122)){
    return true;
  }
  else{
    return false;
  }
}
