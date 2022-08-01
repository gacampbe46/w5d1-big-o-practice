const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let myArr = []
  let i = increment
  let counter = 0
  while (counter < 10) {
    myArr.push(addNums(i));
    i += i
    counter++
  }
  // for (let i = 1; i <= 10; i += increment){
  //   myArr.push(addNums(i))
  // }
  return myArr
}

sums = addNums10(10)

console.log(sums)

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
}

module.exports = [addNums10, addManyNums10];
