// applies a given key n to a string and increases all letters by n places
// returns the encoded string
function CaesarCipher(str, n){
	var secretMessage = [];

	for (var i = 0; i<str.length; i++){
		if (isAlpha(str[i])){
		 	secretMessage.push(applyKey(str[i], n));
		}
		else{
			secretMessage.push(str[i]);
		}
	}

	return secretMessage.join('');
}

// returns true if given element is a letter
// otherwise returns false
function isAlpha(element) {
	var charNum = element.charCodeAt();

	if ((charNum >= 65 && charNum <= 90) ||
		(charNum >= 97 && charNum <= 122)){
		return true;
	}
	else{
		return false;
	}
}

// applies a given key to a letter by increasing the letter by the given number of places
// in the alphabet
// if the resulting letter is above z, the answer loops back around to a
function applyKey(letter, key){
	var charNum = letter.charCodeAt();

	charNum += (key % 26);

	if (isAlpha(String.fromCharCode(charNum))){
		return String.fromCharCode(charNum);
	}
	else{
		charNum -= 26;
		return String.fromCharCode(charNum);
	}
}


// console.log(CaesarCipher("Hello!", 1));
// // -> Ifmmp!
// console.log(CaesarCipher("Hello!", 27));
// // -> Ifmmp!
// console.log(CaesarCipher("All you need is love!", 10))
// // -> Kvv iye xoon sc vyfo!