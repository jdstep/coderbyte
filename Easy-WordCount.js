// returns the number of words in a given string

// NOTE: Can use indexOf() and lastIndexOf() to find the difference between
// the location of the first and last times the letter comes up in a given word
// that is split into an array with an element for each letter
function WordCount(str) {
  return str.split(" ").length;     
}