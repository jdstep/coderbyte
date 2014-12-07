// returns a string with the characters of all alpha chars swapped
function SwapCase(str) { 

	str = str.split('');

	for (var i=0;i<str.length;i++){
		if (IsUpper(str[i])){
			str[i] = str[i].toLowerCase();
		}
		else if (IsLower(str[i])){
			str[i] = str[i].toUpperCase();
		}
	}

	str = str.join('');

	return str; 	 
	}

// returns true if the given letter is upper case
function IsUpper(letter){
  var charNum = letter.charCodeAt();
  if (charNum >= 65 && charNum <= 90){
    return true;
  }
  else{
    return false;
  }

}

// returns true if the given letter is lower case
function IsLower(letter){
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