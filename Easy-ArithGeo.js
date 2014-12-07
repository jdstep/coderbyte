// takes an array of numbers
// if the numbers follow an arithmetic sequence of increasing by a constant number
// then it returns the string "Arithmetic"
// if the numbers follow a geometric sequence of increasing by a constant multiplier
// then it returns the string "Geomtric"
// otherwise it returns -1
function ArithGeo(arr) { 
	var difference;
	var quotient;

	var isArith;
	var isGeo;

	isArith = "true";
	isGeo = "true";

	difference = arr[1] - arr[0];
	quotient = arr[1] / arr[0];

	for (var i=1;i<arr.length;i++){
		if ((arr[i] - arr[i - 1]) !== difference){
			isArith = "false";
		}
		if ((arr[i] / arr[i - 1]) !== quotient){
			isGeo = "false"
		}
	}

	if (isArith === "true"){
		return "Arithmetic";
	}
	else if (isGeo === "true"){
		return "Geometric";
	}
	else{
		return -1;
	}
}