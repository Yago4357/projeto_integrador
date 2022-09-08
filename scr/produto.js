
function Cadastrar(){
    console.log("Conectou 1");
    var nomeP = document.getElementById('nome').value;
    var forn = document.getElementById('fornecedor').value;
    var valor = document.getElementById('valor').value;
    var qtd = document.getElementById('quantidade').value;

    console.log(JSON.stringify({
        nomeP:nomeP,
        forn:forn,
        valor:valor,
        qtd:qtd
     }));

    fetch("cadP",{
    method:'POST',
    body: JSON.stringify({
        nomeP:nomeP,
        forn:forn,
        valor:valor,
        qtd:qtd
    }),
    headers: {"content-type" : "application/json"}
    }
    /*.then(async (res)=>{
        var teste = await res.text();
        console.log(teste);
        const Produto = await banco.Produto();
        console.log(Produto);
     })*/
);

/*(async () => {
    console.log('Começou!');
    
    console.log('INSERT INTO Produto');
    const result = await banco.insertProduto({Nome: nomeP , Fornecedor: forn, Valor: valor, Quantidade: qtd });
    console.log(result);
 
    console.log('SELECT * FROM Produto');
    const Produto = await banco.Produto();
    console.log(Produto);
})();*/
};
/*function cadastrarProd(){
    console.log("Conectou 1");
    var nomeP = document.getElementById('nome').value;
    var forn = document.getElementById('fornecedor').value;
    var valor = document.getElementById('valor').value;
    var qtd = document.getElementById('quantidade').value;

(async () => {
    console.log('Começou!');
    
    console.log('INSERT INTO Produto');
    const result = await banco.insertProduto({Nome: nomeP , Fornecedor: forn, Valor: valor, Quantidade: qtd });
    console.log(result);
 
    console.log('SELECT * FROM Produto');
    const Produto = await banco.Produto();
    console.log(Produto);
})();
};*/