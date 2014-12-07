// returns the first word with the most repeated letters in a given string
// otherwise returns -1 if there are no words with repeated letters
function LetterCountI(str) { 
	var wordArr = str.split(' ');
	    mostRepeats = 0,
	    mostRepeatsLoc = -1,
	    wordRepeats = 0;

	for (var i=0;i<wordArr.length;i++){
		wordRepeats = numRepeats(wordArr[i]);
		if (wordRepeats > mostRepeats){
			mostRepeats = wordRepeats;
			mostRepeatsLoc = i;
		}
	}

	if (mostRepeats === 0){
		return -1;
	}
	else{
	return wordArr[mostRepeatsLoc];
	}
}

// returns the total number of character repeats in a given word
function numRepeats(word){
	var checkedLetters = [],
		numRepeats = 0;
	for (var i=0;i<word.length;i++){
		if (checkedLetters.indexOf(word[i]) === -1){
			checkedLetters.push(word[i]);
			for (var j=(i+1);j<word.length;j++){
				if (word[i] === word[j]){
					numRepeats++;
				}
			}
		}
	}
	return numRepeats;
}

// console.log(LetterCountI("This is the greatest day ever!"));
// // -> greatest
// console.log(LetterCountI("Let's go travel"));
// // -> -1