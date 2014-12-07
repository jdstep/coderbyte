// returns the greatest commmon factor of two given numbers
function Division(num1, num2){
	var gcf = 1;

	for (var i = 1; i<(num2 + 1);i++){
		if (num1 % i === 0 &&
			num2 % i === 0){
			gcf = i;
		}
	}

	return gcf;
}

// console.log(Division(20, 10));
// // -> 10
// console.log(Division(36, 54));
// // -> 18