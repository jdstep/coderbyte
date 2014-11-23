
// returns true if 'a' and 'b' are separated by exactly 3 spaces in a given string
function ABCheck(str) { 
var tmpStr;
tmpStr = str.split('');
  for (var i=0;i<str.length;i++)
  {
  	if (str[i] === 'a' &&
  		str[i+4] === 'b'){
  		return true;
  	}
  }
    return false;     
}
