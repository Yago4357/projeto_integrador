sequelize.authenticate().then(function()
{
    console.log("conectado")
}).catch(function(erro){
    console.log("deu erro" + erro)
})