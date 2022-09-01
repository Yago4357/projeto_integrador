const http = require('http')
const path = require('path')
//const banco = require('./Banco/banco')


const express = require('express')
const fs = require('fs')
var session = require('express-session')


const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:'123'}));

app.set('port', process.env.PORT || 3000);


app.use('/scr/*', (req, res, next)=>{
    if(req.session.usuario){
        next();
    }else{
        res.redirect('/index.html')
    }
});

app.use(express.static(path.join(__dirname, 'scr')))

server.listen(app.get('port'), ()=>{
    console.log("Server iniciado na porta: ", app.get('port'))
})

//BancoSQL
(async () => {
    const banco = require("./Banco/banco");
    console.log('Começou!');
 
    console.log('SELECT * FROM usuario');
    const usuario = await banco.selectCustomers();
    console.log(usuario);
})();

//login tem que ser igual ao parametro dentro do fetch no index.js..
app.post('/login', (req,res) =>{
    const usuariocad = fs.readFileSync('./banco.sql');
    const usuarioparse = JSON.parse(usuariocad);
    
    var usuario = req.body.usuario
    var senha = req.body.senha

    for(var umUsuario of usuarioparse){
        if(usuario == umUsuario.usuario && senha == umUsuario.senha){
            req.session.usuario == umUsuario
            res.send("Conectado")
            return
        }
    }
    res.send('Falhou')
})