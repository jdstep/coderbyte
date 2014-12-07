// divides two numbers and returns a string with properly formatted commas

// Thoughts:
//
// This is actually just a quick clean-up of the code for clarity. I like the original solution.

function DivisionStringified(num1,num2) { 
	var quotient,
	    numString,
		formattedString = [];

	quotient = Math.round(num1 / num2);
	numString = quotient.toString().split('');
	
	for (var i = 0; i < numString.length; i++){

		formattedString.push(numString[i]);

		if (((ElementsLeft(i, numString.length)) % 3 === 0) 
			  && i !== (numString.length - 1)){
			formattedString.push(',');
		}
	}

	return formattedString.join('');  
}

// returns the number of elements left in the array
function ElementsLeft(i, arrayLength){
	return ((arrayLength - 1) - i);
}

console.log(DivisionStringified(123456789, 10000));
// -> 12,346
console.log(DivisionStringified(83741023, 3));
// -> 27,913,674