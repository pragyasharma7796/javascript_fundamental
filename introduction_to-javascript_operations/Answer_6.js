// Importing the module 
const readline = require("readline-sync"); 
  
// Enter the number 
let weight = Number(readline.question("enter the weight(kg) : "))
let height = Number(readline.question("enter the height : "))


let BMI = weight/height*height
console.log(BMI)