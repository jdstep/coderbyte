// given an array of numbers, retuns a new array with the following conditions:
// if two consecutive numbers are both even, insert a * between them
// if two consecutive numbers are both odd, insert a - between them
// 0 is even for this example

// Thoughts:
// This challenge was pretty straightforward. I was lucky and early on saw the idea
// to convert the number into a string so it could be interated over. After that
// it was just setting up the conditionals and helper functions.

function DashInsertII(num) { 
  var dashedArr = [],
      numString = num.toString();

  for (var i = 0;i<numString.length;i++){
    dashedArr.push(numString[i]);
    if (isEven(numString[i]) && isEven(numString[i+1])) {
        dashedArr.push('*');
    }
    else if (isOdd(numString[i]) && isOdd(numString[i+1])) {
        dashedArr.push('-');
    }
  }
  
  return dashedArr.join(''); 
}
   
function isEven(num){
  if (num === '0'){
      return false;
  }
  return (num % 2 === 0);
}

function isOdd(num){
    return (num % 2 === 1);
}

// console.log(DashInsertII([24582793]));
// // -> 2*458*27-9-3