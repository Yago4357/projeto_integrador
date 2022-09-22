function updateProd(clicked_id){
    idProd = clicked_id;
    var nome = prompt("Nome");
    var fornecedor = prompt("Fornecedor");
    var valor = prompt("Valor");
    var quantidade = prompt("Quantidade");
    console.log(JSON.stringify({
        idP:idProd,
        nomeP:nome,
        fornecedorP:fornecedor,
        valorP:valor,
        quantidadeP:quantidade
    }))

    fetch("Att",{
        method:'POST',
        body: JSON.stringify({
            idP:idProd,
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
            location.href='visualizarProd';
        }else{
            alert('Produto não atualizado!')
        }
    })
}