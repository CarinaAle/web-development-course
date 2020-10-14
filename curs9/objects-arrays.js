//Arrays
var numbers = [-2, 10, 2, 4, -6, 3];
console.log(numbers);

function sumPozitive(numbers) {
  var positiveArray = numbers.filter(function (numbers) {
    return numbers > 0;
  });
  var sum = 0;
  positiveArray.forEach(function (numbers) {
    sum += numbers;
  });
  return sum;
}
var numbers = [-2, 10, 2, 4, -6, 3];
console.log(sumPozitive(numbers));

//Objects
var animal = {
  type: "lion",
  name: "Jonny",
  gut: ["antelope", "buffalo"],
  food: "squirrel",
  // here you need to give a parameter to this function and inside the function you need to push into the gut array
  // the food that you've given as a parameter
  eat: function () {
    return this.gut + " " + this.food;
  },
};
// here you need to give the parameter which can be a food, like squirrel or steak as a string
console.log(animal.eat());
