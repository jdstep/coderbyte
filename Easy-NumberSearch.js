// returns the sum of all numbers in a string
// example: "he30llo2" returns 32
function NumberAddition(str) { 
	var tmpArr = [];
	var sum;

	sum = 0;

	str = str.split('');

	for (var i=0;i<str.length;i++){
		if (IsNumber(str[i])){
			tmpArr.push(str[i]);
			if (IsNumber(str[i+1]) === false){
				tmpArr = tmpArr.join('');
				sum += parseInt(tmpArr);
				tmpArr = [];
			}
		}
	}

	return sum; 	     
}

// returns true if the given char is a number
// otherwise returns false
function IsNumber(char){
	if (isNaN(char) ||
		char === " "){
		return false;
	}
	return true;
}