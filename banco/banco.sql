create table banco (
	id_funcionario integer PRIMARY KEY AUTOINCREMENT,
	id_produto integer PRIMARY KEY AUTOINCREMENT,
	id_produto_vendido integer PRIMARY KEY AUTOINCREMENT,
	id_venda integer PRIMARY KEY AUTOINCREMENT,
	id_gerente integer PRIMARY KEY AUTOINCREMENT,
	id_vendedor integer PRIMARY KEY AUTOINCREMENT,
	nome_funcionario VARCHAR(50),
	cidade_funcionario VARCHAR(50),
	estado_funcionario VARCHAR(50),
	bairro_funcionario VARCHAR(50),
	numero_rua_funcionario VARCHAR(50)
);