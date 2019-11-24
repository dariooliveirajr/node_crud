CREATE DATABASE node;
use node;

CREATE TABLE usuario(
	id_usuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50),
	sobrenome VARCHAR(50),
	dtnascimento VARCHAR(50),
	endereco VARCHAR(50),
	tel VARCHAR(50),
	email VARCHAR(50)
);

CREATE TABLE produtos(
	idprodutos INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50),
	marca VARCHAR(50),
	validade VARCHAR(50)
);

CREATE TABLE funcionarios(
	idfuncionarios INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50),
	sobrenome VARCHAR(50),
	nascimento VARCHAR(50),
	endereco VARCHAR(50),
	rg VARCHAR(50),
	cpf VARCHAR(50),
	dt_adm VARCHAR(50),
	cargo VARCHAR(50),
	salario VARCHAR(50)
);