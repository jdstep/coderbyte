// converts a string of binary numbers into decimal format
function BinaryConverter(str) {
	var total = 0,
		strRev = str.slice().split('').reverse();

	for (var i = 0;i<strRev.length;i++){
		if (strRev[i] === '1'){
			total += baseTwo(i);
		}
	}
	return total;
}

// returns the value of raising 2 to the given power
function baseTwo(power){
	return Math.pow(2, power);
}

console.log(BinaryConverter("100101"));
// -> 37
console.log(BinaryConverter("101"));
// -> 5