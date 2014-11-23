// applies a key to a string
// if a character is an alphabetical character
// then it moves up the alphabet according to the given key
// if the letter is above 'z', it loops back to 'a'
// if the new letter is a vowel then the new letter is converted to uppercase
function LetterChanges(str) { 
  var key = 1;
  var tmpStr = str.split();
  
  for (var i=0; i<str.length; i++){
    if (IsAlpha(str[i])){
      tmpStr[i] = (ApplyKey(str[i], key));
      if (IsVowel(tmpStr[i])){
         tmpStr[i] = tmpStr[i].toUpperCase();
      }
    }
    else{
      tmpStr[i] = str[i];
    }
  }

tmpStr = tmpStr.join('');
return tmpStr;
}
       
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

// applies a given key to a letter to create the Caesar Cipher
// returns the new letter
function ApplyKey(letter, key){
  var charNum = letter.charCodeAt();
  var newLetter;
  charNum += (key%26);
  if ((isUpper(letter) && charNum > 90) ||
      (isLower(letter) && charNum > 122)){
    charNum -= 26;
  }
  return String.fromCharCode(charNum);
}  