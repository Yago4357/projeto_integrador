    const url = new URLSearchParams(window.location.search);
function attUser(){
    const id = url.get("id");
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var ctt = document.getElementById("ctt").value;

    if(nome == ''||nome>49){
        alert("Nome inválido")
    }else if(cpf.length!=11){
        alert("CPF inválido")
    }else if(ctt.length!=11){
        alert("Contato inválido")
    }else{
    console.log(JSON.stringify({
        id:id,
        nomeF:nome,
        cpf:cpf,
        ctt:ctt
    }))

    fetch("attF",{
        method:'POST',
        body: JSON.stringify({
            id:id,
            nomeF:nome,
            cpf:cpf,
            ctt:ctt
        }),    
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var update = await resp.text();
        if(update == 'att'){
            alert('Usuario atualizado!');
            location.href='visualizarFun';
        }else{
            alert('Produto não atualizado!')
            location.href='attFun.html'
        }
    })
}
}
