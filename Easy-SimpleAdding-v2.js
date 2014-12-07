
// computes the sum of all numbers from 1 to a given number
function SimpleAdding(num) { 

  var total = 0,
      count = 0;
  
  while (count < num){
       count++;
       total += count;
  }
   
  return total;
}