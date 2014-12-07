
// accepts a range of time in the format 1:00pm-11:00am
// returns the total number of minutes between the two times

// Thoughts:
// The original version of this function was just after I came out of Scheme
// and was very caught up in the idea of constructors and selectors for data types.
// My original idea / challenge for myself for this function was to create a sort of
// generic function for finding minutes that could be largely be applied to
// times formatted in different ways. I think my previous solution is sort of halfway there
// and shows I need more experience to get the ideas of constructing functional programs right.
//
// This version was done during a pair programming session with a friend. It took longer,
// and he challenged me to find more efficient ways of writing the coding and implementing
// different parts. I'm happy with this solution for its readability, although I would
// have liked to add a few more functions that describe what exactly is happening.
function CountingMinutesI(str) { 

  var splitTime,
      startTime,
      endTime,
      timeDiff;
  
  splitTime = str.split('-');
  
  startTime = splitTime[0];
  endTime = splitTime[1];
  
  timeDiff = findMinutes(endTime) - findMinutes(startTime);
  
  if (timeDiff < 0) {
      timeDiff += (24 * 60);
  }
 
  return timeDiff;        
}

function findMinutes(time) {
  var separateHoursMins = time.split(':'),
      hours,
      minutes,
      total;
  
  hours = parseInt(separateHoursMins[0]);
  
  minutes = parseInt(separateHoursMins[1][0] + 
                     separateHoursMins[1][1]);
  
 
  total = (hours * 60) + minutes;
  
  if (separateHoursMins[1][2] === 'p') {
     total += (12 * 60); 
  }
  
  
  return total;
}