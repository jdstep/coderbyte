// returns the number of vowels in a given string
function VowelCount(str) { 
	var numVowels;

	numVowels = 0;

	for (var i=0;i<str.length;i++){
		if (IsVowel(str[i])){
			numVowels += 1;
		}
	}
  return numVowels; 
         
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