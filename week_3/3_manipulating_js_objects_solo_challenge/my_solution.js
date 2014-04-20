// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.

Pseudocode: 
define adam to be an empty object

2. Give adam a name property with the value "Adam".

Pseudocode:
update adam object's name property to value "Adam"

3. Add a spouse property to terah and assign it the value of adam.

Pseudocode:
update terah object's spouse property to value "Adam"

4. Change the value of the terah weight property to 125.

Pseudocode:
update terah object's weight property to value 125

5. Remove the eyeColor property from terah.

Pseudocode: 
delete terah object's eyeColor property

6. Add a spouse property to adam and assign it the value of terah.

Pseudocode:
update adam object's spouse property to terah

7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties

Pseudocode:
assign children variable to be an empty object
update terah object's children property to be the children variable

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".

Pseudocode:
assign carson variable to an object with property name: "name" and value: "Carson"
update terah object's children property's carson property to be the carson variable

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".

Pseudocode:
assign carter variable to an object with property name: "name" and value: "Carter"
update terah object's children property's carter property to be the carter variable

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".

Pseudocode:
assign colton variable to an object with property name: "name" and value: "Colton"
update terah object's children property's colton property to be the colton variable

11. Add a children property to adam and assign it the value of terah children.

Pseudocode:
assign adam object's children property to be the terah object's children property

*/

// __________________________________________
// Write your code below.

// Initial Solution

var adam = {
};

adam.name = "Adam";

terah.spouse = adam;

terah.weight = 125;

delete terah.eyeColor;

adam.spouse = terah;

var children = {
};
terah.children = children;

var carson = {
  name: "Carson"
};
terah.children.carson = carson

var carter = {
  name: "Carter"
};
terah.children.carter = carter

var colton = {
  name: "Colton"
};
terah.children.colton = colton

adam.children = terah.children


// Refactored Solution
// Not much changed in my refactored solution besides whitespace. 
// This version is easier to read, but takes the same amount of steps.
// I thought there would be a way to accomplish steps 7-10 in one step each, but
// could not figure out the correct syntax.  


var adam = {};
adam.name = "Adam";
terah.spouse = adam;
terah.weight = 125;
delete terah.eyeColor;
adam.spouse = terah;
var children = {};
terah.children = children;
var carson = {name: "Carson"};
terah.children.carson = carson
var carter = {name: "Carter"};
terah.children.carter = carter
var colton = {name: "Colton"};
terah.children.colton = colton
adam.children = terah.children


// __________________________________________
// Reflection: Use the reflection guidelines
// 
// I thought that this challenge helped me most with pseudocode. When the directions were
// short and easy, the seudocode step felt a little repetitive. But once the directions 
// became more complicated, the benefits of pseudocoding were obvious. I began to think through
// the algorithm in the pseudocode stage, and write the grammer in such an order that it 
// translated directly into code. I'm seeing some benefit to refactoring as well - even though I 
// didn't eliminate any steps with my refactoring, I was able to make my code more succinct and
// more readable.
//
// My strategy for this challenge was to solve each part based off the instructions, and use 
// the Driver Code tests as a check (as opposed to the last challenge, where the errors 
// from the driver code were our instructions). Following each step literally, I ran 
// into some problems with parts 7 - 10. They asked us to add properties and assign these 
// properties values that were objects. I wanted to do this in 1 step, but ended up having to
// define the object and assign it to a variable first, and then assign that variable to the property. 
// 
// The challenge did help to solidify the learning competencies - it provided good repitition
// defining local local variables and gave me a good amount of practice creating, adding, and 
// deleting properties from objects. 


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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)