// returns the first word with the most frequent repeats of a given string
// otherwise returns 1
function LetterCount(str){
	var mostRepeats = 0,
		mostRepeatsLoc = -1;
		currentRepeats = 0,
		words = str.slice().split(' ');

	for (var i = 0; i<words.length; i++){
		currentRepeats = FindRepeats(words[i]);
		if (currentRepeats > mostRepeats){
			mostRepeats = currentRepeats;
			mostRepeatsLoc = i;
		}
	}

	if (mostRepeats > 0){
		return words[mostRepeatsLoc];
	}
	else{
		return -1;
	}
}

function FindRepeats(word){
	var mostFreq = 1,
		currentFreq = 0;
	word = word.toLowerCase().split('').filter(IsAlpha).sort();

	for (var i = 0; i<word.length;i++){
		if (word[i] !== word[i-1]){
			if (currentFreq > mostFreq){
				mostFreq = currentFreq;
			}
			currentFreq = 1;
		}
		else{
			currentFreq++;
		}

	}
	return (mostFreq - 1);
}

function IsAlpha(letter){
	if (letter !== letter.toUpperCase() ||
		letter !== letter.toLowerCase()){
		return true;
	}
	else{
		return false;
	}
}

// console.log(LetterCount("Today is the greatest day ever!"));
// // -> greatest
// console.log(LetterCount("Dublin is in Ireland"));
// // -> -1