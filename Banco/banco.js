/*const mysql = require('mysql2');
    const conn = mysql.createConnection({
        host: 'localhost', 
        user: 'root',      
        password: '28047814lw',     
        database: 'banco' 
    });

    conn.connect(function(err){
        if (err) throw err;
  console.log('Mysql Conectou');
    });*/
    function connect(){
        const mysql = require("mysql2/promise");
        const connection = mysql.createConnection("mysql://root:28047814lw@localhost:3306/banco");
        global.connection = connection;
        return connection;
    }
    
    async function Produto(){
        const conn = await connect();
        const [produto] = await conn.query('SELECT Idprod,Nome,Fornecedor,Valor,Quantidade FROM produto;');
        return produto;
    }
    
    async function insertProduto(Produto){
        const conn = await connect();
        const insertProd = 'INSERT INTO produto(Nome,Fornecedor,Valor,Quantidade) VALUES (?,?,?,?);'
        const values = [Produto.Nome,Produto.Fornecedor,Produto.Valor,Produto.Quantidade];
        return await conn.query(insertProd, values);
    }
    
    async function deleteProduto(Idprod){
        const conn = await connect();
        const deleteProd = 'DELETE FROM produto where Idprod=?;';
        return await conn.query(deleteProd, [Idprod]);
    }
    
    async function updateProduto(Idprod,Produto){
        const conn = await connect();
        const updateProd = 'UPDATE produto SET Nome=?, Fornecedor=?, Valor=?, Quantidade=? WHERE Idprod=?';
        const values=[Produto.Nome,Produto.Fornecedor,Produto.Valor,Produto.Quantidade,Idprod]
        return await conn.query(updateProd,values); 
    }
    
    async function Usuario(){
        const conn = await connect();
        const [rows] = await conn.query('SELECT Nome,Senha FROM usuario;');
        return rows;
    }
    
    async function insertUsuario(Usuario){
        const conn = await connect();
        const insertUser = 'INSERT INTO usuario(Nome,Cpf,Contato,Senha) VALUES (?,?,?,?);'
        const values = [Usuario.Nome,Usuario.Cpf,Usuario.Contato,Usuario.Senha];
        return await conn.query(insertUser, values);
    }
    
    
    module.exports = {Usuario,Produto,insertProduto,deleteProduto,updateProduto,insertUsuario}
    