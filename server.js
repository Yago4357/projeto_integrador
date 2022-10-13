const http = require('http')
const path = require('path')
const banco = require('./Banco/banco')

const express = require('express')
var sessions = require('express-session')
const cookieParser = require("cookie-parser");
const app = express()
const server = http.createServer(app)

const oneDay = 1000 * 60 * 60 * 24;
app.use(cookieParser());
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 23123123132 },
    resave: false 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var session;



app.set('view engine', 'ejs')
app.get('/visualizarProd', async(req, res,)=>{ 
    const produto = banco.Produto();
 res.render('visualizarProd', {Produto: await produto})
})


app.get("/visualizarProduto", async(req,res)=>{
    const produto = banco.Produto();
    console.log(req.session)
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        console.log('iasdadasdasf')
        res.redirect('/');
    } else{    
        console.log('else')
        res.render('visualizarProd',{Produto: await produto,Session:session,urid:session.userid})
    }
})

app.get("/visualizarFun", async(req,res)=>{
    const fun = banco.Usuario();
    console.log(req.session)
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        console.log('iasdadasdasf')
        res.redirect('/');
    } else{    
        console.log('else')
        res.render('visualizar_funcionario',{Fun: await fun,Session:session,urid:session.userid})
    }
})



app.set('port', process.env.PORT || 3000);




app.use(express.static(path.join(__dirname, 'scr')))
app.use(express.static(path.join(__dirname, 'scr/tela_login')))
app.use(express.static(path.join('scr/tela_inicial')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'scr/attFu')))
app.use(express.static(path.join(__dirname, 'scr/attProduto')))
app.use(express.static(path.join(__dirname, 'scr/tela_cadastro')))
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

//login tem que ser igual ao parametro dentro do fetch no index.js..

app.get("/TelaIni", (req,res)=>{
    console.log(req.session)
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        console.log('iasdadasdasf')
        res.redirect('/');
    } else{    
        console.log('else')
        res.render('TelaIni',{Session:session,urid:session.userid})
    }
})

app.post('/login', (req,res) =>{
    const r = banco.Usuario();
    var usuario = req.body.usuario
    var senha = req.body.senha

    for(var usuarios of usuariodb ){
        if(usuario == usuarios.Nome && senha == usuarios.Senha){
            session=req.session;
            session.userid=req.body.usuario;
        }
    }
    res.redirect("/TelaIni")
})
app.get("/CadastrarProduto", (req,res)=>{
    console.log(req.session)
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        console.log('CadastrarProduto')
        res.redirect('/');
    } else{    
        console.log('CadastrarProdutoNÂO')
        res.render('cadastro_produtos',{Session:session,urid:session.userid})
    }
})

app.post('/cadP', (req,res)=>{
    const produto = banco.Produto();
    console.log('Começou o rock!');
        var nomeP = req.body.nomeP;
        var forn = req.body.forn;
        var valor = req.body.valor;
        var qtd = req.body.qtd;
        console.log('Começou o rock 2!');
        
        console.log('INSERT INTO Produto');
        const result =  banco.insertProduto({Nome: nomeP , Fornecedor: forn, Valor: valor, Quantidade: qtd });
        res.send('Inserido')
})
app.post('/cadU', (req,res)=>{
    const r = banco.Usuario();
    console.log('Começou o rocknroll!');
        var nomeU = req.body.nomeU;
        var cpf = req.body.cpf;
        var contato = req.body.contato;
        var senha = req.body.senha;
        var senhaC = req.body.senhaC;
        console.log(cpf);
        
        console.log('INSERT INTO usuario');
        if(senha == senhaC){
        const result =  banco.insertUsuario({Nome: nomeU , Cpf:cpf , Contato:contato, Senha:senha });
        res.send('Cadastrado')
        console.log(result)
        
    }else{
        alert("SENHAS DIFERENTES!")
    }

})
app.post('/deleteUser',(req,res)=>{
    const refresh = banco.Usuario();
    var idF = req.body.idF;
    result = banco.deleteUser(idF);
    res.send('Deletado')
    console.log(`Usuario Apagado!`)
})
app.post('/attF',(req,res)=>{
    var id = req.body.id;
    var nome = req.body.nomeF;
    var cpf = req.body.cpf;
    var ctt = req.body.ctt;
    console.log(nome,'SO CANTO ROCK')
    result = banco.updateUser(id,{ Nome: nome, Cpf: cpf, Contato: ctt});
    res.send('att');
})
app.post('/TESTE', (req,res)=>{
    const produto = banco.Produto();
    var id = req.body.idP;
        result = banco.deleteProduto(id);
        res.send('Deletado');
        console.log(`Produto com o id:${id} foi apagado!`);   
})

app.post('/attP', (req,res)=>{
    var id=req.body.id;
    var nome = req.body.nomeP;
    var fornecedor = req.body.fornecedorP;
    var valor = req.body.valorP;
    var quantidade = req.body.quantidadeP;
    console.log(nome,'rook')
    result = banco.updateProduto(id,{ Nome: nome, Fornecedor: fornecedor, Valor: valor, Quantidade: quantidade});
    res.send('att');
})
})();
  