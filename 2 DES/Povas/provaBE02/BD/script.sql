DROP DATABASE IF EXISTS funcionarios;
CREATE DATABASE funcionarios;
USE funcionarios;

CREATE TABLE funcionario(
    matricula INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_completo VARCHAR(153) NOT NULL,
    data_desligamento DATE NOT NULL,
    ultimo_salario FLOAT(7,2) NOT NULL
);
