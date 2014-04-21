// I worked with: Matthew Kuzio on this challenge

// Your mission description:
// 
// 
// 

// Pseudocode
// Obective: Navigate a maze
// Will need an object that's a character
// properties: name, gender, location(x,y)
// will need to define methods to move location(x,y)


// Initial Code

function Hero(name, gender, locationX, locationY) {
  this.name = name;
  this.gender = gender;
  this.locationX = locationX;
  this.locationY = locationY;
  this.moveUp = function() {
    this.locationY += 10;
  };
  this.moveDown = function() {
    this.locationY -= 10;
  };
  this.moveLeft = function() {
    this.locationX -= 10;
  };
  this.moveRight = function() {
    this.locationX += 10;
  };
  this.display = function () {
    console.log(this.name);
    console.log(this.gender);
    console.log(this.locationX);
    console.log(this.locationY);
  };
};

var batman = new Hero("Batman", "Male", 0, 0)

batman.display()
batman.moveUp()
batman.display()


// Refactored Code

// Our code was pretty DRY after the first go-around. The variable names are short and 
// descriptive and the code is easily readible. We used short-hand notation, where possible, 
// such as using += 10 instead of locationX = LocationX + 10. In the move functions, I tried 
// taking out the 'this' before referencing locationY and locationX variabls, but it broke the
// functions.  One possibility that Matthew and I discussed was combining location into 
// just one variable with (x,y) components, but separating it into locationX and locationY
// made more sense to both of us. 

// Reflection
// 
// Although we didn't get a chance to try out the bonus section, Matthew and I did spend
// extra time looking into an issue that he had run into while pairing with another student.
// Our goal was to make instances of our Hero object automatically populate into an array
// when they were declared. We made a function that used prompt() to get input
// from the user, declare a new instance of the Hero object using that input, then 
// added the new instance into an array. We never got it to work, but it was fun talking it out 
// and trying a bunch of different things. 
// 
// This was a great challenge - it really helped me to understand the difference between
// object literals and client constructors. My first introduction to client constructors
// was in my GPS, and our work on this challenge solidified the concept and taught me
// some new syntax as well. Before, I had declared the initial function with its properties
// and then used the prototype method to add methods. Matthew knew a different way of doing
// it, including the object's methods in the initial declaration. 
// 
// Even though our Pseudocode wasn't very thorough, I enjoyed thinking about and planning 
// out the game. I've always had a little gamer in me, and I think that working on games 
// could be a great fit for me after DevBootcamp. Not only would they be enjoyable to work
// on, but they could potentially provide more diverse coding experience than working on
// a single product. 
//
// Finally, I think this challenge also helped me understand the DOM. Creating my own 
// JavaScript objects was a time-consuming ordeal. If I had to define each object that I wanted
// to manipulate on my website, it could add a lot of deveopment time. It is Very nice that's done
// for us. 