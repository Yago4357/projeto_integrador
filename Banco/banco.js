const mysql = require('mysql2');
async function connect(){
    console.log("Conectou!");
    const mysql = require("mysql2/promise");

    const connection = await mysql.createConnection("mysql://root:aluno@localhost:3306/banco");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

module.exports = {selectCustomers}

module.exports= {}