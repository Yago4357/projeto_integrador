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

    
    async function ProdutoPorId(id){
        const conn = await connect();
        const [produto] = await conn.query('SELECT Idprod,Nome,Fornecedor,Valor,Quantidade FROM produto where Idprod=?;', id);
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

    async function UsuarioPorId(id){
        const conn = await connect();
        const [usuario] = await conn.query('SELECT * FROM usuario where IdFun=?;', id);
        return usuario;
    }
    
    async function insertUsuario(Usuario){
        const conn = await connect();
        const insertUser = 'INSERT INTO usuario(Nome,Cpf,Contato,Senha,Tipo) VALUES (?,?,?,?,?);'
        const [rows] = await conn.query('SELECT * FROM usuario;');
        
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
    async function ClientePorId(id){
        const conn = await connect();
        const [Cliente] = await conn.query('SELECT * FROM cliente where idC=?;', id);
        return Cliente;
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
        const [rows]  = await conn.query('SELECT rvenda.*, produto.*, cliente.Nome as nomeCliente, usuario.Nome as nomefun FROM rvenda join produto on produto.Idprod = rvenda.idProd join cliente on cliente.idC = rvenda.idCliente join usuario on usuario.IdFun = rvenda.idUsuario;');
        return rows; 
    }
    async function relatorioVenda(Venda,Usuario){
        const conn = await connect();
        const relatorioVenda= 'INSERT INTO rvenda(comV,qtdV,vF,idCliente,idProd,idUsuario) VALUES (?,?,?,?,?,?);'
        const values = [Venda.comV, Venda.qtdV, Venda.vF, Venda.idCliente, Venda.idProd, Usuario.IdFun]
        return await conn.query(relatorioVenda,values);
    }
    async function bcompra(Idprod,Produto){
        const conn = await connect();
        const baixap = 'UPDATE produto SET Quantidade=? WHERE Idprod=?';
        const values = [Produto.Quantidade,Idprod]
        return await conn.query(baixap,values); 
    }
    async function Compra(){
        const conn = await connect();
        const [rows]= await conn.query('SELECT rcompra.*,produto.Nome as nomeProd, usuario.Nome as nomeFun FROM rcompra join produto on produto.Idprod = rcompra.idProd join usuario on usuario.IdFun = rcompra.idFun;');
        return rows;
    }
    async function relatorioCompra(Compra,Usuario){
        const conn = await connect();
        const relatorioCompra = 'INSERT INTO rcompra(idProd,qtdC,vC,forn,idFun) VALUES (?,?,?,?,?);'
        const values = [Compra.idProd,Compra.qtdC,Compra.vC,Compra.forn, Usuario.IdFun]
        return await conn.query(relatorioCompra,values);
    }
    
    module.exports = {Usuario,Produto,insertProduto,deleteProduto,updateProduto,insertUsuario,deleteUser,
    updateUser,Cliente,insertCliente,deleteCliente,updateCliente,relatorioVenda,Venda,bvenda,
    ProdutoPorId,ClientePorId,UsuarioPorId,bcompra,Compra,relatorioCompra}
    
