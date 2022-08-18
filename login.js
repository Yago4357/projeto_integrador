function Logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "usuario" && senha == "senha" ){
        alert("Approve");
    }
    else{
        alert("Denied");
    }
}