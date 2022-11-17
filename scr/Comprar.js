function Comprar(){
    t=  $("[id^='codPC']");
    u= $("[id^='qtdC']");
    
    for(var i = 0; i< t.length;i++){
     codPC= t[i].value;
     qtdC = u[i].value;
     prod = document.getElementById('nP').textContent;
     vC = document.getElementById('labelValor').innerText;
     Fun = document.getElementById('labelForn').innerText;
     
    /* console.log(codPC);
     console.log(qtdC);
     console.log(prod);
     console.log(vC);
     console.log(Fun);*/

     console.log(JSON.stringify({
         codPC:codPC,
         vC:vC,
         prod:prod,
         qtdC:qtdC,
         Fun:Fun,
     }));
     
      console.log("rock da venda");
     
     fetch("Compra",{
     method:'POST',
     body: JSON.stringify({
        codPC:codPC,
        vC:vC,
        prod:prod,
        qtdC:qtdC,
        Fun:Fun,
     }),
     headers: {"content-type" : "application/json"}
     }) 
     
     .then(async (res)=>{
         var statusCompra = await res.text();
         console.log(statusCompra)
         if(statusCompra == 'Comprado'){
             alert("Produtos Comprados")
             location.href = 'relatCompra'
         }else{
             alert("Dados incorretos!")
             location.href = 'relatCompra'
         }
      
      });
 }
 }
 