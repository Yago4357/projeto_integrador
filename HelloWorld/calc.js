
//sempre que quiser recarregar um module.express ultilize require
//sempre que quiser usar o require precisa igualar a uma variável
var somaFunc = require("./mais")
var subFunc = require("./menos")
var divFunc = require("./div")
var multFunc = require("./mult")
console.log(somaFunc(10,30))
console.log(subFunc(10,30))
console.log(divFunc(30,2))
console.log(multFunc(2,10))
//console.log para printar no console
 


//chamou cada função dentro do mesmo arquivo 
//console.log(somar(num1,num2))
//console.log(sub(num1,num2))
//console.log(mult(num1,num2))
//console.log(div(num1,num2))
