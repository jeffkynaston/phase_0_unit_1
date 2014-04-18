// I worked on this challenge by myself.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Title: Rescue Mission
 // Psuedocode:
 // move down x2
 // move right x1
 // move up x2
 // move right x2
 // move down x1
 // ATTACK!!!!@#!~#~@!~@~
 
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


 // Title: Grab the Mushroom
 // Psuedocode:
 // move up x1
 // move right x1
 // move left x1
 // move up x1
 // ATTACK!!!!@#!~#~@!~@~
 
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();
 

 // Title: Drink Me
 // Psuedocode:
 // move right x1
 // ATTACK!!!!@#!~#~@!~@~
 // move right x1
 // move down x1
 // move up x1
 // move right x1
 // ATTACK!!!!@#!~#~@!~@~
 
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy(); 


// Title: Taunt the Guards
// Psuedocode:
// move right x1
// BUST DOWN THAT DOOR
// move right x1
// taunt Guard
// move left x2
// call archer to attack
// move right x1
// call archer to follow
// move right x2
// move up x1
// mote right x1
// taunt guards
// move down x1
// move right x1
// move up x1
// move right x1

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Run for it!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();


// Title: It's a Trap
// Psuedocode:
// move down 2x
// taunt guard
// move back up 2x

this.moveDown();
this.moveDown();
this.say("You're fat Ogre!")
this.moveUp();
this.moveUp();


// Title: Taunt
// Psuedocode:
// say 4 things

this.say("Hey!");
this.say("Come and get it!");
this.say("Can't Touch this!");
this.say("NA NA NA NA");


// Title: Cowardly Taunt
// Psuedocode: 
// move to middle
// taunt guards
// move between towers

this.moveXY(54, 26);
this.say("Come and get it!");
this.moveXY(70, 10);


// Title: Commanding Followers
// Psuedocode: 
// tell soldiers to follow
// move down
// tell soldiers to attack

this.say("Follow me soldiers, to glory!");
this.moveXY(62, 45);
this.say("Attack those nasty ogres!");


// Title: Mobile Artillery
// Psuedocode:
// move into range
// attack once
// fire closer for second shot on ogre
// repeat

this.moveXY(39, 39);  
this.attackXY(48, 65);
this.attackXY(43, 50); 

this.moveXY(48, 43);  
this.attackXY(70, 56);
this.attackXY(58, 49); 


// Reflection:
// Write your reflection here.
	
// Question 1: 'this' is referring to the object that the function
// or method is being called on. 
// Question 2: The () are required syntax when defining or calling
// a function; any parameters that are used by the function go between
// these parentheses, separated by commas. If there are no parameters,
// an empty set of parentheses is still requireed.
// Question 3: Semi-colons are statement separators in JavaScript. 
// Although line breaks are also statement separators, it is best 
// practice to always use a semi-colon so that you retain these 
// statement separators when minifying your .js files.

// Overall, I liked this introduction to Javascript. Coding as part
// of the game was enjoyable; the style reminded me of real-
// time strategy games like Age of Empires. 
// The site was a little buggy for me, however, which was slightly frustrating.
// It froze up on me a handfull of times requiring me to
// open a new window and repeat a level or two. 

// Despite that, I felt it was a great learning tool. I especially liked that 
// you could view the properties of objects if you moused-over them
// in the code; this feature helped me to understand the object-
// oriented nature of JavaScript. It was also great practice with 
// calling functions and passing parameters to them; the reptititon 
// certainly helped me to memorize JavaScript syntax. 

// The debate on semi-colons in JavaScript seems interesting, so I read
// up on that a little bit and found a couple good resources for when to
// use, and when not to use semi-colons. 
// http://www.codecademy.com/blog/78-your-guide-to-semicolons-in-javascript
// http://mislav.uniqpath.com/2010/05/semicolons/

