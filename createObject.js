function Bird(name) {
  this.name = name; //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird('Donald');

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog('Snoopy');

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}

Bird.prototype.eat = function () {
  console.log('nom nom nom');
};

Bird.prototype.describe = function () {
  console.log('My name is ' + this.name);
};

Bird.prototype = {
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function () {
    console.log('nom nom nom');
  },
  describe: function () {
    console.log('My name is ' + this.name);
  },
};

function Bird(name) {
  this.name = name;
}

let duck = new Bird('Donald');

Bird.prototype.isPrototypeOf(duck);
// returns true

let animal = new Animal();

let duck = Object.create(Animal.prototype); // Change this line

Bird.prototype = Object.create(Animal.prototype);

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log('nom nom nom');
  },
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor; // function Animal(){...}

Bird.prototype.constructor = Bird;
duck.constructor; // function Bird(){...}

function Animal() {}
Animal.prototype.eat = function () {
  console.log('nom nom nom');
};
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.fly = function () {
  console.log("I'm flying!");
};

let duck = new Bird();
duck.eat(); // prints "nom nom nom"
duck.fly(); // prints "I'm flying!"

function Animal() {}
Animal.prototype.eat = function () {
  return 'nom nom nom';
};
function Bird() {}

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function () {
  return 'peck peck peck';
};
