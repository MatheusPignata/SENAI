01) Qual o telefone do cliente "Cesar Augusto Pascali Rago"?

R)  | 1930031664 |
    | 1930025914 |
    | 1930029833 |
    | 1930030615 |

    select t.telefone from telefones t inner join clientes c on c.Cliente_id = t.cliente_id where nome = 'Cesar Augusto Pascali Rago';
_______________________________________________________________________________________________________________________________________________________________

2) Quantos telefones ele possui cadastrado?

R)  4

    select count(t.telefone) from telefones t inner join clientes c on c.Cliente_id = t.cliente_id where nome = 'Cesar Augusto Pascali Rago';
_______________________________________________________________________________________________________________________________________________________________

3) Através de comandos SQL/DML Remova os demais telefones e cadastre apenas o novo telefone 19991865503.

R)  delete from telefones where cliente_id  = (select Cliente_id from clientes where nome = 'Cesar Augusto Pascali Rago');
    insert into telefones (cliente_id, telefone) values (12, '19991865503');
_______________________________________________________________________________________________________________________________________________________________

4) Crie uma view que mostre os clientes e telefones juntos, coloque o nome de "vw_clientes"

R) create view vw_clientes as select c.nome, t.telefone from clientes c inner join telefones t on c.Cliente_id = t.cliente_id;
_______________________________________________________________________________________________________________________________________________________________

5) Acrescente um novo cliente "Joaquim Inácio Silva", um endereço qualquer, telefone 19989995511 que pediu 2 pizzas Baiana e uma de atum

R)  insert into clientes values (default, 'Joaquim Inácio Silva', 'Rua das Curvas', 7, '', 'Bairro das Ruas', '');
    insert into telefones values (last_insert_id(), '19989995511');
    insert into Pedidos(cliente_id, data, hora) values (last_insert_id(), curdate(), curtime());
    insert into Itens_pedido(pedido_id, pizza_id, quantidade, valor)
    values (last_insert_id(),(select pizza_id from pizzas where nome = 'Baiana'),1,(select valor from pizzas where nome = 'Baiana')),
           (last_insert_id(),(select pizza_id from pizzas where nome = 'Atum'),1,(select valor from pizzas where nome = 'Atum'));