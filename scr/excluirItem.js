function deleteProd(clicked_id){
    idProd = clicked_id;

    console.log(JSON.stringify({
        idP:idProd
    }))
    console.log(idProd);

    fetch("TESTE",{
        method:'POST',
        body: JSON.stringify({
            idP:idProd
        }),
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var delet = await resp.text();
        console.log(delet);
        if(delet == 'Deletado'){
            alert('Produto deletado!');
            location.href='visualizarProd';
        }else{
            alert('Algo inesperado ocorreu!')
        }
    })
}