function Vender(){
    codP= document.getElementById('codP').value;
    qtdV = document.getElementById('qtdV').value;
    cliente = document.getElementById('cliente').value;


    console.log(JSON.stringify({
        codP:codP,
        qtdV:qtdV,
        cliente:cliente,
    }));
    
     console.log("rock da venda");
    
    fetch("Venda",{
    method:'POST',
    body: JSON.stringify({
        codP:codP,
        qtdV:qtdV,
        cliente:cliente,
    }),
    headers: {"content-type" : "application/json"}
    }) 
    
    .then(async (r)=>{
        var statusVenda = await r.text();
        console.log(statusVenda);
        if(statusVenda == 'Vendido'){
            alert("Produto vendido")
            location.href = 'visualizarVenda'
        }else{
            alert("Aconteceu algo inesperado!")
            location.href = 'visualizarVenda'
        }
     
     });
}