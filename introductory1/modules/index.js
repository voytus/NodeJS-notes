const Animal = require('./Animal'); // use the 'require' keyword to import a module that has been exported,
//  we don't need the file type .js

// if only importing a function from a module, we must specify curly braces  around it
const { isEven } = require('./helpers');
// CURLY BRACKETS ARROUND
// ALTERNATIVE NOT TO USE A CURLY BRACKETS
// simmilar to static import in Java
// const isEven = require('./helpers');
// console.log(isEven.isEven(101));


const helpers = require('./helpers');

//create new animal and printing to the console
const animal = new Animal("Duck");
console.log(animal);

console.log(isEven(30));

// CommonJS modules are part of Node js, they are for modularising our code
// - i.e., separating it into separate files

