// returns the second lowest and second greatest numbers in array
// separated by a space
function SecondGreatLow(arr) { 
	var stringToPrint;
	var uniqueNums;

	uniqueNums = [];

 	arr = arr.sort(SortNumbers);

 	for (var i=0;i<arr.length;i++){
 		if ((uniqueNums.indexOf(arr[i])) === -1){
			uniqueNums.push(arr[i]);
		}
 	}

 	stringToPrint = uniqueNums[1] + " " + uniqueNums[uniqueNums.length - 2];

  	return stringToPrint;  
}

function SortNumbers(a, b) {
	return (a - b);
}


