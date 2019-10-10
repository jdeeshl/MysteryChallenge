// Write a function that takes an integer n and turns it into the ouput. 

// Notes
// The result has to do with counting something.
// Check the tests for some extra hints...

// Examples
// mysteryFunc(521) ➞ "151211"
// mysteryFunc(5211255) ➞ "1512211225"
// mysteryFunc(513515) ➞ "151113151115"

function mysteryFunc(n) {
  let result = '';
  // Write your code here
  const string = n.toString();
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i+1] && string[i] === string[i+1]) count++;
    else {
      count = count.toString();
      result += count;
      result += string[i];
      count = 1;
    }
  }
  return result;
  
}

module.exports = mysteryFunc;