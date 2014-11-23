
// takes input of the number of minutes
// returns the amount of time in the format hours:minutes
function TimeConvert(num) { 

  var minutes;
  var hours;
  var time;

  hours = FindHours(num);
  minutes = FindMinutes(num);
  
  time = hours + ":" + minutes;

  return time;
}

function FindMinutes(time) {
	return (time%60);
}

function FindHours(time) {
	return Math.floor(time/60);
}

