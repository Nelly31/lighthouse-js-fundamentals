// 2 arrays of odd and even and then the sum based on the condition

// const conditionalSum = function(values, condition) {  let evenNum = []
//     let oddNum = []
//     let sum = 0
//   for (i = 0; i <values.length; i++){
//     if (values[i]%2 === 0) {
//         evenNum.push(values[i]) 
//       } else {
//         oddNum.push(values[i])  
//   }
// }
// if (condition === "even"){
//   for (let i = 0; i < evenNum.length; i++){
//       sum += evenNum[i]
// }} else if (condition === "odd"){
//   for (let i = 0; i < oddNum.length; i++){
//     sum += oddNum[i]
// }}
//   return sum;
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

// 1 array iteration checking odd/even and condition

const conditionalSum = function(values, condition) {
  let sum = 0
  for (i = 0; i <values.length; i++){
    if ((values[i]%2 === 0) && (condition === 'even')){
      sum += values[i]
    } else if ((values[i]%2 !== 0) && (condition ==='odd')){
      sum += values[i]
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
