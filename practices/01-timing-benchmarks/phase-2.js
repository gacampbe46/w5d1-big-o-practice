const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let myArr = []              // initialize empty array to store 10 increments
  let i = increment           // create a variable to store current increment
  let counter = 0             // initialize a counter to count 10x
  while (counter < 10) {      // loop 10x
    myArr.push(addNums(i));   // push the the 'addNums' result of 'i'
    i += increment;           // add 10 to 'i'
    counter++;                // increment the counter by 1
  }
  return myArr                // return the array filled with all nums
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
}

module.exports = [addNums10, addManyNums10];
