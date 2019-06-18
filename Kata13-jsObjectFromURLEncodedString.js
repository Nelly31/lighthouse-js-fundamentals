const urlDecode = function(text) {
 spacedString = text.replace(/%20/g, " ")
 let splitString = spacedString.split("&")
  newArray = []
  splitArray = []
  finalObject = {}
 for (let i = 0; i < splitString.length ; i++){
  newArray.push([splitString[i]])
  }
  for (let k = 0; k < newArray.length ; k++){
    splitArray.push(newArray[k][0].split("="))
  }
  for (let m = 0; m < splitArray.length; m++){
    finalObject[splitArray[m][0]]=splitArray[m][1]
  }
  return finalObject
}




console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// let splitString = spacedString.split(/&|=/) to split at 2 characters