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

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
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

// added comission property

//  Your Reflection: