// returns the nth prime number starting from 2
function PrimeMover(num){
	var currentPrime,
		counterPrime = 0,
		i = 2;

	while (num !== counterPrime){
		if (IsPrime(i)){
			currentPrime = i;
			counterPrime++;
		}
		i++;
	}
	return currentPrime;
}

function IsPrime(num){
	for (var i=2; i<num; i++){
		if (num % i === 0){
			return false;
		}
	}
	return true;
}

// console.log(PrimeMover(50));
// // -> 229
// console.log(PrimeMover(4));
// // -> 7