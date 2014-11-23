
// returns true if the 2nd argument is greater than the 1st argument
// returns false if the 1st argument is greater than the 2nd argument
// returns the string "-1" if the two arguments are equal
function CheckNums(num1,num2) { 
  if (num1>num2){
   return false;
  }
  else if (num1<num2){
   return true;
  }
  else if (num1 == num2){
   return "-1";
  }      
}