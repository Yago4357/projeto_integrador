const express = require("express")
const app = express();
const handlebars = require ('express-handlebars')
const Sequelize = require('sequelize')
//confing
    //template engine
    
    
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    //conexão com o banco de dados Mysql
    const sequelize = new Sequelize('testdb','root','123abc',{
        host:"localhost",
        dialect:'mysql'
    })
    //Rotas
    app.get('/asd', function(req,res) {
        res.render('formulario')
    })


app.listen(8081, function(){
    console.log("servidor rodando")
}); 