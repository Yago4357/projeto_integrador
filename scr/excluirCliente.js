function deleteCliente(clicked_id){
    idC = clicked_id;

    console.log(JSON.stringify({
        idC:idC
    }))
    console.log(idC);

    fetch("delC",{
        method:'POST',
        body: JSON.stringify({
            idC:idC
        }),
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var delet = await resp.text();
        console.log(delet);
        if(delet == 'Deletado'){
            alert('Cliente deletado!');
            location.href='visualizarCliente';
        }else{
            alert('Algo inesperado ocorreu!')
        }
    })
}