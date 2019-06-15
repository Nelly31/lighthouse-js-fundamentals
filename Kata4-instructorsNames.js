// function to return longest name in an object 

const instructorWithLongestName = function(instructors) {
  nameLength = 0
  nameIndex = 0
  for (i = 0; i < instructors.length; i++){
    if((instructors[i].name.length) > nameLength){
      nameLength = instructors[i].name.length
      nameIndex = i
    }
  }
  return instructors[nameIndex]
  }

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));