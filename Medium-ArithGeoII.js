// returns if the given number array is in a geometric or arithmetic sequence
// if the array is in neither sequence, returns -1
function ArithGeoII(arr){
	var difference,
		quotient,
		isArith = true;
		isGeo = true;

	difference = arr[1] - arr[0];
	quotient = arr[1] / arr[0];

	for (var i = 1;i<arr.length;i++){
		if ((arr[i] - arr[i - 1]) !== difference){
			isArith = false;
		}
		if ((arr[i] / arr[i - 1]) !== quotient){
			isGeo = false;
		}
	}

	if (isArith){
		return "Arithmetic";
	}
	else if (isGeo){
		return "Geometric";
	}
	else{
		return -1;
	}
}