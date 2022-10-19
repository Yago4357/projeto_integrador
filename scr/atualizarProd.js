const url = new URLSearchParams(window.location.search);
function updateProd(){
    const id = url.get("id");
    var nome = document.getElementById("nome").value;
    var fornecedor = document.getElementById("fornecedor").value;
    var valor = document.getElementById("valor").value;
    var quantidade = document.getElementById("quantidade").value;
    
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
            location.href='visualizarProduto'
        }
    })
}