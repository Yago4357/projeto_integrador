const http = require('http')
const path = require('path')
const banco = require('./Banco/banco')


const express = require('express')
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
});

//BancoSQL
(async () => {
    console.log('Começou!');
 
    const usuariodb = await banco.selectCustomers();
    console.log(usuariodb);  

//login tem que ser igual ao parametro dentro do fetch no index.js..
app.post('/login', (req,res) =>{
    var usuario = req.body.usuario
    var senha = req.body.senha

    for(var usuarios of usuariodb ){
        if(usuario == usuarios.Nome && senha == usuarios.Senha){
            req.session.usuario == usuarios
            res.send('Conectado')
                return
        }

    }
    
    res.send('Falhou')
    
})
})();