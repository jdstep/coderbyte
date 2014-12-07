// returns the third longest string in an array of strings
function ThirdGreatest (strArr){
	var longestWord;

	strArr = strArr.sort(sortByLength);

	longestWord = strArr[2];

	return longestWord;
}

// returns an array sorted in descending order by string length
// usage: strArr.sort(sortByLength)
function sortByLength(a, b){
	return b.length - a.length;
}