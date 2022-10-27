const http = require('http')
const path = require('path')
const banco = require('./Banco/banco')

const express = require('express')
var sessions = require('express-session')
const cookieParser = require("cookie-parser");
const { Console } = require('console')
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

app.get('/visualizarCliente', async(req, res,)=>{ 
    const Cliente = banco.Cliente();
    const produto = banco.Produto();
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('visualizar_Cliente',{Cliente: await Cliente,Session:session,urid:session.userid})
    }
})


app.get("/visualizarProduto", async(req,res)=>{
    const produto = banco.Produto();
    
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('visualizarProd',{Produto: await produto,Session:session,urid:session.userid})
    }
})

app.get('/telaVenda', async(req, res,)=>{ 
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('add_item_venda',{Session:session,urid:session.userid})
    }
})

app.get("/visualizarVenda", async(req,res)=>{
    const V = banco.Venda();
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('tela_lis_vendas',{v: await V ,Session:session,urid:session.userid})
    }
})

app.get("/visualizarFun", async(req,res)=>{
    const fun = banco.Usuario();
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('visualizar_funcionario',{Fun: await fun,Session:session,urid:session.userid})
    }
})



app.set('port', process.env.PORT || 3000);




app.use(express.static(path.join(__dirname, 'scr')))
app.use(express.static(path.join(__dirname, 'scr/tela_login')))
app.use(express.static(path.join('scr/tela_inicial')))
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'scr/add_item_venda')))
app.use(express.static(path.join(__dirname, 'scr/attFu')))
app.use(express.static(path.join(__dirname, 'scr/attCliente')))
app.use(express.static(path.join(__dirname, 'scr/attProduto')))
app.use(express.static(path.join(__dirname, 'scr/tela_cadastro')))
app.use(express.static(path.join(__dirname, 'scr/cadastro_cliente')))
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
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('navbar',{Session:session,urid:session.userid,admin: usuariodb})
    }
})

app.get("/TelaIniV", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('navbarVendedor',{Session:session,urid:session.userid,admin: usuariodb})
    }
})

app.post('/login', (req,res) =>{
    const r = banco.Usuario();
    var usuario = req.body.usuario
    var senha = req.body.senha
    var conectado;
    for(var usuarios of usuariodb ){
        if(usuario == usuarios.Nome && senha == usuarios.Senha){
            conectado=true;
            session=req.session;
            session.userid=usuarios;
            if(usuarios.Tipo == 'onoob'){
                s = 'onoob'
            }else{
                s = 'ofoda'
            }
        }
    }
    if(conectado!=true){
    res.redirect("/")
    }else{
    if(s=="ofoda"){
        res.redirect("/TelaIni")
        }else{
        res.redirect("/TelaIniV")
        }
}
})
app.get("/CadastrarProduto", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('cadastro_produtos',{Session:session,urid:session.userid})
    }
})

app.post('/cadP', (req,res)=>{
    const produto = banco.Produto();
        var nomeP = req.body.nomeP;
        var forn = req.body.forn;
        var valor = req.body.valor;
        var qtd = req.body.qtd;
        
        console.log('INSERT INTO Produto');
        const result =  banco.insertProduto({Nome: nomeP , Fornecedor: forn, Valor: valor, Quantidade: qtd });
        res.send('Inserido')
})

app.get("/CadastrarFuncionario", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('tela_cadastro',{Session:session,urid:session.userid})
    }
})

app.post('/Venda', async(req,res)=>{
    const produtoV = await banco.Produto();
    cpfc = banco.Cliente();
    var codPO = req.body.codP;
    var qtdV = req.body.qtdV;
    var cliente = req.body.cliente;
    var bx;

    for(ProdutoV of produtoV){
    if(codPO == ProdutoV.Idprod && qtdV <= ProdutoV.Quantidade){
        bx=1;
        valorT = ProdutoV.Valor * qtdV;
        baixa =  ProdutoV.Quantidade - qtdV;
        comV = valorT * 0.10;
            
     result = banco.relatorioVenda({ comV: comV, qtdV: qtdV, vF: valorT, Cliente: cliente});
     baixaI = banco.bvenda(codPO,{Quantidade: baixa});
    
     }
}   if(bx==1){
    res.send('Vendido')   
}else{
    res.send('falha')
}   
   

})

app.post('/cadU', (req,res)=>{
    const r = banco.Usuario();
        var nomeU = req.body.nomeU;
        var cpf = req.body.cpf;
        var contato = req.body.contato;
        var senha = req.body.senha;
        var senhaC = req.body.senhaC;
        var admin = req.body.admin;
        
        if(senha == senhaC){
        const result =  banco.insertUsuario({Nome: nomeU , Cpf:cpf , Contato:contato, Senha:senha, Tipo: admin });
        res.send('Cadastrado')
        
    }else{
        alert("SENHAS DIFERENTES!")
    }

})
app.post('/deleteUser',(req,res)=>{
    const refresh = banco.Usuario();
    var idF = req.body.idF;
    result = banco.deleteUser(idF);
    res.send('Deletado')
})
app.get("/AtualizarFuncionario", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('attFun',{Session:session,urid:session.userid})
    }
})
app.post('/attF',(req,res)=>{
    var id = req.body.id;
    var nome = req.body.nomeF;
    var cpf = req.body.cpf;
    var ctt = req.body.ctt;
    result = banco.updateUser(id,{ Nome: nome, Cpf: cpf, Contato: ctt});
    res.send('att');
})
app.post('/TESTE', (req,res)=>{
    const produto = banco.Produto();
    var id = req.body.idP;
        result = banco.deleteProduto(id);
        res.send('Deletado');  
})

app.get("/AtualizarProduto", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('attProdutos',{Session:session,urid:session.userid})
    }
})
app.post('/attP', (req,res)=>{
    var id=req.body.id;
    var nome = req.body.nomeP;
    var fornecedor = req.body.fornecedorP;
    var valor = req.body.valorP;
    var quantidade = req.body.quantidadeP;
    result = banco.updateProduto(id,{ Nome: nome, Fornecedor: fornecedor, Valor: valor, Quantidade: quantidade});
    res.send('att');
})
app.get("/CadastrarCliente", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('cadastro_cliente',{Session:session,urid:session.userid})
    }
})
app.post('/cadC', (req,res)=>{
    const rf = banco.Cliente();
      var nome = req.body.nomeC;
      var cpf = req.body.cpfC;
      var ctt = req.body.cttC;
   
        
        console.log('INSERT INTO Cliente');
        const result =  banco.insertCliente({Nome: nome , Cpf:cpf , Contato:ctt});
        res.send('clienteCAD')
})
app.get("/AtualizarCliente", (req,res)=>{
    console.log(req.session.hasOwnProperty('userid'))
    if(req.session.hasOwnProperty('userid') == false){
        res.redirect('/');
    } else{    
        res.render('attCliente',{Session:session,urid:session.userid})
    }
})
app.post('/attC', (req,res)=>{
    var id=req.body.id;
    var nome = req.body.nome;
    var cpf = req.body.cpf;
    var ctt = req.body.ctt;
    result = banco.updateCliente(id,{ Nome: nome, Cpf: cpf, Contato: ctt});
    res.send('attC');
})
app.post('/delC', (req,res)=>{
    const rf = banco.Cliente();
    var id = req.body.idC;
        result = banco.deleteCliente(id);
        res.send('Deletado');
})
})();
  