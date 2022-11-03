function connect(){
        const mysql = require("mysql2/promise");
        const connection = mysql.createConnection("mysql://root:aluno@localhost:3306/banco");
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
        const [rows] = await conn.query('SELECT * FROM usuario;');
        return rows;
    }
    
    async function insertUsuario(Usuario){
        const conn = await connect();
        const insertUser = 'INSERT INTO usuario(Nome,Cpf,Contato,Senha,Tipo) VALUES (?,?,?,?,?);'
        const values = [Usuario.Nome,Usuario.Cpf,Usuario.Contato,Usuario.Senha,Usuario.Tipo];
        return await conn.query(insertUser, values);
    }
    async function deleteUser(IdFun){
        const conn = await connect();
        const deleteUser = 'DELETE FROM usuario where IdFun=?;';
        return await conn.query(deleteUser, [IdFun]);
    }
    async function updateUser(IdFun,Usuario){
        const conn = await connect();
        const updateUser = 'UPDATE usuario SET Nome=?, Cpf=?, Contato=? WHERE IdFun=?';
        const values=[Usuario.Nome,Usuario.Cpf,Usuario.Contato,IdFun]
        return await conn.query(updateUser,values); 
    }
    async function Cliente(){
        const conn = await connect();
        const [rows] = await conn.query('SELECT * FROM cliente;');
        return rows;
    }
    async function insertCliente(Cliente){
        const conn = await connect();
        const insertCliente = 'INSERT INTO cliente(Nome,Cpf,Contato) VALUES (?,?,?);'
        const values = [Cliente.Nome,Cliente.Cpf,Cliente.Contato];
        return await conn.query(insertCliente, values);
    }
    async function deleteCliente(idC){
        const conn = await connect();
        const deleteCliente = 'DELETE FROM cliente where idC=?;';
        return await conn.query(deleteCliente, [idC]);
    }
    async function updateCliente(idC,Cliente){
        const conn = await connect();
        const updateCliente = 'UPDATE cliente SET Nome=?, Cpf=?, Contato=? WHERE idC=?';
        const values=[Cliente.Nome,Cliente.Cpf,Cliente.Contato,idC]
        return await conn.query(updateCliente,values); 
    }
    async function bvenda(Idprod,Produto){
        const conn = await connect();
        const baixa = 'UPDATE produto SET Quantidade=? WHERE Idprod=?;';
        const values=[Produto.Quantidade,Idprod]
        return await conn.query(baixa,values); 
    }
    async function Venda(){
        const conn = await connect();
        const [rows]  = await conn.query('SELECT * FROM rvenda;');
        return rows; 
    }
    async function relatorioVenda(Venda){
        const conn = await connect();
        const relatorioVenda= 'INSERT INTO rvenda(comV,qtdV,vF,Cliente) VALUES (?,?,?,?);'
        const values = [Venda.comV, Venda.qtdV, Venda.vF, Venda.Cliente]
        return await conn.query(relatorioVenda,values);
    }
    
    module.exports = {Usuario,Produto,insertProduto,deleteProduto,updateProduto,insertUsuario,deleteUser,updateUser,Cliente,insertCliente,deleteCliente,updateCliente,relatorioVenda,Venda,bvenda}
    
