function cadCliente(){
    console.log("cadastro cliente");
    var nomeC = document.getElementById('nome').value;
    var cpfC = document.getElementById('cpf').value;
    var cttC = document.getElementById('cttC').value;
    if(nomeC==""||nomeC>49){
        alert("Nome inválido")
    }else if(cpfC.length!=11){
        alert("CPF inválido")        
    }else if(cttC.length!=11){
        alert("Contato inválido")        
    }else{
    console.log(JSON.stringify({
        nomeC:nomeC,
        cpfC:cpfC,
        cttC:cttC
     }));
    
     console.log("rock3");
    
    fetch("cadC",{
    method:'POST',
    body: JSON.stringify({
        nomeC:nomeC,
        cpfC:cpfC,
        cttC:cttC
    }),
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (r)=>{
        var statuscliente = await r.text();
        console.log(statuscliente);
        if(statuscliente == 'clienteCAD'){
            alert("CLIENTE CADASTRADO")
            location.href = 'visualizarCliente'
        }else{
            alert("Aconteceu algo inesperado!")
            location.href = 'cadastro_cliente.html'
        }
     
     });
}
}