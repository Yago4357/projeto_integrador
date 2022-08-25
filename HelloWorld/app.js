//require puxa modulos que já existem, mas como n foi criado ele puxa um arquivod o node
const express = require("express");
const app = express();
//const serve para n sobreescrever a váriavel mas poderia ser  var
//para rodar o node precisa escrever nodemon (nome do arquivo)
//console.log("printar na tela")
//para entrar no servidor node, localhost e a porta do app.listen
app.get("/", function(req, res)
{
    //res.send("Seja bem vindo ao app") para escrever na tela 
    res.sendFile(__dirname+"/index.html")
})

app.get("/sobre", function(req,res)//localhost:8081/sobre
{
    res.sendFile(__dirname+"/html/sobre.html")//mandar aquivo pra quem acessar rotasobre __dirname para chamar onde tá o arquivo do app.js o próprio arquivo + onde tá 
})
app.get("/blog", function(req, res)//localhost:8081/blog
{
    res.send("Bem-Vindo ao meu piru")
})
app.get("/ola/:cargo/:nome/:idade",function(req, res)
{
    //só pode haver um res ent tem que ser tudo junto
    res.send(req.params+"<h1>Ola " + req.params.nome+" <br></h1>"+"<h2>Seu cargo: "+req.params.cargo+"</h2> <br>"+"<h3>Sua idade é: "+req.params.idade+"<h3> <br>");// se n especificar o req.params mostra obj
    
}
)//parametro é um valor dinamico que o usuário consegue passar, como escrever na barra e aparecer na tela ultilizando o req

app.listen(8081, function(){
    console.log("Servidor Rodando")
});//app.listen(n° da porta) para rodar o arquivo de express, mas ele sempre tem que ser a ultima linha do código


//LocalHost:8081
//CallBacka