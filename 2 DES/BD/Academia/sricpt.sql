CREATE DATABASE academia;

USE academia;

CREATE TABLE aluno (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(153) NOT NULL,
peso FLOAT(3,2) NOT NULL,
altura FLOAT(3,2) NOT NULL,
nascimento INT NOT NULL
);