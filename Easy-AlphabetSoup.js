// takes an unsorted array of only letters
// returns the array sorted alphabetically
function AlphabetSoup(str) { 
	var tmpStr;
  tmpStr = str.split('');
  tmpStr = tmpStr.sort();
  tmpStr = tmpStr.join('');
  return tmpStr;          
}