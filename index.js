// Write a function that takes an integer n and turns it into the ouput. 

// Notes
// The result has to do with counting something.
// Check the tests for some extra hints...

// Examples
// mysteryFunc(521) ➞ "151211"
// mysteryFunc(5211255) ➞ "1512211225"
// mysteryFunc(513515) ➞ "151113151115"

function mysteryFunc(n) {
  let result = '', counter = 1; 
  n = n.toString()
  for(i = 0; i < n.length; i++) {
    if(n[i] == n[i+1]) counter++
    else {
      result += counter + n[i]
      counter = 1
    }
  }
  return result;
}

module.exports = mysteryFunc;