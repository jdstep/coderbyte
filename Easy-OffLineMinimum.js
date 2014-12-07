// returns a string of integers separated by commas
// the integers are the lowest numbers in a given array up to the point of an 'E' char in the array
// explanation from coderbyte:
// For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
//              then your program should return 4,1,5. 
function OffLineMinimum(strArr){
	var lowNumArr = [],
		highestNum,
	    lowestNum;

	highestNum = filter(function(element){return (element !== 'E');}, strArr);
	highestNum = highestNum.sort(sortNums)[0];

	for (var i=0;i<strArr.length;i++){
		if (strArr[i] === 'E'){
			lowestNum = (highestNum + 1);
			for (var j=0;j<i;j++){
				if (strArr[j] < lowestNum &&
					isAbsent(strArr[j], lowNumArr) &&
					strArr[j] !== 'E'){
					lowestNum = strArr[j];
				}
			}
			lowNumArr.push(lowestNum);
		}
	}

	return lowNumArr.join();
}

// returns true if a given value is present in an array or string
function isAbsent(value, array){
	if (array.indexOf(value) === -1){
		return true;
	}
	else{
		return false;
	}
}

// filters a given array based on a given predicate
function filter(pred, array){
	var newArray = [];

	for (var i = 0;i<array.length;i++){
		if (pred(array[i])){
			newArray.push(array[i]);
		}
	}

	return newArray;
}

// sorts an array of integers in descending order
// usage: numArray.sort(sortNums)
function sortNums(a, b){
	return b - a;
}

console.log(OffLineMinimum(["1","2","E","E","3"]));
// -> "1,2"

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));
// -> "4,1,5"