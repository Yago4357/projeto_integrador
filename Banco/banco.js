const mysql = require('mysql2');
async function connect(){
    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection("mysql://root:123abc@localhost:3306/banco");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
async function Usuario(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT Nome,Senha FROM usuario;');
    return rows;
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
module.exports = {Usuario,Produto, insertProduto}
