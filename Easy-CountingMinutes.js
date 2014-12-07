// accepts a range of time in the format 1:00pm-11:00am
// returns the total number of minutes between the two times
function CountingMinutesI(str) { 
	var times;
	var timeDiff;

	times = SplitTime(str);

  	timeDiff = FindTimeDifference(times.startTotalMin, times.endTotalMin);

  	return timeDiff;     
}

// creates an object with the beginning and ending time
function SplitTime(time){
	var splitTimes;
	var timeObj;
	var startTime;
	var endTime;

	splitTimes = time.split('-');

	startTime = splitTimes[0];
	endTime = splitTimes[1];

	timeObj = {
		startTotalMin: (GetTotalMinutes((GetHours(startTime)),
								        (GetMinutes(startTime)))),
		endTotalMin: (GetTotalMinutes((GetHours(endTime)),
							          (GetMinutes(endTime))))
	};

	return timeObj;
}

// accesses the hours of a time and returns it in 24-hour format
function GetHours(timeElement){
	var hours;

	timeElement = timeElement.split(':');

	hours = parseInt((timeElement[0]));

	if (IsPM(timeElement)){
		hours += 12;
	}

	if (hours === 12 &&
		IsPM(timeElement) === "false"){
		hours = 0;
	}

	return hours;
}

// accesses and returns the number of minutes in integer format
function GetMinutes(timeElement){

	timeElement = timeElement.split(':');

	return parseInt(timeElement[1].slice(0, 2));
}

// returns true if the given time is pm
function IsPM(timeElement){
	var meridian;

	meridian = timeElement[1][2];

	if (meridian === 'p'){
		return true;
	}
	return false;
}

// accepts the total minutes of start and end times and returns the total time difference
function FindTimeDifference(startTimeMin, endTimeMin){
	var timeDiff = 0;

	if (IsPastMidnight(startTimeMin, endTimeMin)){
		endTimeMin += 1440;
	}

	timeDiff -= endTimeMin - startTimeMin;

	return Math.abs(timeDiff);
}

// returns the time in total minutes given the hours and minutes
function GetTotalMinutes(hours, minutes){
	return (hours * 60) + minutes;
}

// returns true if the range of time extends over midnight
function IsPastMidnight(startTime, endTime){
	if (startTime > endTime){
		return true;
	}

	return false;
}