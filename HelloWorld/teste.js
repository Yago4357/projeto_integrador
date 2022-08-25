//por n ser um nomde de um modulo.express, não tem que digitar um diretório específico apenas digite o nome do modulo 
var site = require("http")
//para abrir o servidor e o listen serve pra informar a porta que quer abrir
//function dentro do create server significa função de callback req e res
//res de resposta para o usuario
site.createServer(function(req, res)
{
    //end serve pra mostrar uma msg na tela
res.end("Salve NOvinha")
}
).listen(8081)
//para abrir precisa escrever localhost e o nome da porta localhost:8081
console.log("o Servidor está rodando");
