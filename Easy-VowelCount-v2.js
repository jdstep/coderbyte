// returns the number of vowels in a given string

// Thoughts:
// The code is pretty much the same as my original attempt. I wonder if comparing the ascii value
// without converting it first to lower case would save on performance.
function VowelCount(str) { 

  var numVowels = 0;
  
  for (var i=0;i<str.length;i++) {
    if (isVowel(str[i])){
        numVowels++;
    }
  }
  
  return numVowels;
}

function isVowel(value){
 var lower = value.toLowerCase();
  
  if (lower === 'a' ||
      lower === 'e' ||
      lower === 'i' ||
      lower === 'o' ||
      lower === 'u'){
      return true;
  }
  else{
      return false;
  }
}