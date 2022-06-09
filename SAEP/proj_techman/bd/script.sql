DROP DATABASE IF EXISTS techman;
CREATE DATABASE techman CHARSET=UTF8 COLLATE UTF8_GENERAL_CI;

USE techman;

CREATE TABLE perfis (
	id integer not null auto_increment primary key,
	perfil varchar(50) not null
);

CREATE TABLE usuarios (
	id integer not null auto_increment primary key,
	senha varchar(100) not null,
    perfil integer not null,
    constraint fk_perfil foreign key (perfil) references perfis (id) on delete cascade
);

CREATE TABLE equipamentos (
	id integer not null auto_increment primary key,
	equipamento varchar(200) not null,
    imagem varchar(200) not null,
    descricao varchar(200) not null,
    ativo boolean not null,
    data date not null
);

CREATE TABLE comentarios (
	id integer not null auto_increment primary key,
	comentario varchar(200) not null,
    equipamento integer not null,
    perfil integer not null,
    data date not null,
    constraint fk_equipamento foreign key (equipamento) references equipamentos (id) on delete cascade,
    constraint fk_perfil_c foreign key (perfil) references perfis (id) on delete cascade
);

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SAEP/proj_techman/bd/Dados_Importacao/perfis.csv'
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SAEP/proj_techman/bd/Dados_Importacao/usuarios.csv'
INTO TABLE usuarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SAEP/proj_techman/bd/Dados_Importacao/equipamentos.csv'
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Desenvolvimento/Desktop/SAEP/proj_techman/bd/Dados_Importacao/comentarios.csv'
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;