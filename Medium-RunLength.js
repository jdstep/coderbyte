// returns a string of the compressed run length 
// of each letter concurrently in a string
// for example, the word "hello" returns "1h1e2l1o"
function RunLength(str){
	var shortArray = [],
		counter = 1;

	for (var i = 0;i<str.length;i++){
		if (str[i] === str[i + 1]){
			counter++;
		}
		else{
			shortArray.push(counter);
			shortArray.push(str[i]);
			counter = 1;
		}
	}

	return shortArray.join('');
}

console.log(RunLength("wwwtlllw"));
// -> "3w1t3l1w"
console.log(RunLength("coolthree"));
// -> "1c2o1l1t1h1r2e"