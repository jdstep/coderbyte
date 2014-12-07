// returns true if all of the alphabet characters in a string
// are the same backwards as forwards

// Thoughts:
// My code on the second attempt is much cleaner and likely much faster.
// I originally wrote this using a series of methods of splitting, joining, and reversing.
// At the time I did this, I was pair programming with a friend who challenged me to
// write the function without any methods, balancing efficiency and readability.
// I'm happy with the result and I learned a valuable lesson in when to look for
// more simple and faster ways to solve things instead of reaching into the
// method toolkit.
function Palindrome(str) { 
  var letters = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
        letters.push(str[i]);
    }
  }
  
  for (var i = 0; i < Math.floor(letters.length / 2); i++) {
    if (letters[i] !== letters[letters.length - 1 - i]) {
        return false;
    }
  }
 
  return true;         
}