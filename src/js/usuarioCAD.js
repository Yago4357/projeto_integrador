function cadastrarUser(){
    console.log("Conectou 1");
    var nomeU = document.getElementById('usuario').value;
    var cpf = document.getElementById('cpf').value;
    var contato = document.getElementById('contato').value;
    var senha = document.getElementById('senha').value;
    var senhaC = document.getElementById('senhaC').value;

    console.log(JSON.stringify({
        nomeU:nomeU,
        cpf:cpf,
        contato:contato,
        senha:senha,
        senhaC:senhaC
     }));
    
     console.log("rock3");
    
    fetch("cadU",{
    method:'POST',
    body: JSON.stringify({
        nomeU:nomeU,
        cpf:cpf,
        contato:contato,
        senha:senha,
        senhaC:senhaC
    }),
   
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (respo)=>{
        var statusprod = await respon.text();
        console.log(statusprod);
        if(statususer == 'Cadastrado'){
            alert("USUARIO CADASTRADO")
            location.href = 'login.html'
        }
     
     })
};