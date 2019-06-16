const repeatNumbers = function(data) {
  newString = ""
  for(let i = 0; i < data.length; i++){
    newString += ((data[i][0]).toString().repeat((data[i][1])))
    if (i !== data.length-1) {
      newString += ", "
    }
  }
  return newString
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));