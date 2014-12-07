// returns true if the given string is a palindrome
// only counts letters when checking if it is a palindrome
function PalindromeTwo(str){
	var onlyLetters = []
		onlyLettersRev = [];

	for (var i = 0;i < str.length; i++){
		if (isLetter(str[i])){
			onlyLetters.push(str[i].toUpperCase());
		}
	}

	onlyLettersRev = onlyLetters.slice();
	onlyLettersRev = onlyLettersRev.reverse();

	return (onlyLetters.join('') === onlyLettersRev.join(''));
}

function isLetter(element){
	if (element !== undefined &&
		(element.toUpperCase() !== element ||
		element.toLowerCase() !== element)){
		return true;
	}
	else{
	return false;
	}
}

console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));
// -> true
console.log(PalindromeTwo("cat"));
// -> false