// const ageCalculator = function(name, yearOfBirth, currentYear) {
//   return name + " is " + (currentYear - yearOfBirth) + " years old.";
// }

// console.log(ageCalculator("Matthew", 1976, 2019));

// console.log(ageCalculator("Nelly", 1987, 2019));

// const howManyHundreds = function(syrup) {
//   return (syrup - (syrup % 100)) /100
// }

// console.log(howManyHundreds(894));

// const calculateRectangleArea = function(length , width){
//   if (length < 0 || width < 0){
//     return undefined
//   }
//   return length * width 
// }

// console.log(calculateRectangleArea(10,5));

// console.log(calculateRectangleArea(1.5,2.5));

// console.log(calculateRectangleArea(-1,5))


// const calculateTriangleArea = function(base,height){
//   if (base < 0 || height <0){
//     return undefined
//   }
//   return (base * height)/2
// }

// console.log(calculateTriangleArea(10,5))

// console.log(calculateTriangleArea(3,2.5))

// console.log(calculateTriangleArea(-1,5))

// const calculateCircleArea = function(radius){
//   if (radius < 0) {
//     return undefined
//   }
//   return Math.PI * Math.pow(radius,2)
// }

// console.log(calculateCircleArea(10));

// console.log(calculateCircleArea(3.5))

// const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];

// iceCreamFlavours.push("root beer");

// console.log(iceCreamFlavours);

// console.log(iceCreamFlavours[0]);

// console.log(iceCreamFlavours[5]);

// console.log(iceCreamFlavours.length);


// let range = function(start,end,step){
//   let numArray = []
//   if (start === undefined || end === undefined || step === undefined || start > end || step <=0){
//     return numArray
//   }
//   for(i=start; i<=end; i+=step){
//     numArray.push(i) 
//   }
//   return numArray
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

const lastIndexOf = function(myArray,value){
  for (let i = myArray.length-1; i >= 0; i--){
    if (myArray[i] === value) {
      return i;
    } 
  } 
  return -1;
}

console.log(lastIndexOf([0,1,4,1,2],1))
