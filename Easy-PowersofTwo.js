// returns true if a given number is the product of two
function PowersofTwo(num){
	return IfPower(num, 2, 2);
}

// returns true if the given number is a power of a given number
// usage: IfPower(num, power, power)
// example: IfPower(16, 2, 2) checks if 16 is a power of 2
function IfPower(num, product, power){
	if (product > num){
		return "false";
	}
	else if (product === num){
		return "true";
	}
	else{
		return IfPower(num, (product * power), power);
	}
}