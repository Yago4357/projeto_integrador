function deleteUser(clicked_id){
    idFun = clicked_id;

    console.log(JSON.stringify({
        idF:idFun
    }))

    fetch("deleteUser",{
        method:'POST',
        body: JSON.stringify({
            idF:idFun
        }),
        headers: {"content-type" : "application/json"}
        }) 


    .then(async(resp)=>{
        var delet = await resp.text();
        console.log(delet);
        if(delet == 'Deletado'){
            alert('Usuario deletado!');
            location.href='visualizarFun';
        }else{
            alert('Não foi possivel excluir!')
        }
    })
}