// returns true if each alphabetical character in a string
// has a '+' immediately before and immdiately after it
function SimpleSymbols(str){ 
var checkSymbol = '+';
	for (var i=0; i<str.length;i++){
		if (IsAlpha(str[i])){
			if (str[i-1] !== checkSymbol ||
				str[i+1] !== checkSymbol){
				return false;
			}
		}
	}
  return true;       
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
