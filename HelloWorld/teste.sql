//criar databeses
CREATE DATABASE testdb;

//criar tabelas no database
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);
//achar usuario especifico
select * from usuarios where senha = "123";

//achar todos os usuarios
select * from usuarios;

//introduzir
INSERT INTO usuarios(nome,emal,senha) VALUES(
    "Gui",
    "gui1@gmail.com",
    "321"
);

//deletar
DELETE usuarios WHERE senha = "123";

//atualizar 
UPDATE usuarios SET nome  = "Nome de teste" WHERE nome ="gui";

//alterar
ALTER TABLE usuarios ADD nome VARCHAR;

//ver tabelas
DESCRIBE usuarios;