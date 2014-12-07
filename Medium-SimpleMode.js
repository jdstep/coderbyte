// returns the first appearing mode of an array
function SimpleMode(arr){
	return findMostRepeats(arr);
}

// returns which value in an array has the most number of repeats
function findMostRepeats(arr){
	var checkedNums = [],
		countRepeats = 0,
		mostRepeats = 0,
		mostRepeatsLoc = -1;

	for (var i = 0; i<arr.length;i++){
		if (isAbsent(checkedNums, arr[i])){
			checkedNums.push(arr[i]);
			countRepeats = 0;
			for (var j = i; j<arr.length;j++){
				if (arr[i] === arr[j]){
					countRepeats++
				}
			}
			if (countRepeats > mostRepeats){
				mostRepeatsLoc = i;
				mostRepeats = countRepeats;
			}
		}
	}
	return arr[mostRepeatsLoc];
}

// returns true if the given value is not present in the given array
// otherwise returns false
function isAbsent(arr, value){
	if (arr.indexOf(value) === -1){
		return true;
	}
	else{
		return false;
	}
}


// console.log(SimpleMode([5, 10, 10, 6, 5]));
// // -> 5
// console.log(SimpleMode([7, 8, 9, 9, 11, 15]));
// // -> 9
