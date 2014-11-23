
// computes the sum of all numbers from 1 to a given number
function SimpleAdding(num) { 

  var i = 1;
  var sum = 0;
  
  while (i<(num + 1)){
   sum += i;
   i++;
  }
  
  return sum; 
         
}