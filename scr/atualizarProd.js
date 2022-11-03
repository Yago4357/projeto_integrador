
function updateProd(){
    const id = document.getElementById("id").value;
    var nome = document.getElementById("nome").value;
    var fornecedor = document.getElementById("fornecedor").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;
    
    if(nome.length>49||nome==''){
        alert("Nome do produto é inválido")
    }else if(fornecedor.length>49||fornecedor==''){
        alert("Nome do fornecedor é inválido")
    }else if(valor<1||valor==null){
        alert("Valor do produto é inválido")
    }else if(quantidade<1||quantidade==null){
        alert("Quantidade do produto é inválido ")
    }else{
    console.log(JSON.stringify({
        id:id,
        nomeP:nome,
        fornecedorP:fornecedor,
        valorP:valor,
        quantidadeP:quantidade
    }))

    fetch("attP",{
        method:'POST',
        body: JSON.stringify({
            id:id,
            nomeP:nome,
            fornecedorP:fornecedor,
            valorP:valor,
            quantidadeP:quantidade
        }),    
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var update = await resp.text();
        if(update == 'att'){
            alert('Produto atualizado!');
            location.href='visualizarProduto';
        }else{
            alert('Produto não atualizado!')
            location.href='attProduto.html'
        }
    })
}
}