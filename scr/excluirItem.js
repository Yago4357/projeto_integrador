function deleteProd(clicked_id){
    idProd = clicked_id;

    console.log(JSON.stringify({
        idP:idProd
    }))
    console.log(idProd);
    alert("Produto");
    location.href="/visualizarProduto"
    fetch("DeletarProduto",{
        method:'POST',
        body: JSON.stringify({
            idP:idProd
        }),
        headers: {"content-type" : "application/json"}
        }) 
}