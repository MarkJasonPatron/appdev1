let favoriteFoods = ["Scrambled Egg", "Fried Egg", "Fried Chicken"];

favoriteFoods.push("Egg Fried Rice");
favoriteFoods.shift();

for (let food of favoriteFoods) {
  console.log(food);
}

let likedFoods = favoriteFoods.map(food => `I like ${food}`);
console.log(likedFoods);
