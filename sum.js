// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command line arguments
const args = process.argv.slice(2); //1,2,3,4,5
console.log('args', args); // <= validate
// Edge case: Ensure there are at least 2 arguments
if (args.length < 2) {
  console.log(`Error, please enter at least 2 arguments`);
  process.exit(1);
}

// declare an accumulator
let total = 0;

// we need to loop through the arguments
for (let arg of args) {
  // Edge case: If any argument is not a whole number, skip it.
  // arg % 1 === 0
  // math.floor
  // Number.isInteger

  const convertedNum = Number(arg);

  if (Number.isInteger(convertedNum)) {
    // add up the arguments
    // typecast into a number
    total += convertedNum; // total = total + arg
  }
  // Edge case: If any argument is not a number, output an error message
  if (isNaN(convertedNum)) {
    console.log(`Error, please enter only numbers`);
    // return;
    process.exit(1);
  } 
    console.log('arg:', arg, 'total:', total, 'type:', typeof convertedNum);
  
}

// display the total
console.log('Total:', total);
