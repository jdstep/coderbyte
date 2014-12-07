// returns true if the number of 'x's and 'o's is the same
// in a given string
function ExOh(str) { 
  var numXs;
  var numOs;

  numXs = 0;
  numOs = 0;

  for (var i=0;i<str.length;i++){
  	if (str[i] === 'x'){
  		numXs++;
  	}
  	else if (str[i] === 'o'){
  		numOs++;
  	}
  }

  if (numXs === numOs){
  	return true;
  }
  else{
  	return false;
  }
}