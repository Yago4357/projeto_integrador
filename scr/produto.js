function Cadastrar(){
    console.log("Conectou 1");
    var nomeP = document.getElementById('nome').value;
    var forn = document.getElementById('fornecedor').value;
    var valor = document.getElementById('valor').value;
    var qtd = document.getElementById('quantidade').value;
    if(nomeP.length>49||nomeP==''){
        alert("Nome do produto é inválido")
    }else if(forn.length>49||forn==''){
        alert("Nome do fornecedor é inválido")
    }else if(valor<1||valor==null){
        alert("Valor do produto é inválido")
    }else if(qtd<1||qtd==null){
        alert("Quantidade do produto é inválido ")
    }else{
    console.log(JSON.stringify({
        nomeP:nomeP,
        forn:forn,
        valor:valor,
        qtd:qtd
     }));
    
     console.log("rock3");
    
    fetch("cadP",{
    method:'POST',
    body: JSON.stringify({
        nomeP:nomeP,
        forn:forn,
        valor:valor,
        qtd:qtd
    }),
   
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (response)=>{
        var statusprod = await response.text();
        console.log(statusprod);
        if(statusprod == 'Inserido'){
            alert("Produto cadastrado!")
            location.href = 'visualizarProduto'
        }
     
     })
};
}