// const ageCalculator = function(name, yearOfBirth, currentYear) {
//   return name + " is " + (currentYear - yearOfBirth) + " years old.";
// }

// console.log(ageCalculator("Matthew", 1976, 2019));

// console.log(ageCalculator("Nelly", 1987, 2019));

const howManyHundreds = function(syrup) {
  return (syrup - (syrup % 100)) /100
}

console.log(howManyHundreds(894));

