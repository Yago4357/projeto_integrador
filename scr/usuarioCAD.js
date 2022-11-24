function cadastrarUser(){
    console.log("cadastro");
    var admin = document.getElementById('tipo');
    var nomeU = document.getElementById('usuario').value;
    var cpf = document.getElementById('cpf').value;
    var contato = document.getElementById('contato').value;
    var senha = document.getElementById('senha').value;
    var senhaC = document.getElementById('senhaC').value;
    var tipo;

    if(admin.checked){
        tipo = "ofoda"
    }else{
        tipo = "onoob"
    }
    
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
        admin:tipo
     }));
    
    fetch("cadU",{
    method:'POST',
    body: JSON.stringify({
        nomeU:nomeU,
        cpf:cpf,
        contato:contato,
        senha:senha,
        senhaC:senhaC,
        admin:tipo
    }),
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (respon)=>{
        var statususer = await respon.text();
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