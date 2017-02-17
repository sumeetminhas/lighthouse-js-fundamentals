var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
console.log("Ingredients:");
var repeat = 0;
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("Ingredients:");
for (var repeat = 0; repeat < ingredients.length; repeat++) {
  console.log(ingredients[repeat]);
}
console.log("Ingredients:");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
ingredients.reverse();
console.log(ingredients);