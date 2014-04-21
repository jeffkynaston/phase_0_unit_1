// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Austin Bourdier
//  2.Jeff Kynaston


// 1. "YOU SIGNED... WHO?!"
var seanBean = {
  name: "Sean Bean",
  age: 35,
  quote: "The North Remembers!"
};

var paulWalker = {
  name: "Paul Walker",
  age: 36,
  quote: "Let's Ride!"
};


// 2. "Here they Come!"
var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home! Are you too good for your home?"
};

var kristenBell = {
  name: "Kristen Bell",
  age: 33,
  quote: "Do you wanna build a snowman?"
};

var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance? YEAH!"
};

var clients = [seanBean, paulWalker, adamSandler, kristenBell, jimCarrey];

// 3. "TIME IS MONEY!"

function Client(name, age, quote, comission) {
  this.name = name;
  this.age = age;
  this.quote = quote;
  this.comission = comission;
};



//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.", .10);
console.log(shooterMcGavin.constructor === Client);
console.log(shooterMcGavin.age === 48);
console.log(shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.");


// 4. "SHOW 'EM OFF!"

Client.prototype.display = function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.quote);
    console.log(this.comission);
};

shooterMcGavin.display()

// ** BONUS **

// We didn't get time to do a bunch of bonus work, but we did add a another proprety 
// to our Client object, comission, to make sure we get our cut. 


//  Your Reflection:

// I thought that this was a great challenge. It was my first introduction to Client 
// Constructors and really helped me to distinguish between them and object literals. 
// Constructors seem very similar to CLasses in Ruby; making that connection went a 
// long way to helping me understand the concept. 
//
// This was also my first introduction to using the prototype method. I looked into it
// more and it seems like a powerful method to use in JavaScript. This blog post
// http://timkadlec.com/2008/01/using-prototypes-in-javascript/ explained it really well. 
//
// Working with a partner on this (Austin) was also a great experience. We had similiar
// levels of experience with JavaScript, which made for a good dialog back and forth when
// we were figuring out the challenge. We also discovered that we had both worked at the same 
// company in SF - small world! 