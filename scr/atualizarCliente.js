function attCliente(){
    const idC = document.getElementById("id").value;
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var ctt = document.getElementById("ctt").value;
    
    if(nome==""||nome>49){
        alert("Nome do cliente inválido")
    }else if(cpf.length!=11){
        alert("CPF inválido")
    }else if(ctt.length!=11){
        alert("Contato inválido")
    }else{

    console.log(JSON.stringify({
        id:idC,
        nome:nome,
        cpf:cpf,
        ctt:ctt
    }))

    fetch("attC",{
        method:'POST',
        body: JSON.stringify({
            id:idC,
            nome:nome,
            cpf:cpf,
            ctt:ctt
        }),    
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var updateC = await resp.text();
        if(updateC == 'attC'){
            alert('Cliente atualizado!');
            location.href='visualizarCliente';
        }else{
            alert('Cliente não atualizado!')
            location.href='attCliente.html'
        }
    })
}
}