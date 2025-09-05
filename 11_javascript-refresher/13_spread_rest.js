const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log("New Numbers:", newNumbers);

const user = { name: "Mark", age: 20 };
const extendedUser = { ...user, isStudent: true };
console.log("Extended User:", extendedUser);

// Rest operator
function sumAll(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sumAll(1, 2, 3, 4, 5));
