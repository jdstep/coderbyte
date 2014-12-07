// takes in a sorted array
// returns 1 if the mode equals the mean
// otherwise returns 0
function MeanMode(arr) { 
  	var mean;
  	var mode;

  	arr = arr.sort(SortNumbers);

  	mean = FindMean(arr);

 	mode = FindMode(arr);

 	if (mean === mode){
 		return 1;
 	}

	return 0; 
}

// finds the mean in a given array
function FindMean(arr){
	var sum = arr.reduce(Sum);

	return (sum / arr.length);
}

function Sum(a, b){
	return a + b;
}

// finds the mode in a given sorted array
// TODO: fix this so it actually finds the mode. Currently it finds the median
// idea: create a function that creates an object called mostCommon
// mostCommon.value stores the currently mostly common value
// mostCommon.counter stores the number of times it appears (initially at 0)
// SORT the array then step through at each step
// also have a variable or object that checks the current number or letter we are looking at
// compare the mostCommon to the current char at the end of the sequence (do i+1 for this)
// if the current char is greater, set mostCommon = current char object counter 
function FindMode(arr){
	var mode = arr[Math.ceil(arr.length / 2)];

	return mode;
}

// numeric sort function retrieved from StackOverflow
// usage: myArr.sort(SortNumbers);
//
// works because the sort method in JavaScript 
// returns x > 0 if the two values need to be reversed
// returns x = 0 if the two values are the same
// returns x < 0 if the two values are in the correct order
function SortNumbers(a, b) {
  return (a - b);
}