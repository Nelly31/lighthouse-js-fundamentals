const squareCode = function(message) {
 let square = ""
 let messageWithoutSpace = message.replace(/\s/g,"")
//  remove space i.e replace space with nothing
 let columns = Math.ceil(Math.sqrt(messageWithoutSpace.length))
 let code = ""
 
  for (let i = 0; i < messageWithoutSpace.length; i++){ 
      if (((i+1)%columns) === 0){
      square += messageWithoutSpace[i]+ "\n"
    } else {
      square += messageWithoutSpace[i]
    }
  }
newArray = square.split('\n')
 
  for (j = 0; j < columns; j++){
    code += " "
    for (k = 0; k < newArray.length; k++){
      if (newArray[k][j] !== undefined){
      code += newArray[k][j]
  }
}
  }
return code
};



console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));