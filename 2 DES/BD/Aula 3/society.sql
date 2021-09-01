drop database if exists society;
create database society;
show databases;
use society;

create table jogadores (

    cpf varchar(12) not null primary key,

    nome varchar(50) not null,

    telefone varchar(11)
);

create table grupos(

    id integer not null primary key,

    dia_semana integer not null,

    horario integer not null
);

create table joga(

    cpf varchar(12) not null,

    id integer not null
);

alter table joga 

add constraint fk_jogadores_cpf

foreign key (cpf) references jogadores(cpf);



alter table joga

add constraint fk_jogadores_grupo

foreign key (id) references grupos(id);