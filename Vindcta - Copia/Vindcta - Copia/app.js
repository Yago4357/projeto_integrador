//Carregando modulos
const express= require('express')
const handlebars= require('express-handlebars')
const bodyParser=require("body-parser")
const app=express();
const login=require("./routes/login")
const path=require("path")
const mongoose=require("mongoose")
const session=require("express-session")
const flash=require("connect-flash")
    //configurações
        //sessão
        app.use(session({
            secret:'node',
            resave:true,
            saveUninitialized:true
        }))
        app.use(flash())
        //Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg=req.flash("success_msg")
            res.locals.error_msg=req.flash("error_msg")
            next()
        })
//bodyParser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

//Handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//conexão com o Mongoose
    mongoose.Promise=global.Promise
    mongoose.connect('mongodb://localhost/Banco').then(()=>{
         console.log("deu tudo certo com o mongo")
    }).catch((err)=>{
        console.log("houve problema com o mongo ao se conectar  "+ err)

    })
//public
app.use(express.static(path.join(__dirname,"public")))
/*app.use((req,res,next)=>{
    console.log("oi")
    next();
})
*/

//rotas
   
  app.use("/login",login)
    

//outros
const PORT=8081
app.listen(PORT,()=>{
    console.log("seridor rodando")
})  