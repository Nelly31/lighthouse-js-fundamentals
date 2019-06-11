// const ageCalculator = function(name, yearOfBirth, currentYear) {
//   return name + " is " + (currentYear - yearOfBirth) + " years old.";
// }

// console.log(ageCalculator("Matthew", 1976, 2019));

// console.log(ageCalculator("Nelly", 1987, 2019));

// const howManyHundreds = function(syrup) {
//   return (syrup - (syrup % 100)) /100
// }

// console.log(howManyHundreds(894));

const calculateRectangleArea = function(length , width){
  if (length < 0 || width < 0){
    return undefined
  }
  return length * width 
}

console.log(calculateRectangleArea(10,5));

console.log(calculateRectangleArea(1.5,2.5));

console.log(calculateRectangleArea(-1,5))


const calculateTriangleArea = function(base,height){
  if (base < 0 || height <0){
    return undefined
  }
  return (base * height)/2
}

console.log(calculateTriangleArea(10,5))

console.log(calculateTriangleArea(3,2.5))

console.log(calculateTriangleArea(-1,5))

const calculateCircleArea = function(radius){
  if (radius < 0) {
    return undefined
  }
  return Math.PI * Math.pow(radius,2)
}

console.log(calculateCircleArea(10));

console.log(calculateCircleArea(3.5))
