const http = require('http')
const path = require('path')
const banco = require('./Banco/banco')

const express = require('express')
var session = require('express-session')


const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:'123',
    saveUninitialized: true,
    resave:false,
    cookie:({max:1})
}));



app.set('view engine', 'ejs')
app.get('/visualizarProd', async(req, res,)=>{ 
    const produto = banco.Produto();
 res.render('visualizarProd', {Produto: await produto})
})

app.get('/visualizarFun', async(req,res)=>{
    const fun = banco.Usuario();
    res.render('visualizar_funcionario',{Fun: await fun})
})


app.set('port', process.env.PORT || 3000);


app.use('./scr/tela_login', (req, res, next)=>{
    if(req.session.usuario){
        next();
    }else{
        res.render('index.html')
    }
});


app.use(express.static(path.join(__dirname, 'scr')))
app.use(express.static(path.join(__dirname, 'scr/tela_login')))
app.use(express.static(path.join('scr/tela_inicial')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'scr/attProduto')))
app.use(express.static(path.join(__dirname, 'scr/tela_cadastro')))
app.use(express.static(path.join(__dirname, 'scr/cadastro_produto')))



server.listen(app.get('port'), ()=>{
    console.log("Server iniciado na porta: ", app.get('port'))
});

//BancoSQL
(async () => {
 
    const usuariodb = await banco.Usuario();

//login tem que ser igual ao parametro dentro do fetch no index.js..
app.post('/login', (req,res) =>{
    const r = banco.Usuario();
    var usuario = req.body.usuario
    var senha = req.body.senha

    for(var usuarios of usuariodb ){
        if(usuario == usuarios.Nome && senha == usuarios.Senha){
            console.log(usuarios.Nome)
            req.session.usuario == usuarios
            res.send('Conectado')
                return
        }

    }
    
    res.send('Falhou')
    
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
        //alert("Produto cadastrado!");
        /*console.log('SELECT * FROM Produto');
        const Produto = await banco.Produto();
        console.log(Produto);*/
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
  