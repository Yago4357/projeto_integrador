function Vender(){
    codP= document.getElementById('codP').value;
    qtdV = document.getElementById('qtdV').value;
    cliente = document.getElementById('cliente').value;
    if(codP==null||codP<1){
        alert("Código do produto não exite")
    }
    else if(qtdV==null||qtdV<1){
        alert("Quantidade não permitida")
    }else if(cliente.length!=11){
        alert("CNPJ não existe")
    }else{


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
        console.log(statusVenda)
        if(statusVenda == 'Vendido'){
            alert("Produto vendido")
            location.href = 'visualizarVenda'
        }else{
            alert("Dados incorretos!")
            location.href = 'visualizarVenda'
        }
     
     });
}
}
