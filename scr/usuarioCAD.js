function cadastrarUser(){
    console.log("cadastro");
    var admin = document.getElementById('tipo').value;
    var nomeU = document.getElementById('usuario').value;
    var cpf = document.getElementById('cpf').value;
    var contato = document.getElementById('contato').value;
    var senha = document.getElementById('senha').value;
    var senhaC = document.getElementById('senhaC').value;
    
    if(admin=='admin'){
        admin = "ofoda";
    }else{
        admin = "onoob";
    }

    console.log(admin);
    
    if(nomeU==''||nomeU>49){
        alert("Nome inválido")
    }else if(cpf.length!=11){
        alert("CPF inválido")
    }else if(contato.length!=11){
        alert("Contato inválido")
    }else if(senha.length<5){
        alert("Senha pequena")
    }else if(senha!=senhaC){
        alert("As senhas não são as mesmas")
    }else{
    console.log(JSON.stringify({
        nomeU:nomeU,
        cpf:cpf,
        contato:contato,
        senha:senha,
        senhaC:senhaC,
        admin:admin
     }));
    
     console.log("rock3");
    
    fetch("cadU",{
    method:'POST',
    body: JSON.stringify({
        nomeU:nomeU,
        cpf:cpf,
        contato:contato,
        senha:senha,
        senhaC:senhaC,
        admin:admin
    }),
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (respon)=>{
        var statususer = await respon.text();
        console.log(statususer);
        if(statususer == 'Cadastrado'){
            alert("USUARIO CADASTRADO")
            location.href = 'index.html'
        }else{
            alert("Aconteceu algo inesperado!")
            location.href = 'index.html'
        }
     
     });
};
}