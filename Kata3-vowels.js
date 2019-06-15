// function that will recieve a string and return the number of vowels

const numberOfVowels = function(data) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelArray = []
  for (let i = 0; i < data.length; i++){
    for (let v = 0; v < vowels.length; v++){
      if (data[i] === vowels[v]){
        vowelArray += data[i]
      }
    }
  }
return vowelArray.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));