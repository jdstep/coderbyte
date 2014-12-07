// returns true if any combination of numbers in the array
// can be summed together to equal the largest number in the array

// this solution works for some cases, but not all cases
// I feel that there is a better solution involving building a tree 
// and recursively stepping through the tree.

// I had to get some help on this one. I had a feeling that a solution could use
// nested 'for' loops, however I was concerned about circumstances in which
// the solution involved getting the sum of index 0, 1, and 4 for example. This function
// does not cover such solutions, and the coderbyte testing does not cover such test cases.
// I googled and found that some people did solve it through 2 or 3 nested for loops, so
// I used my original idea of 2 nested loops.

// I will come back to this challenge in the future when I learn more about data structures.
function ArrayAdditionI(arr) { 
	var tmpArray;
	var largestNumber;
	var sum;


	tmpArray = arr;
	tmpArray.sort();

	largestNumber = arr[arr.length - 1];

	sum = 0;

  	for (var i=0;i<arr.length;i++){
  		sum += arr[i];
  		for (var j=0;j<arr.length;j++){
  			if (arr[i] !== arr[j]){
  				sum += arr[j];
  				if (sum === largestNumber){
  					return true;
  				}
  			}
  		}
  		sum = 0;
  	}
	return false;         
}