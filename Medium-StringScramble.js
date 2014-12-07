// returns true if the given strings can be rearranged to form each other either partially or wholly
// otherwise returns false
function StringScramble(str1, str2){
	var longWord,
		shortWord,
		letterLoc;

	if (str1.length > str2.length){
		longWord = str1.slice().split('');
		shortWord = str2.slice().split('');
	}
	else{
		longWord = str2.slice().split('');
		shortWord = str1.slice().split('');
	}

	for (var i = 0;i < shortWord.length;i++){
		letterLoc = -1;
		for (var j = 0; j< longWord.length;j++){
			if (shortWord[i] === longWord[j]){
				letterLoc = j;
			}
		}
		if (letterLoc !== -1){
			longWord.splice(j, 1);
		}
		else{
			return false;
		}
	}
	return true;
}


// console.log(StringScramble("highfive", "rocketship"));
// // -> false
// console.log(StringScramble("rkqodlw", "world"));
// // -> true