// returns the number of times required to add all the indivudal numbers
// in an integer until the sum is less than 10
function AdditivePersistence(num){
	return GetSumOfNum(num, 0, 0);
}

// helper function for AdditivePersistence. Does the actual calculation.
// It's good to pass in 0 as the sum here during the recursive call
// instead of declaring a var sum = 0 everytime, as I did initially.
//
// I struggled with this challenge for awhile to figure out how to return
// the counter variable after multiple recursive loops.
// Returning the result of calling the recursive function
// then having the base case return the counter gives the correct answer.
function GetSumOfNum(num, counter, sum){
	if (num < 10){
		return counter;
	}
	else{
		num = num.toString().split('');
		for (var i=0;i<num.length;i++){
			sum += parseInt(num[i]);
		}
		return GetSumOfNum(sum, (counter+1), 0);
	}	
}

console.log(AdditivePersistence(19));