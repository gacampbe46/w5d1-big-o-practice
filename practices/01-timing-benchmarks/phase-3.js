const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  
  let myArr = []; // initialize empty array to store 10 increments
  let i = increment; // create a variable to store current increment
  
  for (j = 0; j < 10; j++) {
    startTime = Date.now()
    myArr.push(addNums(i)); // push the the 'addNums' result of 'i'
    i += increment; // add 10 to 'i'
    endTime = Date.now()
    console.log(`${endTime - startTime}`);
  }
  // console.log(`${endTime - startTime}`)
  return myArr;   
  
}


function addManyNums10Timing(increment) {
let myArr = []
  let counter = increment
  for (let i = 0; i < 10; i++) {
    startTime = Date.now()
    myArr.push(addManyNums(counter))
    counter += increment
    endTime = Date.now()
    console.log(`${endTime - startTime}`)
  }
  return myArr
}
// Then, add timing code



n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);
