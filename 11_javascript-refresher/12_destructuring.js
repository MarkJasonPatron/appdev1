const person = {
  name: "Mark",
  age: 20
};

const hobbies = ["reading", "playing"];

// Object destructuring
const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

// Array destructuring
const [hobby1, hobby2] = hobbies;
console.log("Hobbies:", hobby1, hobby2);

// Destructuring in function parameters
function printName({ name }) {
  console.log("Name from function:", name);
}

printName(person);