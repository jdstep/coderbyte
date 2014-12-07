// returns the last third longest string in an array of strings

// Thoughts:
// This solution is longer and more robust than my previous solution. This solution
// accounts for the possibility of there being several strings in the array
// that all share the longest length. The for loop in the main function ensures
// that the last element of equal length is selected.

// This was also done during a pair programming session. I like pair programming
// because it seems to produce much better code because the details of the implementation
// are discussed and reviewed constantly. I also learn a lot in each pair programming session,
// so it is making me a better programmer too.
function ThirdGreatest(strArr) { 

  var sortedArr = strArr.sort(sortNums),
      thirdLongestLoc = sortedArr.length - 3,
      thirdLongestLength = sortedArr[thirdLongestLoc].length;
      
  
  for (var i = thirdLongestLoc + 1; i<sortedArr.length;i++){
    if (sortedArr[i].length === thirdLongestLength) {
       thirdLongestLoc = i;
    }
  }

  return sortedArr[thirdLongestLoc]; 
         
}

function sortNums(a, b){
  return a.length - b.length;
}