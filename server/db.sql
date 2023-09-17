-- COMANDOS SQL CASO PREFIRA USAR ASSIM

--CREATE DATABASE 'turismo-bba';

CREATE TABLE restaurantes (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	endereco VARCHAR(255),
	telefone VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

CREATE TABLE eventos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	endereco VARCHAR(255),
	data_inicio DATE NOT NULL,
	data_fim DATE NOT NULL,
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

CREATE TABLE hospedagens (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	endereco VARCHAR(255),
	telefone VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

CREATE TABLE informacoes_uteis (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	endereco VARCHAR(255),
	telefone VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

CREATE TABLE usuarios (
	id UUID PRIMARY KEY,
	nome CHAR(30) UNIQUE,
	senha VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ,
	"deletedAt" TIMESTAMPTZ
);

CREATE TABLE guias_turisticos (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	telefone VARCHAR(255),
	tipos_turismo VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

CREATE TABLE atracoes_turisticas (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	descricao VARCHAR(255),
	endereco VARCHAR(255),
	telefone VARCHAR(255),
	"createdAt" TIMESTAMPTZ,
	"updatedAt" TIMESTAMPTZ
);

INSERT INTO restaurantes (nome, descricao, endereco, telefone, "createdAt", "updatedAt") VALUES
	('Lanchonete da Tiga', 'lanchonete', 'Rua Joaquim M. Carvalho, 000', '1632662252', '2023-09-07 21:30:06', '2023-09-07 21:30:06'),
	('Pizzaria do Zaca', 'pizzaria', 'Rua tal tal, 000', '1632660000', '2023-09-07 21:30:06', '2023-09-07 21:30:06');

INSERT INTO hospedagens (nome, descricao, endereco, telefone, "createdAt", "updatedAt") VALUES
	('Hotel Avenida', '', 'Avenida tal tal, 000', '1632661111', '2023-09-07 21:30:06', '2023-09-07 21:30:06'),
	('Pousada Prainha', '', 'Praia do juqueta, 000', '1632660000', '2023-09-07 21:30:06', '2023-09-07 21:30:06');

INSERT INTO usuarios (id, nome, senha, "createdAt", "updatedAt") VALUES
	('8c444964-e172-4066-884a-73ed95a2ffcb', 'usuario', '$2a$08$gyCFbjZRcgEv4.wpKZgpzOfZZJ9TJJCt/pyyDg0y3ZIVWanocDHB2', '2023-09-07 21:30:06', '2023-09-07 21:30:06'); -- 123456

INSERT INTO guias_turisticos (nome, telefone, "createdAt", "updatedAt") VALUES
	('João', '1632660000', '2023-09-07 21:30:06', '2023-09-07 21:30:06'), 
	('José', '1632661111', '2023-09-07 21:30:06', '2023-09-07 21:30:06');
	
INSERT INTO atracoes_turisticas (nome, endereco, telefone, "createdAt", "updatedAt") VALUES
	('Praça Herculandia', 'praça herculandia, s/n', '1632660000', '2023-09-07 21:30:06', '2023-09-07 21:30:06'), 
	('Praia Juqueta', 'praia juqueta, corrego do gato, s/n', '1632661111', '2023-09-07 21:30:06', '2023-09-07 21:30:06');

INSERT INTO eventos (nome, descricao, endereco, data_inicio, data_fim, "createdAt", "updatedAt") VALUES
	('Feira Livre', 'Todas as quintas', 'Praça Central', '2023-05-11', '2023-05-11', '2023-09-11 21:30:06', '2023-09-11 21:30:06'),
	('Feira Livre', 'Todas as quintas', 'Praça Central', '2023-09-28', '2023-09-28', '2023-09-11 21:30:06', '2023-09-11 21:30:06'),
	('Feira Livre', 'Todas as quintas', 'Praça Central', '2023-11-30', '2023-11-30', '2023-09-11 21:30:06', '2023-09-11 21:30:06');

INSERT INTO informacoes_uteis (nome, descricao, endereco, telefone, "createdAt", "updatedAt") VALUES
	('Taxi 1', '', 'centro', '1632661111', '2023-09-07 21:30:06', '2023-09-07 21:30:06'),
	('Posto Gasolina 1', '', 'Rodovia tal, km000', '1632660000', '2023-09-07 21:30:06', '2023-09-07 21:30:06');


-- DROP TABLE 
-- 	atracoes_turisticas, 
-- 	guias_turisticos, 
-- 	hospedagens, 
-- 	informacoes_uteis,
-- 	restaurantes,
-- 	usuarios,
-- 	eventos;
