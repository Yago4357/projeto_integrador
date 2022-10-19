const url = new URLSearchParams(window.location.search);
function attCliente(){
    const idC = url.get("id");
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var ctt = document.getElementById("ctt").value;
    
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