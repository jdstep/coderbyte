// returns true if all of the alphabet characters in a string
// are the same backwards as forwards
function Palindrome(str) { 
  var forwardString;
  var reverseString;

  forwardString = [];

  for (var i=0;i<str.length;i++){
  	if (IsAlpha(str[i])){
  		forwardString.push(str[i]);
  	}
  }

  reverseString = forwardString.slice(0);

  reverseString.reverse();

  forwardString = forwardString.join('');
  reverseString = reverseString.join('');

  if (forwardString === reverseString){
  	return true;
  }
  else{
  	return false;
  }     
  return false;    
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

var testString = "raceeffcar";

console.log(Palindrome(testString));