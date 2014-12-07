// given an array of numbers, return the number of integers required
// to make a consecutive array from the lowest number to the highest number

// Thoughts:
// My first ideas were overly complex involving counters and vars to keep track of various relationships.
// As with most challenges, there are more elegant solutions. This solution takes advantage of the fact
// we can quickly find the range of the array, and we can use that with the array length
// to find how many numbers are missing. 
// For example, if we have the array [1, 2, 4, 5] we know the range is 1 to 5
// and the length is 4 so there are 4 numbers. This must mean one number is missing, so we return 1.
function Consecutive(arr) { 
  var arr = arr.sort(numSort),
  	  rangeDiff = arr[arr.length - 1] - arr[0];
  
  return (rangeDiff + 1 - arr.length);
}
   
function numSort(a, b){
    return a - b;
}

// console.log(Consecutive([1, 2, 4, 5]));
// // -> 1
// console.log(Consecutive([15, 16, 20, 25]));
// // -> 7