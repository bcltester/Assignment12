// // STEP 1
// function Cat(name, color, breed) {
//     this._name = name;
//     this._color = color;
//     this._breed = breed;
//     console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
// }

// const Dog = function(name, color, breed) {
//     this._name = name;
//     this._color = color;
//     this._breed = breed;
//     console.log(`${this._name} the ${this._color} ${this._breed} has been created.`);
// }

// // STEP 2
// const cat1 = new Cat('Mongo', 'orange', 'tabby');
// const dog1 = new Dog('Lassie', 'yellow', 'retriever');

// STEP 3
// function Animal() {

// }

// Animal.prototype.init = function() {
//     console.log('The Animal has been created');
// }

// const an0 = new Animal();
// an0.init();

// STEP 4
// function Animal(name) {
//     this.init = function(){
//         console.log(`${name} has been created.`);
//     }
//     this.init();
// }

// const an1 = new Animal('Gerry');

// STEP 5

// const Animal = function(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
// }

// STEP 6

// const Animal = function(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
// }

// const an1 = new Animal('bird', 'robin', 'red', 10, 40);
// console.log(an1);
// for (let property in an1) {
//     console.log(property);
// }

// STEP 7

// const Animal = function(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
//     this.speak = function() {
//         if (this._type === 'dog') {
//             return `The ${this._color} dog is barking!`;
//         } else if (this._type === 'cat') {
//             return `The ${this._color} cat is meowing!`;
//         } else {
//             return `The animal is making a sound.`;
//         }
//     }
//     console.log(this.speak());
// }

// const dog = new Animal('dog','poodle','white',30, 120);
// const cat = new Animal('cat','siamese','brown',50, 100);
// const snake = new Animal('snake','python','yellow',5, 400);


// STEP 8

// const Animal = function(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() {
//         if (_type === 'dog') {
//             return 'dog';
//         } else if (_type === 'cat') {
//             return 'cat';
//         } else {
//             return 'creature';
//         }     
//     }
//     let speak = function() {
//         return `The ${checkType()} has made a noise!`;
//     }
//     console.log(speak());
// }

// const dog = new Animal('dog','poodle','white',30, 120);
// const cat = new Animal('cat','siamese','brown',50, 100);
// const snake = new Animal('snake','python','yellow',5, 400);

// STEP 9

String.prototype.findWords = function(paragraph) {
    const regex = new RegExp(`${this}`, 'g');
    let arr = paragraph.match(regex);
    console.log(`${this} was found ${arr.length} times`);
}

'hel'.findWords('Shelly found seashells by the seashore. Helvetica is the font that is most whelcome.');