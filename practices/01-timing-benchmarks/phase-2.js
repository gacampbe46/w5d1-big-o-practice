const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let myArr = []              // initialize empty array to store 10 increments
  let i = increment           // create a variable to store current increment

  for(j = 0; j < 10; j++){    // loop 10x
    myArr.push(addNums(i));   // push the the 'addNums' result of 'i'
    i += increment;           // add 10 to 'i'
  }
  return myArr                // return the array filled with all nums
}

// startTime = Date.now();
// console.log(addNums10(10))
// endTime = Date.now();

// console.log(`Runtime: ${endTime - startTime}ms`);

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let myArr = []
  let counter = increment
  for (let i = 0; i < 10; i++) {
    myArr.push(addManyNums(counter))
    counter += increment
  }
  return myArr
}

console.log(addManyNums10(0))

module.exports = [addNums10, addManyNums10];
