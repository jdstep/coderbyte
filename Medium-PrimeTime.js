// returns true if a given number is a prime number
// otherwise returns false
function PrimeTime(num){
	var numSqrt = Math.sqrt(num);

	for (var i = 2;i<numSqrt;i++){
		if (num % i === 0){
			return false;
		}
	}

	return true;
}

// console.log(PrimeTime(5));
// // -> true
// console.log(PrimeTime(16));
// // -> false
