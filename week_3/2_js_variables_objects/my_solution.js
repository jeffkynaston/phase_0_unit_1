// I completed thsi challenge by myself. 

// Pseudocode
// define variable secretNumber to be any number
// actually, define secretNumber to be 7
// define password to be any string
// actually, define password to be 'just open the door'
// define allowedIn to be false
// define an empty array called members
// add john to beginning of array
// add 3 more items to array, including 'Mary' as the fourth
// __________________________________________
// Write your code below.

var secretNumber = 5253444
var secretNumber = 7
var password = "sekrit"
var password = "just open the door"
var allowedIn = false
var members = []
members.unshift("John")
members.push("2")
members.push("3")
members.push("Mary")

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7
var password = "just open the door"
var allowedIn = false
var members = ["John", "2", "3", "Mary"]


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// For this challenge, I navigated to my local 2_js_variables_objects
// directory in a terminal and used node.js to run the my_solutions.js
// file, then addressed the errors as they came up. Because the intitial
// tests were not as specific, I ended up writing more code than I needed
// and my first solution wasn't DRY. This could possibly be solved by
// changing the order of tests in the Driver code - i.e. checking for 
// the correct secretNumber '7' before checking that the variable is 
// object type number. 

// I did feel like I achieved the learning objectives during this 
// challenge. It gave me practice with a couple different methods
// that are available for adding items to an array, and with assigning
// different types of objects to variables. 

// The challenge definitely helped me understand TDD, and I can see the
// benefits of TDD when adding and changing code. Technically, this isn't
// our first intro to TDD - we used it in the phase0 prep exercises
// that we did through socrates, but you guys knew that. Nothing about the
// challenge was tedious, and it was much less buggy than codecombat. 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

