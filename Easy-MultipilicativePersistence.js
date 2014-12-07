// returns the number of times required to multiply
// each individual integer of a given number to reach a single digit integer
function MultiplicativePersistence (num){
	return Multiply(num, 1, 0);
}

function Multiply(num, product, counter){
	if (num < 10){
		return counter;
	}
	else{
		num = num.toString().split('');
		for (var i=0;i<num.length;i++){
			product *= parseInt(num[i]);
		}
		return Multiply(product, 1, (counter+1));
	}
}

// console.log(MultiplicativePersistence(25));
// // -> 2
// console.log(MultiplicativePersistence(39));
// // -> 3
