function DashInsert(num) { 
	var result;

	num = num.toString();

	num = num.split('');

	result = AddInArray("-", IsThisAndNextOdd, num);

	result = result.join('');

	return result;         
}

// adds a given symbol between two array elements given a predicate condition

// I made this function for practice writing a generic procedure, and also
// because I think this pattern has come up before in coderbyte challenges.
// I may be able to re-use this code in later challenges.
function AddInArray(symbol, predicate, array){
	var newArr = [];

	for (var i=0;i<array.length;i++){
		newArr.push(array[i]);

		if (predicate(array, i)){
			newArr.push(symbol);
		}
		
	}

	return newArr;
}

// returns true if the current array element and the next are both odd
//
// this could be another generic procedure
function IsThisAndNextOdd(array, i){
	if (IsOdd(array[i]) && IsOdd(array[i+1])){
		return true;
	}
	return false;
}

// returns true if a given number is odd
function IsOdd(num){
	if (num % 2 == 1){
		return true;
	}
	return false;
}