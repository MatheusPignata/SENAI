drop database if exists pescaria;

create database pescaria charset = UTF8 collate utf8_general_ci;

use pescaria;

create table pescador(
    id integer PRIMARY key not null auto_increment,
    cidade varchar(256) not null,
    quantidade integer not null
);

INSERT INTO pescador VALUES
    (1, 'Pedreira', 15),
    (2, 'Pedreira', 8),
    (3, 'Ubatuba', 102),
    (4, 'Pedreira', 14),
    (5, 'Santos', 200),
    (6, 'Santos', 98),
    (7, 'Santos', 107),
    (8, 'Pedreira', 7),
    (9, 'Campinas', 50),
    (10, 'Pedreira', 12),
    (11, 'Campinas', 14),
    (12, 'Campinas', 47),
    (13, 'Santos', 125),
    (14, 'Santos', 104),
    (15, 'Pedreira', 19),
    (16, 'Ubatuba', 205),
    (17, 'Ubatuba', 147),
    (18, 'Campinas', 40),
    (19, 'Ubatuba', 68),
    (20, 'Ubatuba', 173),
    (21, 'Campinas', 25),
    (22, 'Campinas', 37);

SELECT * FROM pescador;