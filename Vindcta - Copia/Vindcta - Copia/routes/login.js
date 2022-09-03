const express=require("express")
const router= express.Router()
const mongoose=require("mongoose")
require("../models/Usuario")
const Usuario=mongoose.model("usuario")


router.get('/login',(req,res)=>{
    Usuario.find().sort({nome:"desc"}).lean().then((usuario)=>{
        res.render("login/novoCadastro", {usuario:usuario})
    }).catch((err)=>{
        req.flash("error_msg", "houve um erro ao listar")
        req.redirect("/login/Usuario/add")
    })
        
})
router.get("/Usuario/add",(req,res)=>{
    res.render("./login/cadastro")

})
router.get("/Usuario/add",(req,res)=>{
    res.render("./login/cadastro")
})
router.get('/logar',(req,res)=>{
    res.render("./login/login")
})

router.post("/cadastro/novo",(req,res)=>{

        var error=[]
        Usuario.findOne({email:req.body.email}).then((usuario)=>{
            if(usuario){
                req.flash("error_msg", "Usuario já existe")
                res.redirect("/login/login")


            }else{
                if(error.length>0){
                    res.render("login/cadastro",{error:error})
                }else{
                    const novoUsuario={
                        nome: req.body.nome,
                        email:req.body.email,
                        cpf:req.body.cpf,
                        senha:req.body.senha,
                        senha1:req.body.senha1
                        } 
                        new Usuario(novoUsuario).save().then(()=>{
                            req.flash("success_msg",req.body.nome,"usuario criado com sucesso")
                            console.log("criado")
                           res.redirect("/login/login")
                        }).catch((err)=>{
                            req.flash("error_msg","Houve um erro ao registrar o usuario"+ err)
                            res.redirect("/login/login")
                        })
                    
                }
                
            }
            }).catch((err)=>{{
                req.flash("error_msg", "houve um erro")
                res.redirect("/login/login")
            }
        })
        if(!req.body.nome || typeof req.body.nome == undefined||req.body.nome==null){
            error.push({text:"nome inválido"})

        }
        if(!req.body.senha || typeof req.body.senha == undefined||req.body.senha==null){
            error.push({text:"senha inválida"})
            
        }
        if( req.body.senha.length<3){
            error.push({text:"senha pequena"})
        }

        if(!req.body.email || typeof req.body.email== undefined||req.body.email==null){
            error.push({text:"email inválido"})
            
        }
        

  
      
})

module.exports=router





