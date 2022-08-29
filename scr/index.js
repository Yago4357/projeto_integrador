function Validar(){
     var usuario = document.getElementById('usuario').value;
     var senha = document.getElementById('senha').value;

     console.log(JSON.stringify({
        usuario:usuario,
        senha:senha
     }));

     fetch("login",{
        method:'POST',
        body: JSON.stringify({
            usuario:usuario,
            senha:senha
        }),
        headers: {"content-type" : "application/json"}
     })

     .then(async (resp)=>{
        var status = await resp.text();
        console.log(status);
        if(status == 'Conectado'){
            location.href = 'TelaIni.html'
        }else{
            alert("Usuario ou senha incorretos!")
            location.href = 'index.html'
        }
     });

}