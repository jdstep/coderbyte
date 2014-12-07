// divides two numbers and returns a string with properly formatted commas
function DivisionStringified(num1,num2) { 
	var quotient;
	var numString;
	var formattedString;

	quotient = Math.round(num1 / num2);

	numString = quotient.toString();

	numString = numString.split('');

	formattedString = [];
	
	for (var i=0; i<numString.length; i++){

		formattedString.push(numString[i]);

		if (((ElementsLeft(i, numString)) %3 === 0) 
			  && i !== (numString.length - 1)){

			formattedString.push(',');

		}
	}

	formattedString = formattedString.join('');

	return formattedString;      
}

// returns the number of elements left in the array
function ElementsLeft(i, array){
	return ((array.length - 1) - i);
}

console.log(DivisionStringified(123456789, 10000));
