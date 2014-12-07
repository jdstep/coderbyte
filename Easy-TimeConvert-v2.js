
// takes input of the number of minutes
// returns the amount of time in the format hours:minutes
function TimeConvert(num) { 
  var hours,
      minutes;
  
  hours = Math.floor(num/60);
  minutes = num % 60;
  return hours + ":" + minutes; 
         
}