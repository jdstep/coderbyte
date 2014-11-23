// capitalizes the first letter of each word in a given string
//
// An alternative implementation could split the string into separate arrays
// for each word by calling arr.split(' ') and then capitilzing the first letter.
//
// This procedure does not account for the possibility of the first character after
// a space being a symbol. A possible solution is to use arr.split(' ') and then
// iterate over each string until an alphabetic character is encountered
// then call str.toUpperCase() on it. Then break the interior for loop and have the
// outer for loop move to the next word.
function LetterCapitalize(str) { 
  
  var tmpStr;
  tmpStr = str.split('');
  
  for (var i=0;i<str.length;i++){
    if (IsSpace(str[i - 1])||
        i === 0){
        tmpStr[i] = str[i].toUpperCase();
        }
  }
  tmpStr = tmpStr.join('');
  return tmpStr; 
         
}

function IsSpace(char){
  if (char === ' '){
    return true;
  }
  else{
    return false;
  }
}