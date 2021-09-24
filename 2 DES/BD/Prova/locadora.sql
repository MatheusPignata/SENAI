drop database if exists locadora;
create database locadora;
use locadora;

create table veiculos(
    placa varchar(7) not null primary key,
    modelo varchar(15) not null,
    marca varchar(15) not null,
    cor varchar(15) not null,
    valor_diaria float(6,2) not null,
    ano integer(4) not null,
    tipo varchar(20) not null
)

create table cliente(
    cpf integer(11) not null primary key,
    nome varchar(153) not null,
    endereco varchar(150) not null,
    email varchar(100) not null,
    telefone integer(11) not null
)

create table locacoes(
    id integer not null primary key auto_increment,
    data_retirada date not null,
    data_devolucao date not null,
    obs varchar(300),
    valor_efetivo float(9,2),
    cpf integer(11) not null,
    constraint cpf_cliente_fk foreign key (cpf) references cliente (cpf),
    placa varchar(7) not null,
    constraint placa_veiculos_fk foreign key (placa) references veiculos (placa)
)

-- comandos para teste de inserção de dados

-- INSERT INTO veiculos (placa, modelo, marca, cor, valor_diaria, ano, tipo) VALUES ('ABC123', 'Civic', 'Honda', 'Prata', 200.00, 2018, 'Sedan');
-- INSERT INTO cliente (cpf, nome, endereco, email, telefone) VALUES (12345678910, 'José Maria Santos Silva', 'Rua das Dores, 123, Bairro das Colinas', 'josezinreidelas@gmail.com', 11970707070);
-- INSERT INTO locacoes (id, data_retirada, data_devolucao, obs, valor_efetivo)