// takes an unsorted array of only letters
// returns the array sorted alphabetically

// thoughts:
// By the second attempt I learned it was possible to call multiple methods in a row.
// This helps make the code shorter, though I wonder if it is only readable to
// people with JS experience.
function AlphabetSoup(str) { 
  return str.split('').sort().join('');    
}