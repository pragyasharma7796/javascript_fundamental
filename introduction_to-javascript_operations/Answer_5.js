
// Importing the module 
const readline = require("readline-sync"); 
  
// Enter the number 
let principle = Number(readline.question("enter the principle : ")); 
let rate = Number(readline.question("enter the rate : ")); 
let time = Number(readline.question("enter the time : ")); 


let simple_intrest = (principle*rate*time)/100;
console.log(simple_intrest)