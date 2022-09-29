const http = require('http')
const path = require('path')
const banco = require('./Banco/banco')
const cookieParser = require("cookie-parser");
const express = require('express')
var sessions  = require('express-session')
const app = express()
const server = http.createServer(app)
const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.set('view engine', 'ejs')
app.get('/visualizarProd', async(req, res,)=>{ 
    const produto = banco.Produto();
 res.render('visualizarProd', {Produto: await produto})
})


app.set('port', process.env.PORT || 3000);
var session;



app.use(express.static(path.join(__dirname, 'scr')))
app.use(express.static(path.join(__dirname, 'scr/tela_login')))
app.use(express.static(path.join('scr/tela_inicial')))
app.use(express.static(path.join(__dirname,'scr/tela_inicial')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'scr/cadastro_produto')))

server.listen(app.get('port'), ()=>{
    console.log("Server iniciado na porta: ", app.get('port'))
});


app.get('/logout',(req,res) => {
    console.log(req.session,"Destroido")
    req.session.destroy();
    res.redirect('/');
});

//BancoSQL
(async () => {
 
    const usuariodb = await banco.Usuario();

app.get("/TelaIni", (req,res)=>{
    console.log(req.session)
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        console.log('if')
        res.redirect('/');
    } else{    
        console.log('else')
        res.render('TelaIni',{Session:session,urid:session.userid})
    }
})


 


    
//login tem que ser igual ao parametro dentro do fetch no index.js..
app.post('/login', (req,res) =>{
    var usuario = req.body.usuario
    var senha = req.body.senha
   
    for(var usuarios of usuariodb ){
        console.log(usuarios.Senha)
        if(usuario == usuarios.Nome && senha==usuarios.Senha){
            session=req.session;
            session.userid=req.body.usuario;
            session.userid=req.body.usuario;
            res.redirect('/TelaIni');
    }
        

    
    } 
    
    
})
app.post('/cadP', (req,res)=>{
    const produto = banco.Produto();
        var nomeP = req.body.nomeP;
        var forn = req.body.forn;
        var valor = req.body.valor;
        var qtd = req.body.qtd;
    
        const result =  banco.insertProduto({Nome: nomeP , Fornecedor: forn, Valor: valor, Quantidade: qtd });
        res.send('Inserido')
        //alert("Produto cadastrado!");
        /*console.log('SELECT * FROM Produto');
        const Produto = await banco.Produto();
        console.log(Produto);*/
})
app.post('/cadU', (req,res)=>{
    const produto = banco.Produto();
        var nomeU = req.body.nomeU;
        var cpf = req.body.cpf;
        var contato = req.body.contato;
        var senha = req.body.senha;
        var senhaC = req.body.senhaC;
        
        if(senha == senhaC){
            const result =  banco.insertUsuario({Nome: nomeU , CPF:cpf , contato:contato, senha:senha });
            res.send('Cadastrado')
        
        }else{
            alert("SENHAS DIFERENTES!")
    }

        //alert("Produto cadastrado!");
        /*console.log('SELECT * FROM Produto');
        const Produto = await banco.Produto();
        console.log(Produto);*/
})
app.post('/TESTE', (req,res)=>{
    const produto = banco.Produto();
    var id = req.body.idP;
        result = banco.deleteProduto(id);
        res.send('Deletado');
})
app.post('/Att', (req,res)=>{
    var id=req.body.idP
    var nome = req.body.nomeP;
    var fornecedor = req.body.fornecedorP;
    var valor = req.body.valorP;
    var quantidade = req.body.quantidadeP;
    result = banco.updateProduto(id,{ Nome: nome, Fornecedor: fornecedor, Valor: valor, Quantidade: quantidade});
    res.send('att');
})
})();
