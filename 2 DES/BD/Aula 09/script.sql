drop database if exists delivery;
create database delivery;
use delivery;

create table motoboys(
    id integer not null primary key auto_increment,
    nome varchar(153) not null,
    cpf integer(11) not null

);

create table produtos(
    id integer not null primary key auto_increment,
    nome varchar(50) not null,
    preco decimal(7,2) not null

);

create table clientes(
    id integer not null primary key auto_increment,
    nome varchar(153) not null,
    endereco varchar(150) not null
);

create table pedidos(
    id_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    id_motoboy integer,
    data Date not null,
    hora_pedido Time not null,
    hora_entrega Time,
    hora_fim Time
);

create table itens(
    id_pedido integer not null,
    id_produto integer not null,
    quantidade integer not null
);

alter table pedidos add
constraint fk_entrega foreign key (id_motoboy) references  motoboys(id);

alter table pedidos add
constraint fk_pede foreign key (id_cliente) references  clientes(id);

alter table itens add
constraint fk_item_pedido foreign key (id_pedido) references pedidos(id_pedido) on delete cascade;

alter table itens add
constraint fk_item_produto foreign key (id_produto)references produtos(id) on delete cascade;

describe entregadores;
describe produtos;
describe clientes;
describe pedidos;
describe itens;
show tables;

LOAD DATA INFILE 'C:/Users/aluno/Desktop/delovery/clientes.csv' INTO TABLE clientes FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '/n';
LOAD DATA INFILE 'C:/Users/aluno/Desktop/delovery/motoboys.csv' INTO TABLE motoboys FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '/r/n';
LOAD DATA INFILE 'C:/Users/aluno/Desktop/delovery/produtos.csv' INTO TABLE produtos FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '/r/n';
LOAD DATA INFILE 'C:/Users/aluno/Desktop/delovery/pedidos.csv' INTO TABLE pedidos FIELDS TERMINATED BY ';' ENCLOSED BY '"' LINES TERMINATED BY '/r/n';