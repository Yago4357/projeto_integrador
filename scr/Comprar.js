function Comprar(){
    t=  $("[id^='codPC']");
    u= $("[id^='qtdC']");
    for(var i = 0; i< t.length;i++){
     
     codPC= t[i].value;
     qtdC = u[i].value;
     vC = document.getElementById('labelValor').value;
     Fun = document.getElementById('Fun').value;
     if(codPC==null||codPC<1){
         alert("Código do produto não exite")
     }else if(qtdC==null||qtdC<1){
         alert("Quantidade não permitida")
     }else if(Fun.length!=11){
         alert("CNPJ não existe")
     }else{
 
 
     console.log(JSON.stringify({
         codPC:codPC,
         vC:vC,
         qtdC:qtdC,
         Fun:Fun,
     }));
     
      console.log("rock da venda");
     
     fetch("Compra",{
     method:'POST',
     body: JSON.stringify({
        codPC:codPC,
        vC:vC,
        qtdC:qtdC,
        Fun:Fun,
     }),
     headers: {"content-type" : "application/json"}
     }) 
     
     .then(async (r)=>{
         var statusCompra = await r.text();
         console.log(statusCompra)
         if(statusCompra == 'Comprado'){
             alert("Produtos Comprados")
             location.href = 'visualizarCompra'
         }else{
             alert("Dados incorretos!")
             location.href = 'visualizarCompra'
         }
      
      });
 }
 }
 }