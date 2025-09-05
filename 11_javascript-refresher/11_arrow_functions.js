// Traditional to arrow function

// One parameter
const greet = name => "Hello, " + name;

// One parameter, implicit return
const square = n => n * n;

// No parameters
const sayHi = () => {
  console.log("Hi!");
};

console.log(greet("Mark"));
console.log(square(4));
sayHi();
