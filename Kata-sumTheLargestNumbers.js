
// Sorted array - cheats version

// const sumLargestNumbers = function(data) {
//   function compareNumbers(a,b){
//     return a-b;
//   } data.sort(compareNumbers);
//    let large = data.pop()
//    let second = data.pop()
//    return large + second
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

//For and if loops

const sumLargestNumbers = function(data) {
let largest = 0
let largestIndex = -1
let second = 0
let secondIndex = -1
for (let i = 0; i < data.length; i++){
   if (largestIndex <0 || data[i] > largest){
    largest = data[i]
    largestIndex = i
   } 
}
for (let i = 0; i < data.length; i++){
  if (i !== largestIndex){
   if (secondIndex < 0 || data[i] > second){
      second = data[i]
      secondIndex = i
  }
}
}
return largest + second
}

console.log(sumLargestNumbers([1, -10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, -92, 2]));